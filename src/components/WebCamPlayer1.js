import React from "react";
import Webcam from "react-webcam";
import '../App.css'
import { Button } from "@mui/material";
import Flexbox from 'flexbox-react';

const WebcamPlayer1 = () => {
    const webcamRef = React.useRef(null);

    const webcamRefDos = React.useRef(null);
    
    const [image, setImage] = React.useState(null);
    
    const [imageDos, setImageDos] = React.useState(null);

    console.log("ESTA ES LA IMAGEN")
    console.log(image)

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, [webcamRef]);

    const captureDos = React.useCallback(() => {
        const imageSrc = webcamRefDos.current.getScreenshot();
        setImageDos(imageSrc);
    }, [webcamRefDos]);

    const [optionOne, setOptionOne] = React.useState(null);
    const [optionTwo, setOptionTwo] = React.useState(null);
    console.log("OptionOne")
    console.log(optionOne)
    console.log("OptionTwo")
    console.log(optionTwo)

    const playerOneOption = () => 
    {
        setOptionOne(image)
    }

    const secondPlayerOption = () => 
    {
        setOptionTwo(imageDos)
    }

    let playersReady = null;

    if(optionOne !== null && optionTwo !== null)
    {
        playersReady = <Button variant="contained" color="success" onClick={() => {Winner()}}> Jokoa burutu</Button>
        console.log(playersReady)
    }

    const [winner, setWinner] = React.useState(null);
    const Winner = () => {
        setWinner("Harriak guraizeak mozten ditu, beraz harriak irabazten du")
    }


    const videoConstraints = {
        width: 500,
        height: 500,
        facingMode: "user"
      };

    return (
        <div>
        <Flexbox justifyContent="space-between" marginLeft="3%" marginRight="3%">
        {!image ? (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                mirrored="true"
                videoConstraints={videoConstraints}
            />
        </div>
        ) : (
            <img src={image}/>
        )}
            <br />
      <Button variant="outlined" onClick={() => (!image ? capture() : setImage(null))}>
        {!image ? "Argazkia atera" : "Beste argazki bat atera"}
      </Button> <br></br><br></br>
      <Button variant="contained" color="success" onClick={() => {playerOneOption()}} > Aukera bidali</Button>
 
      {!imageDos ? (
        <div>
            <Webcam
                audio={false}
                ref={webcamRefDos}
                screenshotFormat="image/jpeg"
                mirrored="true"
                videoConstraints={videoConstraints}
            />
        </div>
        ) : (
            <img src={imageDos}/>
        )}
            <br />
      <Button variant="outlined" onClick={() => (!imageDos ? captureDos() : setImageDos(null))}>
        {!imageDos ? "Argazkia atera" : "Beste argazki bat atera"}
      </Button> <br></br><br></br>
      <Button variant="contained" color="success" onClick={() => {secondPlayerOption()}}> Aukera bidali</Button>
    </Flexbox>
    <Flexbox marginLeft="40%" marginTop="100px">
        {playersReady}
        
    </Flexbox>
    <Flexbox marginLeft="35%" marginTop="50px">
        {winner}
        
    </Flexbox>
    </div>
    );
};


export default WebcamPlayer1;

