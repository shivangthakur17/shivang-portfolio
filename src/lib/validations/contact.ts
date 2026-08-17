import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
  email: z.string().trim().email("Invalid email address").toLowerCase().max(255),
  company: z.string().trim().max(150, "Company name cannot exceed 150 characters").optional().or(z.literal("")),
  reason: z.string().trim().min(1, "Please select a reason").max(50),
  subject: z.string().trim().min(2, "Subject is required").max(150, "Subject cannot exceed 150 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message cannot exceed 2000 characters"),
  
  // Honeypot field
  botField: z.string().max(0, "Invalid submission").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
