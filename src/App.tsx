import styled from "styled-components"
import { Card } from "./Components/Card"
import { Layout } from "./Components/Layout"

const Box = styled.div `
  /* background: #28683b; */
  /* background: #212121; */
  background: linear-gradient(to right, #000000, #434343);;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  
`

function App() {

  return (
    <>
    <Box>
        <Layout>
          <Card />
        </Layout>
    </Box>
    </>
  )
}

export default App
