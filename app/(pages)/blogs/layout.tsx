import "@/styles/globals.css";

import Head from "next/head";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Blogs | Digital Army",
  description: "Here you can find all the blogs of Digital Army. We write about digital marketing, SEO, social media, and more. We hope you enjoy reading them.",
  author: "Mahmoud Beznaiguia",
  siteUrl: "https://digitalarmy.me",
  social: {
    twitter: "https://twitter.com/digitalarmy_me",
    linkedin: "https://www.linkedin.com/in/mahmoudbeznaiguia/",
    github: "",
    email: "mailto:mahmoudbeznaiguia.pro@gmail.com",
  },
  keywords: [
    "digital marketing",
    "digital marketer",
    "digital marketing consultant",
    "digital marketing freelancer",
    "digital marketing expert",
    "digital marketing consultant",
    "digital marketing agency",
    "digital marketing services",
    "digital marketing company",
    "digital marketing agency near me",
    "digital marketing agency tunisia",
    "digital marketing agency in tunisia",
    "digital marketing agency in tunis",
    "digital marketing agency in sousse",
    "digital marketing agency in sfax",
  ],
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
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
