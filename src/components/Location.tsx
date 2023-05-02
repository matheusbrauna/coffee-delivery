import { useLocation } from '@/hooks/useLocation'
import { MapPin } from '@phosphor-icons/react'

export function Location() {
  const { location } = useLocation()

  return (
    <div className="flex items-center gap-1 p-2 text-sm rounded-md text-brand-purple-dark bg-brand-purple-light">
      <MapPin weight="fill" size={24} className="text-brand-purple" />
      {location}
    </div>
  )
}
