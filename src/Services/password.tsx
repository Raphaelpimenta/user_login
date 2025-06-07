import { api } from "../api"

export const Password = async (password: string) => {
    const data: any = await api

    if(password !== data.password){
        return false
    }

    return true

}