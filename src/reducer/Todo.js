import React, { useReducer } from "react";
import * as Reducer from './ReducerCustom'
import PropTypes from 'prop-types'

const ToDo = ({id, title, body}) => {
    let [todos, dispatch] = useReducer(Reducer.reducer,[])

    const addToDo = e => {
        dispatch({type: Reducer.ADD_TODO, todo: {title: title, body: body}})
    }

    const updateToDo = e => {
        dispatch({type: Reducer.UPDATE_TODO, todo: {id: id, title: title, body:body}})
    }

    const deleteToDo = e => {
        dispatch({type: Reducer.DELETE_TODO, todo: {id:id}})
    }

    const ui = <div>
        <button onClick={addToDo}>Add To Do</button>
        <button onClick={updateToDo}>Update To Do</button>
        <button onClick={deleteToDo}>Delete To Do</button>
        <div>
            <p>ID: {todos.length > 0 && todos[todos.length-1].id}</p>
            <p>Title: {todos.length > 0 &&todos[todos.length-1].title}</p>
            <p>Body: {todos.length > 0 &&todos[todos.length-1].body}</p>
        </div>
    </div>

    return ui
}

ToDo.propTypes = {
    id: PropTypes.number
}

export default ToDo