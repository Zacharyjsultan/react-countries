import React from 'react';

export default function Country({ name, iso2 }) {
  return (
    <div className='container'>
      <h2> {name} </h2>
      <img src={`https://flagcdn.com/84x63/${iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/168x126/${iso2.toLowerCase()}.png 2x,https://flagcdn.com/252x189/${iso2.toLowerCase()}.png 3x`}
        width="84"
        height="63"
        alt={`{name}`}
      />
       
    </div>
  );
}
