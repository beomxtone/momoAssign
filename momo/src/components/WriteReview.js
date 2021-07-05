import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WriteReview = (id) => {
  const [ author, setAuthor ] = useState();
  const [ content, setContent ] = useState();

  const authorChange = (event) => {
    setAuthor({ author: event.target.value });
  }

  const contentChange = (event) => {
    setContent({ content: event.target.value });
  }

  const reviewSubmit = (event) => {
    fetch(`http://rp-fe.momoproject.co:3464/api/food/${id.data}/review`, {
      method: 'POST',
      body: JSON.stringify([author, content])

    }).then((response) => {
      console.log(response)
      return response.text();
    });

    event.preventDefault();
  }

  return (
    <div>

      <form method='post' id='reviewForm' onSubmit={reviewSubmit}>

        <span style={{fontWeight:'bold', margin: '2rem'}}>Name</span><br></br>

        <input type="text" placeholder="Dog's name" size='30' onChange={authorChange}
          style={{marginLeft: '2rem', marginTop:'1rem', marginBottom:'2rem',
                  paddingLeft: '2rem', paddingRight: '2rem', backgroundColor: 'cornsilk', 
                  border: 0, outline: 0, borderRadius: '2rem', lineHeight: '3rem'}}
          ></input><br></br>

        <span style={{fontWeight:'bold', margin: '2rem'}}>Review</span><br></br>

        <textarea type="text" placeholder="Write a review here..." cols='33' onChange={contentChange}
          style={{marginLeft: '2rem', marginTop:'1rem', marginBottom:'2rem',
                  padding: '2rem', backgroundColor: 'cornsilk', resize: 'none', 
                  border: 0, outline: 0, borderRadius: '4rem', height: '10rem'}}></textarea>

      </form>

      <Button 
        type="submit" form='reviewForm' variant="outline-warning"
        style={{width:'90vw', marginLeft:'1rem'}}>Submit</Button>

    </div>
  );
}

export default WriteReview;