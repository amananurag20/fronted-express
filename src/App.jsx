import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Food from './components/Food'
import Admin from './components/Admin'
import Mobile from './components/Mobile'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>

       <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/foods" element={<Food/>}/>                
          <Route path='/mobile' element={<Mobile/>}/>
       </Route>

     </Routes>
   </BrowserRouter>
  )
}

export default App
