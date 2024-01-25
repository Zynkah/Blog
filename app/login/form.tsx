"use client";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mt-10 mx-auto max-w-md"
    >
      <input
        name="email"
        className="border rounded"
        type="email"
        placeholder="email"
      />
      <input
        name="password"
        className="border rounded"
        type="password"
        placeholder="password"
      />
      <Button className="m-auto w-24" type="submit">
        Login
      </Button>
    </form>
  );
}
