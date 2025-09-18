import styled from "styled-components"

const BoxForm = styled.section `
    background-color: #d5d5d5;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 25rem auto;
    width: 900px;
    height: 500px;
    align-items: center;
    gap: 40px;
`;

const UserImg = styled.img `
    background: url(../../public/img/foto-login.jpg);
    width: 25rem;
    height: 30rem;
    border-radius: 15px;
`

export const Layout = ({children}: any) => {
    return (
        <>
            <BoxForm>
                {children}
                <UserImg />
            </BoxForm>
        </>
    )
}