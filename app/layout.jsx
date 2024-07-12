import { Layout } from "@/components/dom/Layout";
import "@/global.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Yiru Wang's Portfolio",
  description: "An artist based in London.",
};

const proxima = localFont({
  src: [
    {
      path: "../public/fonts/proximanova_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/proximanova_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/proximanova_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-proxima",
});

const cardinal = localFont({
  src: [
    {
      path: "../public/fonts/cardinalfruit-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/cardinalfruit-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cardinal",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${proxima.variable} ${cardinal.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
