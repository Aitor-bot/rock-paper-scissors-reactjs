import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import WebcamPlayer from "../components/WebcamPlayer"
import OpponentChoice from "../components/OpponentChoice"

function Game() {
  return (
    <div >
      <Container>
        <Row className='rows'>
          <Col className='columns'><WebcamPlayer /></Col>
          <Col className='columns'><h1 className='vs'>vs</h1></Col>
          <Col className='columns'><OpponentChoice /></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Game