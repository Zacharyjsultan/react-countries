// render countries
import React from 'react';
import useCountries from '../../hooks/useCountries';
import Country from '../Country/Country';
import Filter from '../Filter/Filter';

export default function Main() {
  const { filterCountries, continent, setContinent } = useCountries(); 
  return (
    <div>
      <h1>Flags!!!</h1>
      <Filter continent={continent} setContinent={setContinent} />
      {filterCountries().map((name) => (
        <Country key={name.id} {...name} />
      ))}
    </div>
  );
}
