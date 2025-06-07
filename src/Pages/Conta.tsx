import styled from "styled-components"
import { CardInfo } from "./CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../Components/Context"
import { Button } from "../Components/Button"
import { changeLocalStorage } from "../Services/storage"

const SimpleGrid = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    position: relative;
`

const BoxInfo = styled.div`
    width: 200px;
    height: 150px;
    background-color: white;
    padding: 30px;
    border-radius: 18px;
    margin: 50px 0px;
    
`

const BoxLogout = styled.div`
    display: block;
    position: absolute;
    top: 100%;
    /* left: 15%; */
`

interface UserData {
    name: string
    email: string
    password: string
    balance: number
    id: string
}



export const Conta = () => {

    // const context = useContext(AppContext)
    // console.log('Passando um estado global através do AppContext', context)

    const [UserData, setUserData] = useState<null | UserData>()

    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)


    //!isLoggedIn && navigate('/') //Verificação se o login é realmente false

    if (isLoggedIn === false) {
        navigate('/')
    }

    console.log('isLoggedIn', isLoggedIn)



    // console.log(UserData)
    if (UserData && id !== UserData.id) {
        navigate('/')
    }

    const AcessoUser = new Date()

    const actualDate = `${AcessoUser.getDay()}/ ${AcessoUser.getMonth()}/ ${AcessoUser.getFullYear()} - ${AcessoUser.getHours()}: ${AcessoUser.getMinutes()}`


    const logout = () => {
        setIsLoggedIn(false)
        changeLocalStorage({ login: false })
        navigate('/')
    }

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()

    }, [])


    return (
        <>

            <SimpleGrid>
                {
                    UserData === null || UserData === undefined ?
                        (
                            <p>Carregando...</p>
                        ) : (
                            <>
                                <BoxInfo>
                                    <CardInfo text="Informações do acesso" mainContent={`Olá ${UserData?.name}`} content={actualDate} />
                                </BoxInfo>

                                <BoxInfo>
                                    <CardInfo text="Informações da conta" mainContent={`Saldo`} content={`R$ ${UserData?.balance}`} />
                                </BoxInfo>



                            </>
                        )
                }

                <BoxLogout>
                    <Button onClick={() => (logout())} nameButton="Sair" />
                </BoxLogout>



            </SimpleGrid>

        </>
    )
}