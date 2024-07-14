import { Layout } from "@/components/dom/Layout";
import "@/global.css";
import localFont from "next/font/local";
import Logo from "@/components/Logo";
import About from "@/components/About";

export const metadata = {
  title: "Yiru Wang",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${proxima.variable}`}>
        <Layout>{children}</Layout>
        <About />
        <Logo />
      </body>
    </html>
  );
}
