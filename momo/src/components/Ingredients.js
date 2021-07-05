import React from 'react';

const Ingredients = (ingredients) => {
  const datas = ingredients.data;

  return (
    <div>
      <svg height="20" width="20" style={{marginLeft: '2rem'}}>
        <rect x="0" y="3" rx="4" ry="4" width="14" height="14" style={{fill: "lightgreen"}}/></svg>
      <span style={{fontSize: '0.7rem'}}>SAFE</span>

      <svg height="20" width="20" style={{marginLeft: '0.4rem'}}>
        <rect x="0" y="3" rx="4" ry="4" width="14" height="14" style={{fill: "gold"}}/></svg>
      <span style={{fontSize: '0.7rem'}}>WORRIED</span>

      <svg height="20" width="20" style={{marginLeft: '0.4rem'}}>
        <rect x="0" y="3" rx="4" ry="4" width="14" height="14" style={{fill: "red"}}/></svg>
      <span style={{fontSize: '0.7rem'}}>HARMFUL</span>

      <svg height="20" width="20" style={{marginLeft: '0.4rem'}}>
        <rect x="0" y="3" rx="4" ry="4" width="14" height="14" style={{fill: "lightgrey"}}/></svg>
      <span style={{fontSize: '0.7rem'}}>UNKNOWN</span>


      <div style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '1.5rem'}}>
        {datas.map((data, index) => {
          
            if(data.safety === "SAFE")
              return ( <span key={index} style={{color: 'lightgreen'}}> {data.name} </span> );

            if(data.safety === "WORRIED")
              return ( <span key={index} style={{color: 'gold'}}> {data.name} </span> );

            if(data.safety === "HARMFUL")
              return ( <span key={index} style={{color: 'red'}}> {data.name} </span> );

            if(data.safety === "UNKNOWN")
              return ( <span key={index} style={{color: 'lightgrey'}}> {data.name} </span> );

        })}
      </div>
    </div>

  );
}

export default Ingredients;