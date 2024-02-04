function DisplayCityData({citiesData}) {
  return (
    <section className='cities-data px-2 py-3 col-md-6 col-sm-12'> 
        <h2 className="p-2 text-center">City Details</h2>

        <div className="row">
            {citiesData.length > 0 ? (
                    citiesData.map((city, idx) => {
                        const {cityName, stateName, cityTemp} = city;
        
                        return <div className="city-details p-2 col-md-6 col-sm-12 text-center" key={idx}>
                            <span className="fs-5">City name:</span> 
                            <p className="fw-bold text-capitalize">{cityName}</p>
                            <span className="fs-5">State name:</span> 
                            <p className="fw-bold text-capitalize">{stateName}</p>
                            <span className="fs-5">City temperature:</span> 
                            <p className="fw-bold">{cityTemp}</p>
                        </div>
                    })
            ) : (
                <p className="fs-5 text-center">
                    No City data available, please provide city details
                </p>
            )}            
        </div>
    </section>
  )
}

export default DisplayCityData