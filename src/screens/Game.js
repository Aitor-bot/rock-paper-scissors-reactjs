import React from 'react'
import WebcamPlayer from "../components/WebcamPlayer"
import OpponentChoice from "../components/OpponentChoice"

function Game() {
  return (
    <div class='container'>
      <div class='gamescreen'>
        <div class='row'>
          <div class='col-4'>
            <WebcamPlayer />
          </div>
          <div class='col-4'>
            <h1 className='vs'>vs</h1>
          </div>
          <div class='col-4'>
            <OpponentChoice />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game