import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import Routes from './components/Routes'
import Nav from './sections/nav';

function App() {
  return (
    <>
      <Nav/>
      <Routes/>
    </>
  )
}

export default App
