import React from 'react';
import HomeBtns from '../components/HomeBtns';
import '../App.css';

function Home() {
  return (
    <div className='home-container'>
      <img className='background' src={require("../assets/images/homeimage.png")} alt=""/>
      <div className='home-btns'>
        <HomeBtns />
      </div>
    </div>
  );
}

export default Home;