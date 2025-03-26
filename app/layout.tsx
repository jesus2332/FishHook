import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from '../components/header';
import Footer from '../components/footer';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Fish Hook Band",
  description: "Official website of Fish Hook, a rock band from Chihuahua, Mexico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Header/>
          <main className="flex-1">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}

