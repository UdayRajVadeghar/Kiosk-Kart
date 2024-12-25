import { z } from "zod";

const SignUpSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  email: z.string().email("Invalid mail Address"),
  password: z.string().min(6, "Password must be atleast 6 characters"),
  role: z.enum(["customer", "seller"]),
});
