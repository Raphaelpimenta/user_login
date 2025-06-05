import styled from "styled-components"
// import { Login } from "../Services/login"
// import { Button } from "./Button"
// import { Input } from "./Input"
// import {  useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { AppContext } from "./Context"
// import { api } from "../api"



const BoxInput = styled.form `
    display: grid;
    /* justify-content: center; */
    align-items: center;
    padding: 0px 30px;
`





export const Card = ({children}: any) => {

    return (
        <>

            <BoxInput>
                {children}
                
                
            </BoxInput>


        </>
    )

}