import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collective Chapter Organizer",
  description: "The AI Collective chapter organizer app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
