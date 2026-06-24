// Thin wrappers around lucide-react so the rest of the app imports stable names.
import { ArrowRight, Star, Globe, Calendar, Phone } from 'lucide-react'

export function ArrowIcon({ size = 14 }) {
  return <ArrowRight size={size} strokeWidth={2.5} />
}

export function StarIcon({ size = 13 }) {
  return <Star size={size} fill="#c4882f" color="#c4882f" strokeWidth={0} />
}

export const Stars = ({ count = 5 }) => (
  <>{Array.from({ length: count }).map((_, i) => <StarIcon key={i} />)}</>
)

export function GlobeIcon({ size = 64, color = 'rgba(255,255,255,0.5)' }) {
  return <Globe size={size} color={color} strokeWidth={1} />
}

export function CalendarIcon({ size = 15 }) {
  return <Calendar size={size} strokeWidth={2} />
}

export function PhoneIcon({ size = 15 }) {
  return <Phone size={size} strokeWidth={2} />
}
