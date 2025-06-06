interface IDioBank {
    login: boolean
}
const dioBank = {
    login: false
}
export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('dioBank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('dioBank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (diobank: IDioBank): void => {
    localStorage.setItem('dioBank', JSON.stringify(diobank))
}