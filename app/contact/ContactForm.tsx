"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export function ContactForm() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        body: JSON.stringify({
          username,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.error("Error:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
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
          onChange={handleMessageChange}
          placeholder="✶ Leave me a message ✶"
          className="cursor-text resize-y rounded carat-slate-400 opacity-50 focus:opacity-100"
        />

        <Button type="submit" className="hover:scale-110 hover:text-bold">
          Submit
        </Button>
      </form>
    </div>
  );
}
