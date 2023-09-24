import "@/styles/globals.css";

import Head from "next/head";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Digital Army",
  description: "Digital Army is a digital marketing agency in Tunisia. We help businesses grow online with our digital marketing services. We offer SEO, PPC, Social Media Marketing, Content Marketing, and more.",
  author: "Mahmoud Beznaiguia",
  siteUrl: "https://digitalarmy.me",
  social: {
    twitter: "https://twitter.com/digitalarmy_me",
    linkedin: "https://www.linkedin.com/in/mahmoudbeznaiguia/",
    github: "",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
