import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import { directive } from '@babel/types'


class Counter extends Component {
    constructor (props){
        super(props);
        this.add = this.add.bind(this);
        this.reduce = this.reduce.bind(this);
        this.state = {
            count: props.initValue || 1
        }
    }
    add(){
        this.setState({count:this.state.count+1})
    }
    reduce(){
        this.setState({count:this.state.count-1})
    }
   render(){
    return (
        <div>
            <button onClick = {this.add} >+</button>
            <button onClick = {this.reduce}>-</button>
            <span>this is num: {this.state.count} </span>
        </div>
    ) 
        
    
   }
}

export default Counter;