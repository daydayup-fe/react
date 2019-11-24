import React , {Component}from 'react';
import Counter from './counter'

class CounterFather extends Component {
    constructor (){
        super()
        this.state ={
            totalValue:2
        }
    }
    render(){
        return(
            <div>
                <Counter ></Counter>
                <Counter ></Counter>
                <Counter ></Counter>

        <div> this is fatherComponent totalValue:{this.state.totalValue}</div>
            </div>
        )
    }
}

export default CounterFather