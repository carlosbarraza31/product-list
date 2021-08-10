import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <table className = 'table'>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <span 
                                className = {this.getBadgeClasses()} >{this.formatCount()}
                                </span> 
                            </div>
                        </td>
                        <td>
                            <div>
                                <button 
                                onClick = {() => this.props.onIncrement(this.props.counter)} 
                                className = "btn btn-secondary btn-sm">
                                Increment
                                </button>
                            </div>
                        </td>
                        <td>
                            <div>
                                <button
                                onClick = {this.props.counter.value <= 0 ? 0 : () => this.props.onDecrease(this.props.counter)}
                                className = 'btn btn-primary btn-sm'>
                                Decrease
                                </button>
                            </div>
                        </td>
                        <td>
                            <div>
                                <button 
                                className = 'btn btn-danger btn-sm m-2'
                                onClick = {() => this.props.onDelete(this.props.id)}>
                                Delete
                                </button>
                            </div>
                        </td>

                    </tr>
                </tbody>
                

            </table>
            // <div>
            //     <span 
            //     className = {this.getBadgeClasses()} >{this.formatCount()}
            //     </span>

            //     <button 
            //     onClick = {() => this.props.onIncrement(this.props.counter)} 
            //     className = "btn btn-secondary btn-sm">
            //         Increment
            //     </button>

            //     <button
            //     onClick = {() => this.props.onDecrease(this.props.counter)}
            //     className = 'btn btn-primary btn-sm'>
            //         Decrease
            //     </button>

            //     <button 
            //     className = 'btn btn-danger btn-sm m-2'
            //      onClick = {() => this.props.onDelete(this.props.id)}>
            //          Delete
            //     </button>
            // </div>
          );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        let count = this.props.value;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;