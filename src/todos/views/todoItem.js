
import React,{PropTypes} from 'react'
const TodoItem =({onToggle,onRemove,complete,text})=>{
    return(
        <li>
        <input type="checkbox" checked={complete ? "checked" : '' } readOnly onClick = {onToggle} />
        <label> {text}</label>
        <button onClick={onRemove}>X</button>
    </li>
    )

}
// TodoItem.propTypes = {
//     onToggle:PorpTypes.func.isRequired,
//     onRemove:PorpTypes.func.isRequired,
//     complete:PorpTypes.bool.isRequired,
//     text:PropTypes.string.isRequired
// }
export default TodoItem