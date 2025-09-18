import styled from "styled-components"

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