import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './routing/AppRouter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <AppRouter /> 
      <Footer />
    </div>
  )
}
