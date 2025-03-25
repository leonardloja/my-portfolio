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
      <body className="h-screen antialiased">
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <div className="hidden sm:flex">
            <Sidebar />
            <div className="flex h-screen flex-1 flex-col">
              <main className="flex-1 overflow-y-scroll p-3">
                <Container size="lg" h="100%">
                  {children}
                </Container>
              </main>
              <footer className="min-w-0 border-t border-gray-300 px-3 py-1 dark:border-gray-100/20">
                <Footer />
              </footer>
            </div>
          </div>
          {/* Mobile layout */}
          <div className="flex h-full flex-col sm:hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto px-3 pb-3">
              <Container size="lg" h="100%">
                {children}
              </Container>
            </main>
            <footer className="border-t border-gray-300 px-1 py-1 dark:border-gray-100/20">
              <Footer />
            </footer>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
