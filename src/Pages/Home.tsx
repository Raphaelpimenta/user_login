// import styled from "styled-components"
import { Layout } from "../Components/Layout"
import { Card } from "../Components/Card"
import styled from "styled-components"
import { useContext, useState } from "react"
import { Button } from "../Components/Button"
import { AppContext } from "../Components/Context"
import { useNavigate } from "react-router-dom"
import { Login } from "../Services/login"


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
const Home = () => {
    const [email, setEmail ] = useState<string>('')

    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await Login(email)

        if(!loggedIn) {
            return alert("E-mail inválido")
        }
        
        
        setIsLoggedIn(true)
        navigate('/conta/1')

    }

    return (
        <>
            <Layout>
                <Card>
                    <TextTitle>Bem vindo</TextTitle>
                <TextIntro>Faça o login em nossa plataforma ou cadastre-se e tenha a melhor experiência conosco.</TextIntro>
                {/* {UserData === null || UserData === undefined ? <h1>Loading...</h1> : <h1>Olá, {UserData.name}</h1>} */}
                {/* <b>{UserData?.name}</b> */}

            
                {/* <Input nameField="E-mail" typeInput="email" placeHolder="Digite seu e-mail" />
                <Input nameField="Senha" typeInput="password" placeHolder="Digite sua senha"/> */}
                <UserLabel htmlFor="email">E-mail</UserLabel>
                <UserInput type="email" name="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>

                {/* <UserLabel htmlFor="password">Senha</UserLabel>
                <UserInput type="password" name="password" id="password" placeholder="Digite seu e-mail"/> */}



                <Button onClick={() => validateUser(email)} nameButton="Login"/>
                </Card>
            </Layout>
        </>
    )

}

export default Home