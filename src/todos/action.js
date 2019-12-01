import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionType';
let nextTodoId = 0;
export const addTodo = (text)=> ({
    type:ADD_TODO,
    complete:false,
    text:text,
    id:nextTodoId++
});
export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    id:id
})

export const toggleTodo = (id)=>({
    type:TOGGLE_TODO,
    id:id
})