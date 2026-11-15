import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collective Passport",
  description: "The AI Collective Passport app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
