import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Toaster } from "~/components/ui/sonner";

export const metadata = {
  title: "Duo Admin API",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/duo.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
      <Toaster richColors closeButton />
    </html>
  );
}
