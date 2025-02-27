import Sidebar from "@/components/Sidebar";
import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  ColorSchemeScript,
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
      <body className="antialiased flex">
        <MantineProvider theme={theme}>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <div className=" flex-1 p-3">{children}</div>
            <div className=" px-3 py-1 border-t border-gray-400 dark:border-gray-100/20">
              Footer
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
