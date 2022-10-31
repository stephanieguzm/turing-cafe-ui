import React, { Component } from 'react';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({ reservations: data }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ReservationsContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
