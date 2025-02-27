import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import {
  ColorSchemeScript,
  Container,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import type { Metadata } from "next";
import "./globals.css";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Leonard Loja",
  description:
    "My Developer Portfolio Website. It shows my skills, experience, and projects.",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="flex min-h-screen antialiased">
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Sidebar />
          <div className="flex max-h-screen min-h-screen flex-1 flex-col">
            <main className="flex-1 overflow-y-auto p-3">
              <Container size="lg">{children}</Container>
            </main>
            <footer className="border-t border-gray-300 px-3 py-1 dark:border-gray-100/20">
              <Footer />
            </footer>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
