import React from 'react'
import WebcamPlayer from "../components/WebcamPlayer"
import OpponentChoice from "../components/OpponentChoice"

function Game() {
  return (
    <div class='container'>
      <div class='gamescreen'>
        <div class='row'>
          <div class='col-6'>
            <WebcamPlayer />
          </div>
          <div class='col-6'>
            <OpponentChoice />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game