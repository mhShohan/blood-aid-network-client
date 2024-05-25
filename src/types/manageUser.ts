export interface IManageUser {
  id: string
  name: string
  email: string
  role: string
  status: string
  bloodType: string
  location: string
  availability: boolean
  userProfile: UserProfile
}

interface UserProfile {
  id: string
  dateOfBirth: string
  lastDonationDate: string
}
