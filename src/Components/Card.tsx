import styled from "styled-components"
import { Login } from "../Services/login"
import { Button } from "./Button"
import { Input } from "./Input"
import { useState } from "react"



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


const UserInput = styled.input `
    margin-bottom: 15px;
    outline: rebeccapurple;
    border: 1px solid #ccc;
    padding: 15px 10px;
    border-radius: 15px;

    width: 20.5rem;
    /* margin: 0 auto 35px auto; */
`




export const Card = () => {
    const [email, setEmail ] = useState('')
    console.log(email)

    return (
        <>

            <BoxInput>
                
                <TextTitle>Bem vindo</TextTitle>
                <TextIntro>Faça o login em nossa plataforma ou cadastre-se e tenha a melhor experiência conosco.</TextIntro>

                {/* <Input nameField="Nome" typeInput="text" placeHolder="Digite seu nome" /> */}
                <Input nameField="E-mail" typeInput="email" placeHolder="Digite seu e-mail" />
                {/* value={email} ) */}

                <Input nameField="Senha" typeInput="password" placeHolder="Digite sua senha"/>

                <UserInput type="text" placeholder="Teste teste" value={email} onChange={(event) => setEmail(event.target.value)}/>



                <Button event={() => {Login(email)}} nameButton="Login"/>
            </BoxInput>


        </>
    )

}