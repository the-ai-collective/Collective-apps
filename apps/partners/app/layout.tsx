import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collective Partners",
  description: "The AI Collective partners app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
