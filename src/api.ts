//Simulação de api
const conta = {
    name: "raphael",
    email: "login@teste.com",
    password: '12345',
    balance: 1000000,
}

export const api = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})