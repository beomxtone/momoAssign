import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Reviews = (props, reviews) => {
  const datas = reviews.data;   // original code
  /**
  const datas = [{                // test case
    "author": "Momo",
    "content": "Momo loved it!"
    }] */

  const [ tab, setTab ] = useState(2);

  const clicked = value => {
    setTab(value);
    props.clickHandler(tab);
  };

  if (datas === undefined) {  //  When product has no reviews
    return (
      <div>
        <Button 
          type="button" variant="outline-warning" 
          style={{width:'90vw', marginLeft:'1rem'}} onClick={() => {
            clicked(2)}}>Write a Review</Button>

        <div 
          style={{  width: '100vw', height: '50vh',
                    display: 'table-cell',
                    textAlign: 'center', verticalAlign: 'middle',
                    fontWeight: 'bold', fontSize: '1.2rem'}}
        >No reviews yet</div>
      </div>
    );
  }

  else {
    const reviews = datas.map(data => {
      return (
        <div>
          <div style={{fontWeight:'bold', marginLeft: '2rem', marginTop: '2rem'}}> {data.author} </div>

          <textarea type="text" cols='33' value={data.content}
            style={{marginLeft: '2rem', marginTop:'1rem', marginBottom:'2rem',
                    padding: '2rem', backgroundColor: 'cornsilk', resize: 'none', 
                    border: 0, outline: 0, borderRadius: '4rem', height: '10rem'}}></textarea>

        </div>
      );
    })

    return (
      <div>
        <Button 
          type="button" variant="outline-warning" 
          style={{width:'90vw', marginLeft:'1rem'}} onClick={() => {
            clicked(2)}}>Write a Review</Button>

        {reviews}
      </div>
    );
  }
}

export default Reviews;