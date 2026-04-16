import "./globals.css";
import QueryProvider from "@/providers/query-provider";

export const metadata = {
  title: "AI Claim Orchestrator",
  description: "AI-powered claim dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}