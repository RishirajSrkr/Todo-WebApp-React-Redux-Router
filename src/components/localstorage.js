export function loadFromLocalStorage(){
    const str = localStorage.getItem('todos')
    return str? JSON.parse(str) : []
}

export function saveToLocalStorage(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}