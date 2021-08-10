import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrease, onAdd} = this.props;

        return ( 
            <div>
                <button
                 className = 'btn btn-primary btn-sm m-2'
                 onClick = {onReset}>
                     Reset     
                </button>
                <button
                className = 'btn btn-light btn-smm-2'
                onClick = {onAdd}>
                    Add item
                </button>
                     

                {counters.map(counter => (
                    <Counter 
                    key = {counter.id} 
                    value = {counter.value} 
                    onDelete = {onDelete}
                    onIncrement = {onIncrement}
                    onDecrease = {onDecrease}
                    id = {counter.id}
                    counter = {counter} ></Counter>
                ))}
            </div>
         );
    }
}
 
export default Counters;