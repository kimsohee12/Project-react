import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,selectCity, handleCityChange}) => {
  console.log(cities);
  return (
    <div className='button'>   
      
      <Button className='btnCL' variant={`${selectCity == null ? "warning" : "outline-warning"}`}onClick={() => handleCityChange('current')}>CurrentLocation</Button>
      {cities.map((city,index)=>(
        <Button className='btnL' variant={`${selectCity == city ? "primary" : "outline-primary"}`} key={index}
        onClick={() => handleCityChange(city)}
        >{city}</Button>
      ))}
    </div>
  )
}

export default WeatherButton