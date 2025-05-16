// import styled from "styled-components"
// import { Card } from "./Components/Card"
// import { Layout } from "./Components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/conta" element={<h1>Conta aqui</h1>}/>

      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
