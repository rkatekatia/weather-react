import React from 'react'
import './Weather.css'
import Search from './Search.js'
import Details from './Details.js'
import Temp from './Temp.js'
import Description from './Description.js'

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Details />
          <div className="row">
            <Temp />
            <Description />
          </div>
        </div>
      </div>
    </div>
  )
}
