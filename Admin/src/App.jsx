import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import StockInvestor from './Components/StockInvestor'
import AllBrokers from './Components/AllBrokers'
import Card from './Components/card'
import IPO  from './Components/UpcomingIPO'
import Signin from './Components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      {/* <Navbar/> */}
      {/* <StockInvestor/> */}
      {/* <AllBrokers/> */}
      {/* <Card/> */}
      {/* <IPO/> */}
      <Signin/>
    </div>
  )
}

export default App
