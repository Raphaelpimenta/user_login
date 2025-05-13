import {describe, expect, it, vi} from 'vitest'
import { Login } from './login';
describe('Login Teste', () => {

    const mockAlert = vi.fn()
    globalThis.alert = mockAlert

    it('Devev aparecer um alert na tela', () => {
        Login()
        expect(mockAlert).toHaveBeenCalledWith('Olá seja bem-vindo')

    })
});