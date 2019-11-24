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
       this.updateCounter(true)
    }
    reduce(){
        this.updateCounter(false)
    }
    updateCounter(isIncrement){
        const preValue = this.state.count;
        const newValue = isIncrement ? preValue+1 : preValue-1;
        this.setState({count:newValue});
        this.props.onUpdate(newValue,preValue)

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