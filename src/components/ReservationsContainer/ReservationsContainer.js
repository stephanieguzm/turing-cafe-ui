import React from "react"
import Reservation from '../Reservation/Reservation'
import './ReservationsContainer.css'

const ReservationsContainer = ({ reservations }) => { 
  console.log('reservations', reservations)
  const reservationCards = reservations.map( reservation => {
    return (
      <Reservation 
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
        date={reservation.date}
        key={reservation.id}
      />
    )
  })

  return (
    <section className='resy-container'>
      {reservationCards}
    </section>
  )
}

export default ReservationsContainer