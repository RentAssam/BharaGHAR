"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"

interface GoogleMapProps {
  location: { lat: number; lng: number }
  setLocation?: (location: { lat: number; lng: number }) => void
  draggable?: boolean
  zoom?: number
  markers?: Array<{ lat: number; lng: number; title?: string }>
  height?: string
}

export default function GoogleMapComponent({
  location,
  setLocation,
  draggable = false,
  zoom = 14,
  markers = [],
  height = "100%",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [marker, setMarker] = useState<google.maps.Marker | null>(null)

  useEffect(() => {
    // In a real implementation, you would use your actual Google Maps API key
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    })

    loader.load().then(() => {
      if (mapRef.current) {
        const mapOptions: google.maps.MapOptions = {
          center: location,
          zoom: zoom,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        }

        const newMap = new google.maps.Map(mapRef.current, mapOptions)
        setMap(newMap)

        // Create main marker if draggable is true
        if (draggable) {
          const newMarker = new google.maps.Marker({
            position: location,
            map: newMap,
            draggable: true,
            animation: google.maps.Animation.DROP,
          })

          setMarker(newMarker)

          // Add event listener for marker drag end
          if (setLocation) {
            newMarker.addListener("dragend", () => {
              const position = newMarker.getPosition()
              if (position) {
                setLocation({
                  lat: position.lat(),
                  lng: position.lng(),
                })
              }
            })
          }
        }

        // Add additional markers
        markers.forEach((markerData) => {
          new google.maps.Marker({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: newMap,
            title: markerData.title,
          })
        })
      }
    })
  }, [location, draggable, markers, zoom, setLocation]),
    // Update marker position if location changes
    useEffect(() => {
      if (map && marker) {
        marker.setPosition(location)
        map.panTo(location)
      }
    }, [location, map, marker])

  return <div ref={mapRef} style={{ width: "100%", height: height }} />
}

