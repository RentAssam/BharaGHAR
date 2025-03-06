"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold">
          BharaGHAR
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/properties" className="hover:text-blue-200">
            Properties
          </Link>
          <Link href="/post-property" className="hover:text-blue-200">
            Post Your Free Add
          </Link>
          <Link href="/find-property" className="hover:text-blue-200">
            Find Your Property
          </Link>
          <Link href="/contact" className="hover:text-blue-200">
            Contact Us
          </Link>
          <Link href="/about" className="hover:text-blue-200">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="mr-2" size={18} />
            <span>Call Us: 12345 67890</span>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">Create a Listing</Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/properties" className="hover:text-blue-200">
              Properties
            </Link>
            <Link href="/post-property" className="hover:text-blue-200">
              Post Your Free Add
            </Link>
            <Link href="/find-property" className="hover:text-blue-200">
              Find Your Property
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact Us
            </Link>
            <Link href="/about" className="hover:text-blue-200">
              About Us
            </Link>
            <div className="flex items-center pt-2">
              <Phone className="mr-2" size={18} />
              <span>Call Us: 12345 67890</span>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">Create a Listing</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

