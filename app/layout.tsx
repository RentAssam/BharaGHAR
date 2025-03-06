import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BharaGHAR - Real Estate in Duliajan Town & Tinsukia",
  description: "Find your dream property in Duliajan Town & Tinsukia with BharaGHAR",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-blue-900 text-white py-8 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <p>© {new Date().getFullYear()} BharaGHAR. All rights reserved.</p>
              <p>Duliajan Town & Tinsukia</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

