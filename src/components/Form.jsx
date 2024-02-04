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
      <section className="form-data px-2 py-3 col-md-6 col-sm-12">
        <h2 className="p-2 text-center">
          Please provide City name, State name and City temperature
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* city name info */}
          <div className="form-row mb-3">
            <label htmlFor="cityName" className="form-label">City name:</label>
            <input type="text" className="form-control" name="cityName" id="cityName" onInput={handleInputs} required/>
          </div>

          {/* state name info */}
          <div className="form-row mb-3">
            <label htmlFor="stateName" className="form-label">State name:</label>
            <input type="text" className="form-control" name="stateName" id="stateName" onInput={handleInputs} required/>
          </div>

          {/* city temp info */}
          <div className="form-row mb-3">
            <label htmlFor="cityTemp" className="form-label">City temp:</label>
            <input type="number" className="form-control" name="cityTemp" id="cityTemp" onInput={handleInputs} required/>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Submit
          </button>
        </form>
      </section>

      <DisplayCityData citiesData={citiesData}/>
    </>
  )
}

export default Form