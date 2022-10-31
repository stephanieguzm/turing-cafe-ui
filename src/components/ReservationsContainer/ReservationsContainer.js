import React from "react"
import Reservation from '../Reservation/Reservation'

const ReservationsContainer = ({ reservations }) => { 
  
  const reservationCards = reservations.map( reservation => {
    return (
      <Reservation 
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
      />
    )
  })

  return (
    {reservationCards}
  )
}


export default ReservationsContainer