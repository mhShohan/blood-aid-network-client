export interface IUser {
  id: string
  name: string
  username: string
  email: string
  status: string
  bloodType: string
  location: string
  dateOfBirth: string
  lastDonationDate: string
  availability: boolean
  createdAt: string
  updatedAt: string
  userProfile: UserProfile
}

export interface UserProfile {
  id: string
  userId: string
  bio?: string
  profilePicture?: string
  dateOfBirth: string
  lastDonationDate: string
  createdAt: string
  updatedAt: string
}


