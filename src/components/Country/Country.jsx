import React, { useState } from 'react';
import "./Country.css"


const Country = ({country}) => {
  // console.log(country);
  // condition visited or not visited
  const [visited, setVisited] = useState(false)
  // handle visited onClick
  const handleVisited =()=>{
    console.log("button clicked");
    // 1st system
    // if (visited) {
    //   setVisited(false)
    // } else {
    //   setVisited(true)
    // }
    // 2nd system ternory operator 
    // setVisited(visited? false : true)
    // 3rd system
    setVisited(!visited)
  }
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h2>Name: {country?.name?.common}</h2>
      <p>Population: {country?.population?.population}</p>
      <p>Area: {country?.area?.area} {
          country.area.area>300000? "Big Country" : "Small Country"
        }
      </p>
      <button onClick={handleVisited}>{
          visited? "Visited" : "Not Visited"
        }</button>
    </div>
  );
};

export default Country;