// render countries
import React from 'react';
import useCountries from '../../hooks/useCountries';
import Country from '../Country/Country';

export default function Main() {
  const { filterCountries, continent, setContinent } = useCountries(); 
  return (
    <div>
      {filterCountries().map((name) => (
        <Country key={name.id} {...name} />
      ))}
    </div>
  );
}
