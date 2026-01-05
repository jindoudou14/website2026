import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import Routes from './components/Routes'
import Nav from './sections/nav';
import Footer from './sections/footer'
function App() {
  return (
    <>
      <Nav/>
      <Routes/>
      <Footer/>
    </>
  )
}

export default App
