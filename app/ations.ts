"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);

  console.log(formData.get("email"), formData.get("password"));
  console.log("i run in the server baby!");

  const password = formData.get("password");
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (password === "12345") {
    console.log("Login successful!");
    return {
      errors: ["login success"],
    };
  } else {
    console.log("Login fail!");
    return {
      errors: ["wrong password"],
    };
  }
}
