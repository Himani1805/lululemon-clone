import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/main_section/Main'

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
  )
}
