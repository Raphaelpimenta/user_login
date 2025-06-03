// import styled from "styled-components"
// import { Card } from "./Components/Card"
// import { Layout } from "./Components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import styled from "styled-components"
import { Conta } from "./Pages/Conta"
import { createContext } from "react"

const Box = styled.div `
  background: linear-gradient(to top, #0f0c29, #302b63, #24243e);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  `

interface IAppContext {
  user: string
}


export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({children}: any) => {
  const user = 'Raphael'

  return (
  
      <AppContext.Provider value={{ user }}>
        {children}
      </AppContext.Provider>
    
  )
}

function App() {

  return (
    <>
    <BrowserRouter>
      <AppContextProvider>
        <Box>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/conta/:id" element={<Conta />}/>
          </Routes>
        </Box>
      </AppContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
