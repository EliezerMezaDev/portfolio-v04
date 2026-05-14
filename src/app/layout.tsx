import "./globals.css"
import { Poppins, Jost, JetBrains_Mono } from "next/font/google"
import Navbar from "@components/ui/Navbar"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jost",
})

export const metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://eamz.netlify.app/"),
  title: {
    default: "EaMZ | Portofolio",
    template: "%s | EaMZ",
  },

  description:
    "Eliezer A Meza - Frontend Engineer con +5 años de experiencia en arquitecturas escalables y aplicaciones híbridas. Especializado en Fintech.",
  authors: [{ name: "Eliezer A Meza", url: "https://eamz.netlify.app/" }],
  creator: "Eliezer A Meza",
  publisher: "EaMZ",
  siteUrl: "https://eamz.netlify.app/",
  applicationName: "EaMZ",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  keywords: [
    "Eliezer Meza",
    "Frontend Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Desarrollador Frontend",
    "Fintech",
    "EaMZ",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eamz.netlify.app/",
    title: "EaMZ | Portofolio",
    siteName: "EaMZ | Portofolio",
    description:
      "Eliezer A Meza - Frontend Engineer con +5 años de experiencia en arquitecturas escalables y aplicaciones híbridas.",
    images: [
      {
        url: "/og-image-rev.webp",
        alt: "EaMZ Portofolio",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EaMZ | Portofolio",
    description:
      "Eliezer A Meza - Frontend Engineer con +5 años de experiencia en arquitecturas escalables y aplicaciones híbridas.",
    images: ["/og-image-rev.webp"],
    creator: "@EliezerMezaDev",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eliezer A Meza",
  url: "https://eamz.netlify.app/",
  jobTitle: "Frontend Engineer",
  sameAs: [
    "https://github.com/EliezerMezaDev/",
    "https://www.linkedin.com/in/eliezer-a-meza-7a1b882b9/",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
