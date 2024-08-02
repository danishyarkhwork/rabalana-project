import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Script from "next/script";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <head>
        <title>Rabalana | Online Invitation</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Tailwind CSS Multipurpose Landing & Admin Dashboard Template"
        />
        <meta
          name="keywords"
          content="agency, application, business, clean, creative, cryptocurrency, it solutions, modern, multipurpose, nft marketplace, portfolio, saas, software, tailwind css"
        />
        <meta name="author" content="Shreethemes" />
        <meta name="website" content="https://shreethemes.in" />
        <meta name="email" content="support@shreethemes.in" />
        <meta name="version" content="2.2.0" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script src="/assets/libs/feather-icons/feather.min.js" />
        <Script src="/assets/js/plugins.init.js" />
        <Script src="/assets/js/app.js" />
        <Script src="/assets/libs/tobii/js/tobii.min.js" />
      </body>
    </html>
  );
}
