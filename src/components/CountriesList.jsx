import { Link } from "react-router-dom";


function CountriesList(props) {
    console.log(props);
  return (
    <div>
     
     {props.allCountries.map(({name,alpha3Code,alpha2Code}, index)=>{
       
        return(
            <div key={index}>
           
           <Link to={`/countrie/${alpha3Code}`}>
              <div>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                  alt="bandera"
                />
                <p>{name.common}</p>
              </div>
            </Link>
           </div>
        )
     })}
    </div>
  )
}

export default CountriesList