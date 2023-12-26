import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./theme-button";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-slate-600 p-2">
      <NavigationMenu className="m-6 md:gap-16 gap-4 text-lg">
        <NavigationMenuList className="hover:scale-110 hover:text-bold text-white">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/articles" legacyBehavior passHref>
              <NavigationMenuLink>Articles</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/resources" legacyBehavior passHref>
              <NavigationMenuLink>Resources</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink>Projects</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="fixed top-6 right-1">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <ModeToggle />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
