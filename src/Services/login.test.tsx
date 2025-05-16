import {describe, expect, it, vi} from 'vitest'
import { Login } from './login';
describe('Login Teste', () => {

    const mockAlert = vi.fn()
    globalThis.alert = mockAlert

    const mockEmail = "login@teste.com" //email válido

    it('Deve aparecer um alert com email válido', async () => {
        await Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem-vindo ${mockEmail}`)

    })

    it('Não deve exibir a mensagem sem o email', async () => {
        await Login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem-vindo!')
    })


    it('Deve aparecer um erro caso o email seja inválido', async () => {
        await Login('test@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
});