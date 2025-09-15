import type { Metadata } from "next";
import    {Space_Grotesk} from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Mental Health App",
  description: "A web application focused on mental health awareness and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
