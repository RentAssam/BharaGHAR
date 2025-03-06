"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Bath, Square, Calendar, Heart, Share, ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyInquiryForm from "@/components/property-inquiry-form"
import GoogleMapComponent from "@/components/google-map"
import AdBanner from "@/components/ad-banner"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock property data - in a real app, fetch this from an API
  const property = {
    id: params.id,
    title: "Modern 3 BHK Apartment in Green Park",
    description:
      "This beautiful 3 BHK apartment is located in the heart of Duliajan. It features modern amenities, spacious rooms, and a great view. The apartment is well-ventilated and gets plenty of natural light. It's close to schools, hospitals, and shopping centers, making it an ideal place to live.",
    location: "Green Park, Duliajan, Assam",
    price: "₹18,000/month",
    type: "For Rent",
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    furnished: "Semi-Furnished",
    floor: "3rd Floor",
    carParking: "Available",
    facing: "East",
    availableFrom: "Immediate",
    amenities: [
      "24x7 Security",
      "Power Backup",
      "Lift",
      "Children's Play Area",
      "Parking",
      "Water Supply",
      "Garden",
      "Gym",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Property+Image+1",
      "/placeholder.svg?height=600&width=800&text=Property+Image+2",
      "/placeholder.svg?height=600&width=800&text=Property+Image+3",
      "/placeholder.svg?height=600&width=800&text=Property+Image+4",
    ],
    owner: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@example.com",
    },
    mapLocation: { lat: 27.3667, lng: 95.3167 }, // Duliajan coordinates
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === property.images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? property.images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Link href="/properties" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Properties
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] md:h-[500px] mb-4 rounded-lg overflow-hidden">
            <Image
              src={property.images[currentImageIndex] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded">{property.type}</div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white" onClick={prevImage}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white" onClick={nextImage}>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-2 mb-8">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`relative h-20 w-32 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                  index === currentImageIndex ? "ring-2 ring-blue-600" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{property.location}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-1">
                <Bed className="w-5 h-5 mr-2" />
                <span>Bedrooms</span>
              </div>
              <div className="font-semibold">{property.bedrooms}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-1">
                <Bath className="w-5 h-5 mr-2" />
                <span>Bathrooms</span>
              </div>
              <div className="font-semibold">{property.bathrooms}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-1">
                <Square className="w-5 h-5 mr-2" />
                <span>Area</span>
              </div>
              <div className="font-semibold">{property.area} sq.ft</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-1">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Available</span>
              </div>
              <div className="font-semibold">{property.availableFrom}</div>
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="map">Map Location</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{property.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">Apartment</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Furnishing</span>
                    <span className="font-medium">{property.furnished}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Floor</span>
                    <span className="font-medium">{property.floor}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Car Parking</span>
                    <span className="font-medium">{property.carParking}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Facing</span>
                    <span className="font-medium">{property.facing}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Available From</span>
                    <span className="font-medium">{property.availableFrom}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="amenities">
              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="map">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <GoogleMapComponent location={property.mapLocation} markers={[property.mapLocation]} zoom={15} />
              </div>
            </TabsContent>
          </Tabs>

          <AdBanner className="mt-8" />
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">{property.price}</div>
            <div className="text-gray-600 mb-6">{property.type}</div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-blue-600">RS</span>
                </div>
                <div>
                  <div className="font-semibold">{property.owner.name}</div>
                  <div className="text-sm text-gray-600">Property Owner</div>
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <span className="font-medium mr-2">Phone:</span>
                <a href={`tel:${property.owner.phone}`} className="text-blue-600 hover:underline">
                  {property.owner.phone}
                </a>
              </div>

              <div className="flex items-center text-gray-700">
                <span className="font-medium mr-2">Email:</span>
                <a href={`mailto:${property.owner.email}`} className="text-blue-600 hover:underline">
                  {property.owner.email}
                </a>
              </div>
            </div>
          </div>

          <PropertyInquiryForm propertyId={property.id} propertyTitle={property.title} />

          <AdBanner size="square" />
        </div>
      </div>
    </div>
  )
}

