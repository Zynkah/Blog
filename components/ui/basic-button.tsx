import React from "react";
import { Button } from "@/components/ui/button";

interface BasicButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  asChild?: boolean;
}

export default function BasicButton({ children, type }: BasicButtonProps) {
  return (
    <Button className="hover:scale-110 hover:text-bold w-max m-auto" type={type}>
      {children}
    </Button>
  );
}
