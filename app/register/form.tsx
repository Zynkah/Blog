"use client";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

export default function RegisterForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/register`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.get('username'),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mt-10 mx-auto max-w-md"
    >
      <input name="username" className="border rounded" type="username" placeholder="username"/>
      <input name="email" className="border rounded" type="email" placeholder="email"/>
      <input name="password" className="border rounded" type="password" placeholder="password" />
      <Button className="m-auto w-24" type="submit">
        Register
      </Button>
    </form>
  );
}
