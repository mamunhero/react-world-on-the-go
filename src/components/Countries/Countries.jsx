import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"


  const Countries = ({countriesPromise}) => {

  const countriesData = use(countriesPromise)
  const countries = countriesData.countries
  // console.log(countries);
  // visited buttion click korle ui the count dekhabe
  const [visitedCountries, setVisitedCountries]= useState([]);
  const handleVisitedCountries = (country)=>{
    console.log("handle visited countries clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }
  return (
    <div>
      <h2>All Countries: {countries.length}</h2>
      <h2>Total Counrty Visited: {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map(country=> <li
            key={country.cca3.cca3}
          >{country?.name?.common}</li>)
        }
      </ol>
      <div className='countries'>
        {
        countries.map(country=><Country 
          key={country.cca3.cca3}
          country={country}
          handleVisitedCountries={handleVisitedCountries}>
        </Country>)
        }
      </div>
    </div>
  );
};

export default Countries;