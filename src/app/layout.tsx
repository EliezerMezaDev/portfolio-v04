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
  title: "EaMZ | Portofolio",

  description: "My name is Eliezer A Meza, This is my portofolio website.",

  author: "Eliezer A Meza",
  siteUrl: "https://eamz.netlify.app/",
  applicationName: "EaMZ",

  keywords: ["EaMZ"],

  openGraph: {
    type: "website",
    url: "https://eamz.netlify.app/",
    title: "EaMZ | Portofolio",
    siteName: "EaMZ | Portofolio",
    description: "My name is Eliezer A Meza, This is my portofolio website.",
    images: [
      {
        url: "/og-image-rev.webp",
        alt: "EaMZ Portofolio",
        width: 1200,
        height: 630,
      },
    ],
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
