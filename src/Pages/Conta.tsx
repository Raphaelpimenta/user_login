import styled from "styled-components"
import { CardInfo } from "./CardInfo"
import { useEffect, useState } from "react"
import { api } from "../api"

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
}

export const Conta = () => {

    const [UserData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        
        getData()
    }, [])

    console.log('eu sou user data', UserData)


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
                        <CardInfo text="Informações do acesso" mainContent={`Olá ${UserData?.name}`} content="22/02/1998"/>
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