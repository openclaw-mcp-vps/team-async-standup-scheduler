import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSync — Smart Async Standups for Distributed Teams",
  description: "Automatically schedules async video standups ensuring overlap windows for distributed teams with minimal disruption."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0b76174-6c23-4d87-86c8-5872e6402ea6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
