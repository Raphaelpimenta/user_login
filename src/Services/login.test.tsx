import {describe, expect, it} from 'vitest'
import { Login } from './login';


// const mockSetLoggedIn = vi.fn()
// const mockNavigate = vi.fn()

// vi.mock('react', async () => { 
//     const actual = await vi.importActual<typeof import('react')>('react')

//     return {
//         ...actual,
//         useContext: () => ({
//             setIsLoggedIn: mockSetLoggedIn
//         })
//     }


// })

// vi.mock('react-router-dom', async () => {
//     const navigate = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')

//     return {
//         ...navigate,
//         useNavigate: () => mockNavigate
//     }
// })


describe('Login Teste', () => {

    // const mockAlert = vi.fn()
    // globalThis.alert = mockAlert

    const mockEmail = "login@teste.com" //email válido

    it('Deve aparecer um alert com email válido', async () => {
        const response = await Login(mockEmail)
        //expect(mockSetLoggedIn).toHaveBeenCalledWith(true)
        //expect(mockNavigate).toHaveBeenCalledWith('/1')
        expect(response).toBeTruthy()
    })


    it('Deve aparecer um erro caso o email seja inválido', async () => {
        const response = await Login('test@invalido.com')
        //expect(mockSetLoggedIn).not.toHaveBeenCalled()
        //expect(mockNavigate).not.toHaveBeenCalled()
        expect(response).toBeFalsy()
        
    })
}); 