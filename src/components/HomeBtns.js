import React from 'react'

import styled from 'styled-components';
import '../App.css'

const Button = styled.button`
display: inline-block;
background: lightgray;
color: black;
padding: 15px 29px;
border-radius: 2px;
text-transform: uppercase; 
border: 1px solid white;
margin: 0.5em 1em;
cursor: pointer;
font-size: 1em;

&:hover {
  background: blue;
}
`

function HomeBtns() {
  return (
    <div className='homebtns-container'>          
          <div className='home-btns'>
            <Button className='homeBtn' onclick="">SEARCH PLAYERS</Button>
          </div>
    </div>
  )
}

export default HomeBtns