import Image from "next/image"
import Link from "next/link"
import PropertySearch from "@/components/property-search"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Duliajan Town"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BharaGHAR</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            A Promise of Excellence, Integrity, Knowledge and Service for Our Esteemed Clients in Duliajan Town &
            Tinsukia
          </p>
        </div>

        <div className="absolute bottom-24 left-0 right-0 px-4 md:px-8 lg:px-16">
          <PropertySearch />
        </div>
      </div>

      {/* Featured Listings Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Discover Our Featured Listings</h2>
          <p className="text-gray-600">Top Properties Featured By Owners...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Cards would go here */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Property+${item}`}
                  alt={`Property ${item}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-sm rounded">FOR RENT</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">2 BHK Apartment in Duliajan</h3>
                <p className="text-gray-600 mb-4">Duliajan Town, Tinsukia</p>
                <div className="flex justify-between">
                  <span className="font-bold text-blue-600">₹15,000/month</span>
                  <Link href="#" className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

