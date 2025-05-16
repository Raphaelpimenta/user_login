//Simulação de api
const conta = {
    name: "raphael",
    email: "teste@me",
    password: '12345'
}

export const api = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})