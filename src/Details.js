import React from 'react'

export default function Details() {
  let city = 'Hamburg'
  let date = 'Monday 10:00'
  let description = 'Crear'

  return (
    <div className="space">
      <h1 id="city">{city}</h1>
      <ul>
        <li id="date">{date}</li>
        <li id="description">{description}</li>
      </ul>
    </div>
  )
}
