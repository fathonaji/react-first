export const INCREMENT_STATE = 'INCREMENT'
export const DECREMENT_STATE = 'DECREMENT'
export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export let counterRe = (state, action) => {
    switch(action.type){
        case INCREMENT_STATE:
            return state + 1
        case DECREMENT_STATE:
            return state - 1
        default:
            return state
    }
}

export let reducer = (todos, action) => {
    switch(action.type){
        case ADD_TODO:
            const id = todos.length ? todos[todos.length-1].id+1 : 1
            return [...todos, {id: id, completed: false, ...action.todo}]
        case UPDATE_TODO:
            return todos.map(todo => todo.id === action.todo.id ? action.todo : todo)
        case DELETE_TODO:
            console.log(todos)
            console.log(todos.filter(todo => todo.id !== action.todo.id))
            return todos.filter(todo => todo.id !== action.todo.id)
        default:
            return todos
    }
}