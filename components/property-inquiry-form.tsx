"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PropertyInquiryFormProps {
  propertyId: string
  propertyTitle: string
}

export default function PropertyInquiryForm({ propertyId, propertyTitle }: PropertyInquiryFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission - replace with actual submission logic
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
          <CardDescription>Your inquiry has been sent successfully.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>We will get back to you as soon as possible.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsSubmitted(false)}>Send Another Inquiry</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interested in this property?</CardTitle>
        <CardDescription>Fill out the form below to contact the owner</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <input type="hidden" name="propertyId" value={propertyId} />
          <input type="hidden" name="propertyTitle" value={propertyTitle} />

          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 12345 67890" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="I am interested in this property. Please contact me with more information."
              className="min-h-[100px]"
              defaultValue="I am interested in this property. Please contact me with more information."
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="whatsapp" />
            <Label htmlFor="whatsapp" className="text-sm">
              Contact me on WhatsApp
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

