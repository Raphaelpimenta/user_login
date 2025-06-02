// import styled from "styled-components"
// import { Card } from "./Components/Card"
// import { Layout } from "./Components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import styled from "styled-components"
import { Conta } from "./Pages/Conta"

const Box = styled.div `
  background: linear-gradient(to top, #0f0c29, #302b63, #24243e);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  `

function App() {

  return (
    <>
    <BrowserRouter>
    <Box>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/conta/:id" element={<Conta />}/>

      
      </Routes>

    </Box>
    </BrowserRouter>
    </>
  )
}

export default App
