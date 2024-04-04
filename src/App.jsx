import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [coords, setCoords] = useState()

  const success = ({ coords }) => {
    const userLocation = {
      lat :coords.latitude,
      long:coords.longitude,
    }

    setCoords( userLocation )
  }
  const error = () => {
    
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)    
  }, [])

  console.log(coords)
  

  return (
    <main>
      App Clima
    </main>
  )
}

export default App
