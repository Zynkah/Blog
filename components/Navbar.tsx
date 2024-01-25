"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./theme-button";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="sticky z-10 top-0 w-full bg-slate-600 p-2">
      <Button
        className="bg-slate-600 hover:bg-slate-600 text-white sm:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <Menu />
      </Button>

      <NavigationMenu
        className={`mobile-nav-content ${isNavOpen ? "open" : ""}`}
      >
        <NavigationMenuList className="mobile-menu-list m-6 md:gap-16 gap-4 text-lg">
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/articles" legacyBehavior passHref>
              <NavigationMenuLink>Articles</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/resources" legacyBehavior passHref>
              <NavigationMenuLink>Resources</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink>Projects</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/register" legacyBehavior passHref>
              <NavigationMenuLink>Register</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink>Login</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuList className="fixed md:top-6 top-2 right-1">
            <NavigationMenuItem>
              <NavigationMenuLink>
                <ModeToggle />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
