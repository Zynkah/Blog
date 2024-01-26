// "use client";
// import { Button } from "@/components/ui/button";
// import { FormEvent } from "react";

// export default function RegisterForm() {
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const username = formData.get("username")?.toString().trim();
//     const email = formData.get("email")?.toString().trim();
//     const password = formData.get("password")?.toString().trim();

//     if (!username || !email || !password) {
//       console.error("Username, email, and password are required.");
//       return;
//     }

//     try {
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//         }),
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//         console.log("Registration successful:", responseData);
//       } else {
//         console.error("Registration failed:", responseData.error);
//       }
//     } catch (error) {
//       console.error("An unexpected error occurred:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-2 mt-10 mx-auto max-w-md"
//     >
//       <input
//         name="username"
//         className="border rounded"
//         type="text"
//         placeholder="Username"
//         required
//       />
//       <input
//         name="email"
//         className="border rounded"
//         type="email"
//         placeholder="Email"
//         required
//       />
//       <input
//         name="password"
//         className="border rounded"
//         type="password"
//         placeholder="Password"
//         required
//       />
//       <Button className="m-auto w-24" type="submit">
//         Register
//       </Button>
//     </form>
//   );
// }

