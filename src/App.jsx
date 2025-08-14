import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'
import ProductInfo from './ProductInfo'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard/:ID' element={<ProductInfo/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
