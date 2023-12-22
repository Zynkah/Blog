"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ContactForm() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleMessageChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setMessage(e.target.value)
    };

  return (
    <div className="m-auto p-4 rounded border items-center justify-center w-[700px]">
      <h1 className="font-bold text-3xl text-center justify-center">
        Sign the guestbook
      </h1>

      <form onSubmit={onSubmit} className="space-y-2 mx-6">
        <Label>Username:</Label>
        <Input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="username"
          placeholder="✶ Your username ✶"
          className="rounded caret-slate-400 opacity-50 focus:opacity-100"
        />

        <Label>Message:</Label>
        <Textarea
          id="guestbookMessage"
          value={message}
          onChange={(handleMessageChange)}
          placeholder="✶ Leave me a message ✶"
          className="cursor-text resize-y rounded carat-slate-400 opacity-50 focus:opacity-100"
        />

        <Button
          type="submit"
          className="hover:scale-110 hover:text-bold"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
