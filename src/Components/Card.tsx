import styled from "styled-components"
import { Login } from "../Services/login"
import { Button } from "./Button"
import { Input } from "./Input"


const BoxInput = styled.form `
    display: grid;
    /* justify-content: center; */
    align-items: center;
    padding: 0px 30px;
`

const TextTitle = styled.h1 `
    /* text-align: center; */
    font-size: 2rem;
    margin-bottom: 0;
    
`

const TextIntro = styled.p `
    line-height: 25px;
    font-weight: 500;
    font-family: sans-serif;
    /* margin-bottom: 40px; */
    
`

export const Card = () => {
    return (
        <>

            <BoxInput>
                
                <TextTitle>Bem vindo</TextTitle>
                <TextIntro>Faça o login em nossa plataforma ou cadastre-se e tenha a melhor experiência conosco.</TextIntro>

                
                <Input nameField="E-mail" typeInput="email" placeHolder="Digite seu e-mail"/>

                <Input nameField="Senha" typeInput="password" placeHolder="Digite sua senha"/>

                <Button event={Login} nameButton="Login"/>
            </BoxInput>


        </>
    )

}