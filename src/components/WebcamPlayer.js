import React from "react";
import Webcam from "react-webcam";
import '../App.css'

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

        <div className="multi-button" >
            <button className="take-pic" onClick={() => (!image ? capture() : setImage(null))}>{!image ? <i class="fa-solid fa-camera"></i> : <i class="fa-solid fa-arrows-rotate"></i>}</button>
            <button className="send-pic"><i class="fa-solid fa-paper-plane"></i></button>
        </div>        
    </div>
    );
};

export default WebcamPlayer;