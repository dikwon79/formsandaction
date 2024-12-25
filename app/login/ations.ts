"use server";

// Import Zod
import { z } from "zod";

// Define the Zod schema
const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .endsWith("@zod.com", "Email must end with '@zod.com'"),
  username: z.string().min(5, "Username must be at least 5 characters long"),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters long")
    .regex(/\d/, "Password must include at least one number"),
});

export async function login(prevState: any, formData: FormData) {
  console.log(prevState);

  const email = formData.get("email");
  const username = formData.get("username");
  const password = formData.get("password");

  console.log(email, password);
  console.log("i run in the server baby!");

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = { email, username, password };

  try {
    // Validate the form data
    formSchema.parse(data);
    return { success: true, message: "Form submission successful!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Define type for fieldErrors
      const fieldErrors: Record<string, string[]> = {};

      error.errors.forEach((err) => {
        const fieldName = err.path[0] as string; // Ensure fieldName is a string
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = [];
        }
        fieldErrors[fieldName].push(err.message);
      });

      return { success: false, errors: fieldErrors }; // Return field-specific errors
    }

    return {
      success: false,
      errors: { general: ["An unexpected error occurred"] },
    };
  }
}
