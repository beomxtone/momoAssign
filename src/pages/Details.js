import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Ingredients from '../components/Ingredients';
import Reviews from '../components/Reviews';
import { Box, makeStyles } from '@material-ui/core';
import WriteReview from 'components/WriteReview';

const useStyles = makeStyles({
  container: {
    height: '5rem',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridTemplateRows: '1fr 2fr',
    gridGap: '0px',
    marginTop: '2rem',
    marginLeft: '1rem',
    marginBottom: '1rem'
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
  },

  tab: {
    height: '2rem',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '0px',
    marginBottom: '1rem'
  },

  firstTab: {
    gridColumn: '1/2',
    width: '50vw',
    margin: '0px',
    textAlign: 'center'
  },
  secondTab: {
    gridColumn: '2/3',
    width: '50vw',
    margin: '0px',
    textAlign: 'center'
  }
});

//  <hr> tag
const Line = () => {
  return (
    <hr 
      style = {{
        backgroundColor: '#DCDCDC',
        height: 1,
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

const Details = (match) => {
  const [ state, setState ] = useState(null);
  const [ tab, setTab ] = useState(0);
  
  const classes = useStyles();

  useEffect(() => {
    const setDetails = async food_id => {
      try {
        setState(null);
  
        const response = await axios.get(
          `http://rp-fe.momoproject.co:3464/api/food/${food_id}`
        );
        setState(response.data);
        setTab({tab: 0}); //  default
      }
  
      catch (e) {
        console.log(e);
      }
    };

    setDetails(match.match.params.id);
  }, []);

  const clickHandler = id => {
    setTab({ tab: id });
    //console.log(id)
  }

  if (state === null) return <div>Loading...</div>;

  if (state !== null) {
    const obj = {
      0: <Ingredients data={state.ingredients} />,
      1: <Reviews data={tab} clickHandler={clickHandler}/>,
      2: <WriteReview data={state.id} />
    }

    return (
      <div>

        <Box className={classes.container}>
          <img className={classes.firstChild} width="70rem" src={`http://rp-fe.momoproject.co:3464${state.imageUrl}`} />
          <Box className={classes.secondChild} style={{ fontWeight: 'bold' }}> {state.brand} </Box>
          <Box className={classes.thirdChild} > {textOverCut(state.name)} </Box>
        </Box>

        <Box className={classes.tab}>
          <Box className={classes.firstTab} onClick={() => clickHandler(0)}>Ingredients</Box>
          <Box className={classes.secondTab} onClick={() => clickHandler(1)}>Reviews</Box>
        </Box>

        <Line/>

        {obj[tab.tab]}
        
      </div>
    );
  }

}

export default Details;