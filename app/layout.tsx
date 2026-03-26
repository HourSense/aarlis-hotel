import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The AARLIS Hotel Panchkula — Vignette Collection by IHG",
  description:
    "A one-of-a-kind luxury hotel at City Centre, Sector 3, Panchkula. 145 rooms, 11 suites, 4 dining venues, and 2,200 sqm of event space — where the Shivaliks meet modern luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
          <div className="w-full bg-black text-white text-center text-xs py-2">
            Built by{" "}
            <a
              href="https://cratorai.com/software"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Crator AI
            </a>
          </div>
          {children}
        </body>
    </html>
  );
}
