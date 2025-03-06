import type { NextApiRequest, NextApiResponse } from "next"
import { sendEmail } from "@/lib/sendEmail"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    try {
      await sendEmail(
        process.env.ADMIN_EMAIL,
        "New Contact Form Submission",
        `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      )
      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

