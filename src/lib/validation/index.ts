import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "too Short" }),
  username: z.string().min(2, { message: "too Short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be atleast 8 charecters" }),
});
