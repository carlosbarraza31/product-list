import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counters from './components/counters'
import NavBar from './components/navBar';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       counters: [
           {id: 0, value: 4},
           {id: 1, value: 0},
           {id: 2, value: 3},
           {id: 3, value: 0},
       ]
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
}

handleIncrement(counter) {
    const counters = this.state.counters;
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters: counters})
}

handleDecrease(counter) {
  const counters = this.state.counters;
  let index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters: counters})
}

handleDelete(counterId) {
   const counters = this.state.counters.filter(c => c.id !== counterId);
   this.setState({
       counters: counters
   });
}

handleAdd() {
  const idList = this.state.counters.map(c => {
    return c.id;
  })
  
  const maxId = Math.max(...idList);

  var newEntry = {};
  newEntry["id"] = maxId + 1;
  newEntry["value"] = 0;

  this.setState({counters: this.state.counters.concat(newEntry)})
}

handleReset() {
   const counters = this.state.counters.map(counter => {
       counter.value = 0;
       return counter
   });
   this.setState({counters: counters})
};


  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}></NavBar>
        <Counters 
        onIncrement = {this.handleIncrement}
        onDecrease = {this.handleDecrease}
        onDelete = {this.handleDelete}
        onAdd = {this.handleAdd}
        onReset = {this.handleReset}
        counters = {this.state.counters}></Counters>
      </React.Fragment>
    );
  }
}

export default App;
