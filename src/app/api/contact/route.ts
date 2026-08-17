import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validations/contact";
import { extractIP, hashIP } from "@/lib/ip";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/email";

// Ensure this route is evaluated dynamically so we get fresh IPs and dates
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // 1. Honeypot check
    // If a bot fills out the visually hidden field, pretend we succeeded.
    // We don't want to tip them off that their submission was blocked.
    if (validatedData.botField && validatedData.botField.length > 0) {
      console.warn("Honeypot triggered. Silently rejecting submission.");
      return NextResponse.json(
        { success: true, message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // 2. IP extraction & Rate limiting
    const rawIp = extractIP(request);
    const ipIdentifier = hashIP(rawIp);

    // Calculate the start of the current UTC day
    const now = new Date();
    const startOfUTCDay = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0)
    );

    // Count submissions from this IP identifier today
    // Note: A count() followed by create() is not perfectly atomic and could 
    // theoretically be bypassed by concurrent requests. For a low-volume 
    // portfolio, this is an acceptable tradeoff to avoid complex Redis setups.
    const dailySubmissions = await prisma.contactMessage.count({
      where: {
        ipIdentifier,
        createdAt: {
          gte: startOfUTCDay,
        },
      },
    });

    if (dailySubmissions >= 5) {
      // The user has exceeded the daily limit
      return NextResponse.json(
        { success: false, message: "You have reached the maximum number of messages for today. Please try again tomorrow." },
        { status: 429 }
      );
    }

    // 3. Persist the message to PostgreSQL
    const messageRecord = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        reason: validatedData.reason,
        subject: validatedData.subject,
        message: validatedData.message,
        ipIdentifier,
        deliveryState: "PENDING",
      },
    });

    // 4. Attempt Resend Delivery
    // The record is already safely in the DB. If email fails, the message isn't lost.
    const emailSent = await sendContactNotification({
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      reason: validatedData.reason,
      subject: validatedData.subject,
      message: validatedData.message,
    });

    // 5. Update delivery state
    await prisma.contactMessage.update({
      where: { id: messageRecord.id },
      data: { deliveryState: emailSent ? "SENT" : "FAILED" },
    });

    // We still return success to the user even if the email failed, because
    // the message is safely stored in the database.
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
