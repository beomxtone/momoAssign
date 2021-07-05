import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    height: '5rem',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridTemplateRows: '1fr 2fr',
    gridGap: '0px',
  },

  firstChild: {
    gridRow: '1/4',
    gridColumn: '1/1'
  },
  secondChild: {
    gridRow: '1/2',
    gridColumn: '2/8',
    marginLeft: '1rem'
  },
  thirdChild: {
    gridRow: '2/4',
    gridColumn: '2/8',
    marginLeft: '1rem'
  }
});

//  <hr> tag
const Line = () => {
  return (
    <hr 
      style = {{
        backgroundColor: '#DCDCDC',
        height: 1,
        marginTop: '1rem',
        marginLeft: '1rem',
        marginRight: '1rem'
      }}
    />
  );
}

//  if data.name length over 48
const textOverCut = (text) => {
  let len = text.length;
  const last = "...";

  if (len === "" || len === null) len = 20;
  if (len > 48) text = text.substr(0, 48) + last;

  return text; 
}

const Product = (data) => {
  const classes = useStyles();
  
  return (
    <div>
      <Link to={{ pathname: `/details/${data.id}`}} style={{ color:'black' }}>
        <Box className={classes.container}>
          <img className={classes.firstChild} width="70rem" src={data.img} />
          <Box className={classes.secondChild} style={{ fontWeight: 'bold' }}> {data.brand} </Box>
          <Box className={classes.thirdChild} > {textOverCut(data.name)} </Box>
        </Box>
        <Line/>
      </Link>
    </div>
  )
}

export default Product;