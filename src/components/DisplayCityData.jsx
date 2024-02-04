function DisplayCityData({citiesData}) {
  return (
    <section className='cities-data'> 
        <h2>City Details</h2>

        {citiesData.map((city, idx) => {
            const {cityName, stateName, cityTemp} = city;

            return <div className="city-details" key={idx}>
                <p>City name: {cityName}</p>
                <p>State name: {stateName}</p>
                <p>City temperature: {cityTemp}</p>
            </div>
        })}
    </section>
  )
}

export default DisplayCityData