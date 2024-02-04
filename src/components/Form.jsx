import { useState } from "react"
import DisplayCityData from "./DisplayCityData"

function Form() {
  const [cityDetails, setCityDetails] = useState({
    cityName: '',
    stateName: '',
    cityTemp: '',
  }) 
  const [citiesData, setCitiesData] = useState([])

  const handleInputs = (e) => {
    setCityDetails({...cityDetails, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setCitiesData( curCitiesData => [...curCitiesData, cityDetails])
    e.currentTarget.reset()
  }

  return (
    <>
      <section className="form-data">
        <h2>Please provide City name, State name and City temperature</h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* city name info */}
          <div className="form-row">
            <label htmlFor="cityName">City name:</label>
            <input type="text" name="cityName" id="cityName" onInput={handleInputs} required/>
          </div>

          {/* state name info */}
          <div className="form-row">
            <label htmlFor="stateName">State name:</label>
            <input type="text" name="stateName" id="stateName" onInput={handleInputs} required/>
          </div>

          {/* city temp info */}
          <div className="form-row">
            <label htmlFor="cityTemp">City temp:</label>
            <input type="number" name="cityTemp" id="cityTemp" onInput={handleInputs} required/>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      <DisplayCityData citiesData={citiesData}/>
    </>
  )
}

export default Form