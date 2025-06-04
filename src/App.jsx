import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Food from './components/Food'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/foods" element={<Food/>}/>
     </Routes>
   </BrowserRouter>
  )
}

export default App
