"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function AdvancedSearch() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [priceRange, setPriceRange] = useState([5000, 50000])
  const [areaRange, setAreaRange] = useState([500, 3000])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <Button variant="default" className="flex-1 bg-blue-600 hover:bg-blue-700">
          All Status
        </Button>
        <Button variant="outline" className="flex-1">
          For Rent
        </Button>
        <Button variant="outline" className="flex-1">
          For Sale
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <Label className="block text-xs font-medium text-gray-700 mb-1">PROPERTY TYPE</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="shop">Shop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-medium text-gray-700 mb-1">LOCATION</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="duliajan">Duliajan</SelectItem>
              <SelectItem value="tinsukia">Tinsukia</SelectItem>
              <SelectItem value="dibrugarh">Dibrugarh</SelectItem>
              <SelectItem value="jorhat">Jorhat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-medium text-gray-700 mb-1">BEDROOMS</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5+">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="block text-xs font-medium text-gray-700 mb-1">KEYWORDS</Label>
          <Input placeholder="e.g. parking, garden" />
        </div>
      </div>

      <div className="mb-4">
        <Button variant="link" onClick={() => setShowAdvanced(!showAdvanced)} className="text-blue-600 p-0 h-auto">
          {showAdvanced ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Hide Advanced Search
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show Advanced Search
            </>
          )}
        </Button>
      </div>

      {showAdvanced && (
        <div className="border-t pt-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="block text-sm font-medium mb-2">Price Range (₹)</Label>
              <div className="px-2">
                <Slider defaultValue={[5000, 50000]} min={0} max={100000} step={1000} onValueChange={setPriceRange} />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">Area (sq.ft)</Label>
              <div className="px-2">
                <Slider defaultValue={[500, 3000]} min={0} max={10000} step={100} onValueChange={setAreaRange} />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span>{areaRange[0]} sq.ft</span>
                <span>{areaRange[1]} sq.ft</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <Label className="block text-sm font-medium mb-2">Bathrooms</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">Furnishing</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="furnished">Furnished</SelectItem>
                  <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                  <SelectItem value="unfurnished">Unfurnished</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">Construction Year</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="2023-2024">2023-2024</SelectItem>
                  <SelectItem value="2020-2022">2020-2022</SelectItem>
                  <SelectItem value="2015-2019">2015-2019</SelectItem>
                  <SelectItem value="2010-2014">2010-2014</SelectItem>
                  <SelectItem value="before-2010">Before 2010</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Label className="block text-sm font-medium mb-2">Amenities</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="parking" />
                <Label htmlFor="parking" className="text-sm">
                  Parking
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ac" />
                <Label htmlFor="ac" className="text-sm">
                  Air Conditioning
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gym" />
                <Label htmlFor="gym" className="text-sm">
                  Gym
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pool" />
                <Label htmlFor="pool" className="text-sm">
                  Swimming Pool
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="security" />
                <Label htmlFor="security" className="text-sm">
                  Security
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="garden" />
                <Label htmlFor="garden" className="text-sm">
                  Garden
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="elevator" />
                <Label htmlFor="elevator" className="text-sm">
                  Elevator
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internet" />
                <Label htmlFor="internet" className="text-sm">
                  Internet
                </Label>
              </div>
            </div>
          </div>
        </div>
      )}

      <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
        <Search className="w-4 h-4 mr-2" />
        Search Properties
      </Button>
    </div>
  )
}

