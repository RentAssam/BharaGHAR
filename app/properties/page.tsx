import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Bath, Square } from "lucide-react"

import AdvancedSearch from "@/components/advanced-search"
import AdBanner from "@/components/ad-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertiesPage() {
  // Mock property data
  const properties = [
    {
      id: "1",
      title: "Modern 3 BHK Apartment",
      location: "Green Park, Duliajan",
      price: "₹18,000/month",
      type: "For Rent",
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      image: "/placeholder.svg?height=300&width=400&text=Property+1",
    },
    {
      id: "2",
      title: "Spacious 2 BHK House",
      location: "Central Area, Tinsukia",
      price: "₹15,000/month",
      type: "For Rent",
      bedrooms: 2,
      bathrooms: 2,
      area: 1000,
      image: "/placeholder.svg?height=300&width=400&text=Property+2",
    },
    {
      id: "3",
      title: "Luxury 4 BHK Villa",
      location: "Riverside, Duliajan",
      price: "₹45,00,000",
      type: "For Sale",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      image: "/placeholder.svg?height=300&width=400&text=Property+3",
    },
    {
      id: "4",
      title: "Commercial Shop Space",
      location: "Market Area, Tinsukia",
      price: "₹25,000/month",
      type: "For Rent",
      bedrooms: 0,
      bathrooms: 1,
      area: 500,
      image: "/placeholder.svg?height=300&width=400&text=Property+4",
    },
    {
      id: "5",
      title: "Residential Plot",
      location: "New Development, Duliajan",
      price: "₹25,00,000",
      type: "For Sale",
      bedrooms: 0,
      bathrooms: 0,
      area: 1800,
      image: "/placeholder.svg?height=300&width=400&text=Property+5",
    },
    {
      id: "6",
      title: "1 BHK Apartment",
      location: "College Road, Tinsukia",
      price: "₹8,000/month",
      type: "For Rent",
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      image: "/placeholder.svg?height=300&width=400&text=Property+6",
    },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Properties in Duliajan & Tinsukia</h1>

      <div className="mb-8">
        <AdvancedSearch />
      </div>

      <AdBanner className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-sm rounded">
                {property.type}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>
                    {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Bath className="w-4 h-4 mr-1" />
                  <span>
                    {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Square className="w-4 h-4 mr-1" />
                  <span>{property.area} sq.ft</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-600">{property.price}</span>
                <Button asChild>
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mx-1">
          1
        </Button>
        <Button variant="outline" className="mx-1">
          2
        </Button>
        <Button variant="outline" className="mx-1">
          3
        </Button>
        <Button variant="outline" className="mx-1">
          Next
        </Button>
      </div>

      <AdBanner className="mt-8" />
    </div>
  )
}

