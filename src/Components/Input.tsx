import { useState} from "react"
//import type { MouseEventHandler } from "react"
import styled from "styled-components"

interface UserInput {
    nameField: string
    typeInput: string
    placeHolder: string
    // valueInput: string
    // event: () => void
    // nameButton: string
    //event: MouseEventHandler
    // event: () => string
}

const UserLabel = styled.label `
    font-size: 18px;
    font-weight: 300;
    font-family: sans-serif;
    margin-bottom: 5px;
    color: #2a2a2a;
`

const UserInput = styled.input `
    margin-bottom: 15px;
    outline: rebeccapurple;
    border: 1px solid #ccc;
    padding: 15px 10px;
    border-radius: 15px;

    width: 20.5rem;
    /* margin: 0 auto 35px auto; */
`

export const Input = ({nameField, typeInput, placeHolder}: UserInput) => {
    // const [valorInput, setValorInput ] = useState('')
    // console.log('oioi', valorInput)
    
    return (
        <>
            <UserLabel htmlFor={nameField} >{nameField}</UserLabel>

            <UserInput type={typeInput} name={nameField} id={nameField} placeholder={placeHolder} />

            {/* <UserButton onClick={() => {event}}>{nameButton}</UserButton> */}
        </>
    )
}