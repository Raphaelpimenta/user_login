//import { useContext } from "react"
import { api } from "../api"
//import { AppContext } from "../Components/Context"
//import { useNavigate } from "react-router-dom"

export const Login = async (email: string): Promise<boolean> => {
    // const { setIsLoggedIn } = useContext(AppContext)
    // const navigate = useNavigate()


    const data: any = await api

    if (email !== data.email) {
        return false

    }

    // setIsLoggedIn(true)
    // navigate(`/${data.id}`)
    return true

    
}