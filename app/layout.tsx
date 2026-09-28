import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sine Barro | Seu próximo passo começa aqui",
  description: "Oportunidades de trabalho, qualificação e cidadania em Barro e região.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
