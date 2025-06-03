import styled from "styled-components"
import { CardInfo } from "./CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../App"

const SimpleGrid = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
`

const BoxInfo = styled.div`
    width: 200px;
    height: 150px;
    background-color: white;
    padding: 30px;
    border-radius: 18px;
    margin: 50px 0px;
    
`

interface UserData {
    name: string
    email: string
    password: string
    balance: number
    id: string
}



export const Conta = () => {

    const context = useContext(AppContext)
    console.log('Passando um estado global através do AppContext', context)

    const [UserData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        
        getData()
    }, [])

    // console.log(UserData)

    const AcessoUser = new Date()

    const actualDate = `${AcessoUser.getDay()}/ ${AcessoUser.getMonth()}/ ${AcessoUser.getFullYear()} - ${AcessoUser.getHours()}: ${AcessoUser.getMinutes()}`

    const { id } = useParams()
    const navigate = useNavigate()
    // console.log(id)

    if(UserData && id !== UserData.id) {
        navigate('/')
    }


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
                        <CardInfo text="Informações do acesso" mainContent={`Olá ${UserData?.name}`} content={actualDate}/>
                    </BoxInfo>

                    <BoxInfo>
                        <CardInfo text="Informações da conta" mainContent={`Saldo`} content={`R$ ${UserData?.balance}`}/>
                    </BoxInfo>
                    </>
                )
                } 
        

            
        </SimpleGrid>
        
        </>
    )
}