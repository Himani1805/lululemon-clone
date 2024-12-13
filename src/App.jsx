import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './routing/AppRouter'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <AppRouter /> 
      <Footer />
    </div>
  )
}
