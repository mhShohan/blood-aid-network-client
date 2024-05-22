import { z } from "zod"

export const registerFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'username', label: 'Username', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true },
  { name: 'bloodType', label: 'Blood Type', type: 'text', required: true },
  { name: 'location', label: 'Location', type: 'text', required: true },
  { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
  { name: 'lastDonationDate', label: 'Last Donation Date', type: 'date', required: true },
]

export const registerSchema = z.object({
  name: z.string().min(3, { message: 'Name must contain at least 3 characters' }),
  username: z.string().min(3, { message: 'Username must contain at least 3 characters' }),
  email: z.string().email({ message: 'Provide a valid email' }),
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
  bloodType: z.string().min(1, { message: 'Blood Type is required' }),
  location: z.string().min(1, { message: 'Location is required' }),
  dateOfBirth: z.date({ message: 'Provide a valid date' }),
  lastDonationDate: z.date({ message: 'Provide a valid date' })
})