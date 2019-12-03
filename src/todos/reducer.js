import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionType';
export default (state=[],action) =>{
    switch(action.type) {
        case ADD_TODO : {
            return [
                {
                    id:action.id,
                    text:action.text,
                    complete:false
                },
                ...state
            ]
        }
        case TOGGLE_TODO : {
            return state.map((todoItem)=>{
                if(todoItem.id ===action.id) {
                    return {...todoItem,complete:!todoItem.complete};
                }else{
                    return todoItem
                }
            })
        }
        case REMOVE_TODO:{
            return state.filter((todoItem)=>{
                return todoItem.id !== action.id
            })
        }
        default:
            return state;
    }
} 