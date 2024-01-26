import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-prodvider";
// import { getServerSession } from "next-auth";
// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zynkah's Blog",
  description: "Blog posts on web development revolving around Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* {!!session && (
            <div className="grid grid-col-2 gap-2 justify-end text-right mr-2">
              <Link href="/profile" legacyBehavior passHref>
                {session?.user?.email}
              </Link>

              <Link href="/api/auth/signout" legacyBehavior passHref>
                Logout
              </Link>
            </div>
          )}

          {!session && (
            <div className="grid grid-col-2 gap-2 justify-end text-right mr-2">
              <Link href="/register" legacyBehavior passHref>
                Register
              </Link>

              <Link href="/login" legacyBehavior passHref>
                Login
              </Link>
            </div>
          )} */}

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
