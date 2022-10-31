import React, { Component } from "react"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //App callback function
  }

  render() {
    return (
      <section>
        <form className='resy-form'>
          <input 
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
          <input 
            type='text'
            placeholder='Date (mm/dd)'
            name='date'
            value={this.state.date}
            onChange={(event) => this.handleChange(event)}
          />
          <input 
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={(event) => this.handleChange(event)}
          />
          <input 
            type='text'
            placeholder='Number of guests'
            name='number'
            value={this.state.number}
            onChange={(event) => this.handleChange(event)}
          />
          <button onSubmit={(event) => this.handleSubmit(event)}>Make Reservation</button>
        </form>
      </section>
    )
  }
}

export default Form