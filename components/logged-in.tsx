import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function LoggedIn() {
  const session = await getServerSession();

  return (
    <>
      {!!session && (
        <>
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/profile" legacyBehavior passHref>
              <NavigationMenuLink>{session?.user?.email}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:scale-110 hover:text-bold text-white">
            <Link href="/api/auth/signout" legacyBehavior passHref>
              <NavigationMenuLink>Logout</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </>
      )}

      {!session && (
        <>
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
        </>
      )}
    </>
  );
}
