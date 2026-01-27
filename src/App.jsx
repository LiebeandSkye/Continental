import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import CartDrawer from './components/CartDrawer' // Import this
import { CartProvider } from './components/CartContext'
import Chatbot from './components/Chatbot'
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav/>
          <CartDrawer />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Chatbot/>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App