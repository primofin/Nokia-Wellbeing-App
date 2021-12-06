export type Question = {
  id: string
  question: string
  weight: number
}

export type Answer = {
  id: string
  question: string
  weight: number
  answer: string
  additionalInfo: string
}

export type User = {
  name: string
  phone: number
  email: string
  detailed_info: string
  contact_by: 'phone' | 'email'
  docId?: string
  id: string
}
