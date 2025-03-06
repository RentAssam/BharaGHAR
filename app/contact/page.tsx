"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import GoogleMapComponent from "@/components/google-map"
import AdBanner from "@/components/ad-banner"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">Get in touch with our team for any inquiries or assistance</p>

      <AdBanner className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
                  <p className="mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 12345 67890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Property Inquiry" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">
                      123 Main Street, Near City Center
                      <br />
                      Duliajan, Assam 786602
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-blue-600">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">
                      <a href="mailto:info@bharaghar.com" className="hover:text-blue-600">
                        info@bharaghar.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="h-[300px] rounded-lg overflow-hidden">
            <GoogleMapComponent location={{ lat: 27.3667, lng: 95.3167 }} zoom={15} />
          </div>

          <AdBanner size="square" />
        </div>
      </div>
    </div>
  )
}

