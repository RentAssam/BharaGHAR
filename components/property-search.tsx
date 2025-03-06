"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertySearch() {
  const [status, setStatus] = useState("all")

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <Button variant={status === "all" ? "default" : "outline"} onClick={() => setStatus("all")} className="flex-1">
          All Status
        </Button>
        <Button
          variant={status === "rent" ? "default" : "outline"}
          onClick={() => setStatus("rent")}
          className="flex-1 bg-cyan-600 hover:bg-cyan-700"
        >
          For Rent
        </Button>
        <Button
          variant={status === "sale" ? "default" : "outline"}
          onClick={() => setStatus("sale")}
          className="flex-1 bg-cyan-600 hover:bg-cyan-700"
        >
          For Sale
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">LOOKING FOR</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">LOCATION</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="duliajan">Duliajan</SelectItem>
              <SelectItem value="tinsukia">Tinsukia</SelectItem>
              <SelectItem value="dibrugarh">Dibrugarh</SelectItem>
              <SelectItem value="jorhat">Jorhat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">PROPERTY SIZE</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4">4+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">YOUR BUDGET</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Max Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10000">Up to ₹10,000</SelectItem>
              <SelectItem value="20000">Up to ₹20,000</SelectItem>
              <SelectItem value="30000">Up to ₹30,000</SelectItem>
              <SelectItem value="50000">Up to ₹50,000</SelectItem>
              <SelectItem value="100000">Up to ₹1,00,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600">Search</Button>
    </div>
  )
}

