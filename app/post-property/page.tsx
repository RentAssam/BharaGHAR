"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import GoogleMapComponent from "@/components/google-map"
import AdBanner from "@/components/ad-banner"

export default function PostPropertyPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [propertyType, setPropertyType] = useState("apartment")
  const [listingType, setListingType] = useState("rent")
  const [location, setLocation] = useState({ lat: 27.3667, lng: 95.3167 }) // Default to Duliajan coordinates
  const [images, setImages] = useState([])
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission - replace with actual submission logic
    setTimeout(() => {
      setIsLoading(false)
      router.push("/thank-you")
    }, 1500)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files)
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const base64 = await convertToBase64(file)
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: base64 }),
        })
        const data = await response.json()
        return data.url
      }),
    )
    setImages([...images, ...uploadedImages])
  }

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Post Your Property</h1>

      <AdBanner className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide basic details about your property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Property Title</Label>
                  <Input id="title" placeholder="e.g. 3 BHK Apartment in Duliajan" required />
                </div>

                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <RadioGroup defaultValue="apartment" onValueChange={setPropertyType}>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="apartment" id="apartment" />
                        <Label htmlFor="apartment">Apartment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="house" id="house" />
                        <Label htmlFor="house">House</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="villa" id="villa" />
                        <Label htmlFor="villa">Villa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="plot" id="plot" />
                        <Label htmlFor="plot">Plot/Land</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="commercial" id="commercial" />
                        <Label htmlFor="commercial">Commercial</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Listing Type</Label>
                  <RadioGroup defaultValue="rent" onValueChange={setListingType}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="rent" id="rent" />
                        <Label htmlFor="rent">For Rent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sale" id="sale" />
                        <Label htmlFor="sale">For Sale</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Where is your property located?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Select defaultValue="duliajan">
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="duliajan">Duliajan</SelectItem>
                        <SelectItem value="tinsukia">Tinsukia</SelectItem>
                        <SelectItem value="dibrugarh">Dibrugarh</SelectItem>
                        <SelectItem value="jorhat">Jorhat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="locality">Locality/Area</Label>
                    <Input id="locality" placeholder="e.g. Green Park" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Textarea id="address" placeholder="Enter complete address" required />
                </div>

                <div className="space-y-2">
                  <Label>Pin Location on Map</Label>
                  <div className="h-[300px] rounded-md overflow-hidden">
                    <GoogleMapComponent location={location} setLocation={setLocation} draggable={true} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
                <CardDescription>Provide detailed information about your property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Select defaultValue="2">
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select defaultValue="2">
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Area (sq.ft)</Label>
                    <Input id="area" type="number" placeholder="e.g. 1200" required />
                  </div>
                </div>

                {listingType === "rent" ? (
                  <div className="space-y-2">
                    <Label htmlFor="rent">Monthly Rent (₹)</Label>
                    <Input id="rent" type="number" placeholder="e.g. 15000" required />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input id="price" type="number" placeholder="e.g. 5000000" required />
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Amenities</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parking" />
                      <Label htmlFor="parking">Parking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ac" />
                      <Label htmlFor="ac">Air Conditioning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wifi" />
                      <Label htmlFor="wifi">Wi-Fi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="furnished" />
                      <Label htmlFor="furnished">Furnished</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="security" />
                      <Label htmlFor="security">Security</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gym" />
                      <Label htmlFor="gym">Gym</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your property in detail"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
                <CardDescription>Upload photos of your property (max 10)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input type="file" multiple onChange={handleImageUpload} className="hidden" id="image-upload" />
                  <label htmlFor="image-upload" className="flex items-center justify-center w-full">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <Button variant="outline" type="button">
                        Choose Files
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">PNG, JPG, GIF up to 5MB each</p>
                  </label>
                  {images.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {images.map((image) => (
                        <img
                          src={image || "/placeholder.svg"}
                          alt="Uploaded Image"
                          key={image}
                          className="w-full h-auto"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>How can potential buyers/renters contact you?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Name</Label>
                    <Input id="contact-name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" type="tel" placeholder="+91 12345 67890" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="whatsapp" />
                  <Label htmlFor="whatsapp">Available on WhatsApp</Label>
                </div>
              </CardContent>
            </Card>

            <CardFooter className="flex justify-end space-x-4 px-0">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Property"}
              </Button>
            </CardFooter>
          </form>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Listing Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Add clear, high-quality photos</li>
                <li>✓ Be accurate with property details</li>
                <li>✓ Highlight unique features</li>
                <li>✓ Provide complete contact information</li>
                <li>✓ Respond quickly to inquiries</li>
              </ul>
            </CardContent>
          </Card>

          <AdBanner className="h-[600px]" />
        </div>
      </div>
    </div>
  )
}

