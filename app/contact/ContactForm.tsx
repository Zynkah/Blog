"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AlertMessage from "@/components/alert";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [username, setUsername] = useState("");
  const [guestbookMessage, setGuestbookMessage] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const res = await fetch("/api/post-guestbook", {
        method: "POST",
        body: JSON.stringify({
          username,
          guestbookMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setAlert({ type: "success", message: "Your message has been added!" });
      } else {
        setAlert({
          type: "failure",
          message: "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        type: "failure",
        message: "Something went wrong, please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGuestbookMessage(e.target.value);
  };

  return (
    <div className="m-auto p-4 rounded border items-center justify-center md:w-[700px]">
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
          required
          id="guestbookMessage"
          value={guestbookMessage}
          onChange={handleMessageChange}
          placeholder="✶ Leave me a message ✶"
          className="cursor-text resize-y rounded carat-slate-400 opacity-50 focus:opacity-100"
        />
        {alert.type && (
          <AlertMessage type={alert.type} message={alert.message} />
        )}
        <Button>
          {submitting ? (
            <Button disabled>
              <Loader2 className="mr-2 hr w-4 animate-spin" />
              Submitting...
            </Button>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}
