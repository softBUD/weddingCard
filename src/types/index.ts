export interface WeddingEvent {
  id: number
  date: string
  location: Location
  waytocome: TransportOptions
  groom: PersonDetails
  bride: PersonDetails
  message: WeddingMessage
  galleryImages: string[]
  attendCount: number
}

interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
}

interface TransportOptions {
  metro: string[]
  bus: string[]
}

interface PersonDetails {
  name: string
  account: BankAccount
  phoneNumber: string
  parents: Parent[]
}

interface Parent {
  name: string
  account: BankAccount
  phoneNumber: string
}

interface BankAccount {
  bankName: string
  accountNumber: string
  kakaopayLink?: string
}

interface WeddingMessage {
  intro: string
  invitation: string
}
