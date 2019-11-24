import React , {Component}from 'react';
import Counter from './counter'

class CounterFather extends Component {
    constructor (props){
        super(props);
        this.initValue = [0,10,20];
        const initSum = this.initValue.reduce((a,b) => a+b,0)
        this.state ={
            totalValue:initSum
        }
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
    }
    onCounterUpdate(newValue,preValue){
        const valueChange = newValue - preValue;
        // this.setState({totalValue:this.totalValue + valueChange}) this.totalValue 
        this.setState({totalValue:this.state.totalValue + valueChange})
    }
    render(){
        return(
            <div>
                <Counter onUpdate = {this.onCounterUpdate} initValue = {this.initValue[0]} ></Counter>
                <Counter onUpdate = {this.onCounterUpdate} initValue = {this.initValue[1]}></Counter>
                <Counter onUpdate = {this.onCounterUpdate} initValue = {this.initValue[2]} ></Counter>

        <div> this is fatherComponent totalValue:{this.state.totalValue}</div>
            </div>
        )
    }
}

export default CounterFather