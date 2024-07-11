import { Layout } from "@/components/dom/Layout";
import "@/global.css";

export const metadata = {
  title: "Yiru Wang's Portfolio",
  description: "An artist based in London.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
