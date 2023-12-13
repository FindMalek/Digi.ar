import "@/styles/globals.css";

import Head from "next/head";
import { SpeedInsights } from '@vercel/speed-insights/next';

import Navbar from "@/components/overall/Navbar";
import Footer from "@/components/overall/Footer";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Digital Army",
  description:
    "Digital Army is a digital marketing agency in Tunisia. We help businesses grow online with our digital marketing services. We offer SEO, PPC, Social Media Marketing, Content Marketing, and more.",
  author: "Mahmoud Beznaiguia",
  siteUrl: "https://digitalarmy.me",
  social: {
    twitter: "https://twitter.com/digitalarmy_me",
    linkedin: "https://www.linkedin.com/in/mahmoudbeznaiguia/",
    email: "mailto:mahmoudbeznaiguia.pro@gmail.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
      </Head>

      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
      
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
