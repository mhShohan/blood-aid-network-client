export const bloodGroup = [
  { name: 'A+', value: 'A_POSITIVE' },
  { name: 'A-', value: 'A_NEGATIVE' },
  { name: 'B+', value: 'B_POSITIVE' },
  { name: 'B-', value: 'B_NEGATIVE' },
  { name: 'O+', value: 'O_POSITIVE' },
  { name: 'O-', value: 'O_NEGATIVE' },
  { name: 'AB+', value: 'AB_POSITIVE' },
  { name: 'AB-', value: 'AB_NEGATIVE' },
]

export const blood = {
  A_POSITIVE: 'A+',
  A_NEGATIVE: 'A-',
  B_POSITIVE: 'B+',
  B_NEGATIVE: 'B-',
  O_POSITIVE: 'O+',
  O_NEGATIVE: 'O-',
  AB_POSITIVE: 'AB+',
  AB_NEGATIVE: 'AB-',
}

export type TBlood = keyof typeof blood;