import React from 'react'

export default function Search() {
  return (
    <form id="search-form" className="mb-4">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-4">
          <input type="submit" value="Search" className="btn btn-danger me-1" />
          <input
            type="submit"
            className="btn btn-danger"
            id="my-location"
            value="My Location"
          />
        </div>
      </div>
    </form>
  )
}
