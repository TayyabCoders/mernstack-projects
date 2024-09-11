import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './layouts/Sidebar';
import Index from './components/dashboard/Index';
import Register from './components/dashboard/auth/Register';
import Login from './components/dashboard/auth/Login';
import UserProfile from './components/dashboard/auth/UserProfile';



function App() {
  return (
    <>
      <BrowserRouter>
        
      <Routes>
      {/* Main route with Sidebar */}
      <Route path="/" element={<><Sidebar /><Index /></>} />
      <Route path="/userProfile" element={<><Sidebar /><UserProfile /></>} />

      {/* Other routes without Sidebar */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
