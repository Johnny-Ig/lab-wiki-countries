import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

function CountriesDetails(props) {

    const params = useParams()
    

    const filterAllCountries = props.allCountries.filter((eachCountrie)=>  eachCountrie.alpha3Code === params.countrieId)
    
    const details = filterAllCountries[0]
    
    


  return (
    <div>
      <h2>Countrie Details</h2>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}
          alt="imagen"
        />
        <h3>{details.name.common}</h3>
        <h4>Capital: {details.capital} </h4>
        <h4>Area: {details.area} km2</h4>
        <h4>Borders:</h4>
        <div>
          {details.borders.map((eachBorder) => {
            return (
              <p>
              <Link to={`/countrie/${eachBorder}`}>
                {eachBorder}
              </Link>
              </p>

            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesDetails