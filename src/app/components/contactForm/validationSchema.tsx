import * as z from "zod";

export const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  workEmail: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phoneNumber: z.string().min(10, "Phone Number is required"),
  message: z.string().min(1, "Message is required"),
});
