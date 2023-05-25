import { useState } from "react";
import "./App.css";
import countries from "./countries.json"
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountriesDetails";
import { Route, Routes } from "react-router-dom";
function App() {

  const [allCountries, setCountries] = useState(countries)
  
  return <div className="App">

     <Navbar />

     <CountriesList allCountries={allCountries}/>

     <Routes>

     <Route path="/countrie/:countrieId" element={ <CountriesDetails allCountries={allCountries}/> }/>
     </Routes>

  </div>;
}
export default App;
