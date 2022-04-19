import React from "react";
import Webcam from "react-webcam";
import '../App.css'
import { Button } from "@mui/material";

const WebcamPlayer = () => {
    const webcamRef = React.useRef(null);
    const [image, setImage] = React.useState(null);

    console.log("ESTA ES LA IMAGEN")
    console.log(image)

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, [webcamRef]);

    return (
        <div>
        {!image ? (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                mirrored="true"
            />
        </div>
        ) : (
            <img src={image} alt="gure argazkia"/>
        )}
            <br />
        <Button variant="outlined" onClick={() => (!image ? capture() : setImage(null))}>
            {!image ? "Argazkia atera" : "Beste argazki bat atera"}
        </Button> <br></br><br></br>
        <Button variant="contained" color="success"> Aukera bidali</Button>
    </div>
    );
};


export default WebcamPlayer;

