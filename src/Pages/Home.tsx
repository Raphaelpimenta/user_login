// import styled from "styled-components"
import { Layout } from "../Components/Layout"
import { Card } from "../Components/Card"
import styled from "styled-components"
import { useContext, useState } from "react"
import { Button } from "../Components/Button"
import { AppContext } from "../Components/Context"
import { useNavigate } from "react-router-dom"
import { Login } from "../Services/login"
import { changeLocalStorage } from "../Services/storage"
import { Password } from "../Services/password"


const TextTitle = styled.h1`
    /* text-align: center; */
    font-size: 2rem;
    margin-bottom: 0;
    
`

const TextIntro = styled.p`
    line-height: 25px;
    font-weight: 500;
    font-family: sans-serif;
    /* margin-bottom: 40px; */
    
`

const UserLabel = styled.label`
    font-size: 18px;
    font-weight: 300;
    font-family: sans-serif;
    margin-bottom: 5px;
    color: #2a2a2a;
`

const UserInput = styled.input`
    margin-bottom: 15px;
    border: 1px solid #ccc;
    padding: 15px 10px;
    border-radius: 15px;

    width: 20.5rem;
    /* margin: 0 auto 35px auto; */
`
const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()


    const validateUser = async (email: string, password: string) => {
        const loggedIn = await Login(email)
        const logPass = await Password(password)

        if (!loggedIn) {
            return alert("E-mail inválido")
        }

        if(!logPass) {
            return alert("Senha incorreta")
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }

    return (
        <>
            <Layout>
                <Card>
                    <TextTitle>Bem vindo</TextTitle>
                    <TextIntro>Faça o login em nossa plataforma ou cadastre-se e tenha a melhor experiência conosco.</TextIntro>

                    <UserLabel htmlFor="email">E-mail</UserLabel>
                    <UserInput type="email" name="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />

                    <UserLabel htmlFor="password">Senha</UserLabel>
                    <UserInput type="password" name="password" id="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                    <Button onClick={() => validateUser(email, senha)} nameButton="Login" />

                </Card>
            </Layout>
        </>
    )

}

export default Home