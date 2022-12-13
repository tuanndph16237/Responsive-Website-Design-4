import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './App.scss'

import Header from './components/header/Header'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default App
