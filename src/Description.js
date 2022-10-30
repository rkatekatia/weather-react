import React from 'react'

export default function Description() {
  let humidity = 80
  let wind = 15

  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity">{humidity}</span>%
        </li>
        <li>
          Wind: <span id="wind">{wind}</span> km/h
        </li>
      </ul>
    </div>
  )
}
