import React from 'react'

export default function Temp() {
  let temperature = 17
  return (
    <div className="col-6">
      <div className="clearfix weather-temperture">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSxjbo6M168gOwJYnqlVcBkaksJFYMN4_nQ&usqp=CAU"
          alt="Clear"
          id="icon"
          className="float-start"
        />
        <div className="float-start">
          <strong id="temperature">{temperature}</strong>
          <small className="units">
            <a href="/" id="celsius-link" className="active">
              ˚C
            </a>
            |
            <a href="/" id="fahrenheit-link">
              ˚F
            </a>
          </small>
        </div>
      </div>
    </div>
  )
}
