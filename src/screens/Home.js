import React from 'react';
import { Grid } from '@mui/material'; 
import HomeBtns from '../components/HomeBtns';
import '../App.css';

function Home() {
  return (
    <div className='main'>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        style={{minHeight:"100vh"}}
      >
        <Grid item xs={3}>
          <HomeBtns />
          <img className='home-pic' src={require('../assets/images/homeimage2.png')} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;