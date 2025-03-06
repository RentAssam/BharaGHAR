import type { NextApiRequest, NextApiResponse } from "next"
import cloudinary from "@/lib/cloudinary"

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const fileStr = req.body.data
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "bharaghar_uploads",
      })
      res.status(200).json({ url: uploadedResponse.secure_url })
    } catch (error) {
      res.status(500).json({ error: "Image upload failed" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

