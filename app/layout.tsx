import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto_Mono({
  weight: ["100", "200", "300", "400", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byrd Small Group",
  description: "Small group details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={roboto.className}>
          {children}
          <Analytics />
        </body>
      </UserProvider>
    </html>
  );
}
