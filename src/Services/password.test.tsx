import { describe, expect, it } from "vitest";
import { Password } from "./password";

describe('Password Teste', () => {

    const mockPassword = "12345"
    it('Deve aparecer um alert com a senha inválida', async () => {

        const response = await Password(mockPassword)
        expect(response).toBeTruthy()
        
    })

    it('Deve aparecer um erro caso a senha seja inválida', async () => {
        const response = await Password('senha invalida')
        expect(response).toBeFalsy()
    })



})