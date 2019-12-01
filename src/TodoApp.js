import  React from 'react';
import {view as Todo} from './todos';
import {view as Filter} from './filter';
function TodoApp(){
    return(
        <div>
            <Todo/>
            <Filter/>
        </div>
    )
}

export default TodoApp;