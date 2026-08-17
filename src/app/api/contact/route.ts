import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // IP Extraction for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "127.0.0.1";

    // -------------------------------------------------------------------------
    // TODO: Implement Rate Limiting Architecture (e.g. 5 requests per day)
    // -------------------------------------------------------------------------
    // if (await isRateLimited(ip)) {
    //   return NextResponse.json({ success: false, message: "Too many requests" }, { status: 429 });
    // }

    // -------------------------------------------------------------------------
    // TODO: Connect to Prisma when database is provisioned
    // -------------------------------------------------------------------------
    // const message = await prisma.contactMessage.create({
    //   data: {
    //     ...validatedData,
    //     ipHash: hash(ip), // Pseudocode
    //   }
    // });
    console.log(`[Contact Scaffold] Simulated DB save for: ${validatedData.email} from IP: ${ip}`);

    // -------------------------------------------------------------------------
    // TODO: Connect to Resend when API key is active
    // -------------------------------------------------------------------------
    // await resend.emails.send({
    //   from: 'Contact Form <contact@yourdomain.com>',
    //   to: 'you@yourdomain.com',
    //   subject: `New message from ${validatedData.name}`,
    //   text: validatedData.message
    // });
    console.log(`[Contact Scaffold] Simulated email send to admin`);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
