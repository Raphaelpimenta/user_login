import {describe, expect, it, vi} from 'vitest'
import { Login } from './login';
describe('Login Teste', () => {

    const mockAlert = vi.fn()
    globalThis.alert = mockAlert
    const mockEmail = "rapha@dio"

    it('Devev aparecer um alert na tela', () => {
        Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Olá seja bem-vindo ${mockEmail}`)

    })

    it('Não deve exibir a mensagem sem o email', () => {
        Login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem-vindo!')
    })
});