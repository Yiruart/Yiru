import { Layout } from "@/components/dom/Layout";
import "@/global.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Yiru Wang's Portfolio",
  description: "An artist based in London.",
};

const Proxima = localFont({
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
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={Proxima.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
