import { useEffect, useState } from 'react'

export function useLocation() {
  const [location, setLocation] = useState('Sua localização')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`,
      )
        .then((response) => response.json())
        .then((data) => {
          const city = data.locality
          const state = data.principalSubdivision

          setLocation(`${city}, ${state}`)
        })
        .catch((error) => console.error(error))
    })
  }, [])

  return {
    location,
  }
}
