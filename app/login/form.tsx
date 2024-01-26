// 'use client'

// import { Button } from "@/components/ui/button";
// import { FormEvent } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const router = useRouter();

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email")?.toString().trim();
//     const password = formData.get("password")?.toString().trim();

//     if (!email || !password) {
//       console.error("Email and password are required.");
//       return;
//     }

//     try {
//       const resp = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (!resp?.error) {
//         router.push("/");
//         router.refresh();
//       } else {
//         console.error("Authentication failed:", resp.error);
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
//         Login
//       </Button>
//     </form>
//   );
// }
