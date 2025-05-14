import type { MouseEventHandler } from "react"
import styled from "styled-components"

interface BtnLogin {
    nameButton: string
    event: MouseEventHandler
}

const UserButton = styled.button `
    background-color: #368149;
    border: none;
    border-radius: 15px;
    padding: 5px 0;
    color: #d8d8d8;
    cursor: pointer;

    width: 12rem;
    margin: 0 auto;
`
export const Button = ({nameButton, event}: BtnLogin) => {
    return (
        <>
            <UserButton onClick={event}>{nameButton}</UserButton>
        </>
    )
}