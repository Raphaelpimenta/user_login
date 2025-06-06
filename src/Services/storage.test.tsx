import { describe, expect, it, vi } from "vitest";
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
    login: false
}

describe('storage', () => {
    
    const mockSetItem = vi.spyOn(Storage.prototype, 'setItem')
    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = vi.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('dioBank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })

})