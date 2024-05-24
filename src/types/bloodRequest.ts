import { UserProfile } from "."

export interface IBloodRequest {
  id: string
  donorId: any
  requesterId: string
  bloodType: string
  numberOfBag: number
  phoneNumber: string
  dateOfDonation: string
  reason: string
  requestStatus: string
  requester: Requester
}

interface Requester {
  id: string
  name: string
  email: String
  userProfile: UserProfile
}


