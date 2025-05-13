import styled from "styled-components"

interface UserInput {
    nameField: string,
    typeInput: string
    placeHolder: string
}

const UserLabel = styled.label `
    font-size: 18px;
    font-weight: 300;
    font-family: sans-serif;
    margin-bottom: 5px;
    color: #2a2a2a;
`

const UserInput = styled.input `
    margin-bottom: 35px;
    outline: rebeccapurple;
    border: 1px solid #ccc;
    padding: 15px 10px;
    border-radius: 15px;
`

export const Input = ({nameField, typeInput, placeHolder}: UserInput) => {
    return (
        <>
            <UserLabel htmlFor={nameField}>{nameField}</UserLabel>
            <UserInput type={typeInput} name={nameField} id={nameField} placeholder={placeHolder}/>
        </>
    )
}