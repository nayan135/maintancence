import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Light Owls | Under Maintenance",
  description:
    "Light Owls is currently under maintenance. We're working hard to improve our services and will be back soon.",
  keywords: ["Night Owls", "Tech Company", "Software Development", "Web Development", "Nepal Tech", "Maintenance","NAYAN135","NayanAcharya","naranbhusal02","KALIKA MANAVGYAN","KALIKA"],
  authors: [
   { name: "Nayan Acharya", url: "https://github.com/" },
    { name: "Narayan Bhusal", url: "https://github.com/" },
     { name: "Dilip Acharya", url: "https://github.com/" },
    { name: "Shasank Shrestha", url: "https://github.com/" },
    { name: "Sanjog Pandey", url: "https://github.com/" },
    { name: "Rabin Chudali", url: "https://github.com/" },
    { name: "Nishan Regmi", url: "https://github.com/" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nightowls.tech",
    title: "Night Owls | Under Maintenance",
    description:
      "Light Owls is currently under maintenance. We're working hard to improve our services and will be back soon.",
    siteName: "Light Owls",
  },
  twitter: {
    card: "summary_large_image",
    title: "Light Owls | Under Maintenance",
    description:
      "Light Owls is currently under maintenance. We're working hard to improve our services and will be back soon.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'