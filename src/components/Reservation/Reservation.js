import React from "react"
import './Reservation.css'

const Reservation = ({ id, name, number, time, date }) => {
  return (
    <section className='resy-card' id={id}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </section>
  )
}

export default Reservation 