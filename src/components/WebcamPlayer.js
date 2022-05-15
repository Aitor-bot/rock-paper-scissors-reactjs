import React from "react";
import Webcam from "react-webcam";
import '../App.css'

const WebcamPlayer = () => {
    const webcamRef = React.useRef(null);
    const [image, setImage] = React.useState(null);


const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    }, [webcamRef]);

const onMediaError = (error) => {
    alert("La cámara no tiene permisos")
    }


    return (
        <div>
        {!image ? (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                mirrored="true"
                onUserMediaError={(error) => onMediaError(error)} /> 
        </div>
        ) : (
            <img src={image} alt="gure argazkia"/>
        )}
            <br />

        <div className="multi-button" >
            <button className="take-pic" onClick={() => (!image ? capture() : setImage(null))}>{!image ? <i className="fa-solid fa-camera"></i> : <i className="fa-solid fa-arrows-rotate"></i>}</button>            
        </div>        
    </div>
    );
};

export default WebcamPlayer;