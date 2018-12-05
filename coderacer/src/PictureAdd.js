import React from 'react'
import Webcam from "react-webcam"


class PictureAdd extends React.Component {


    setRef = webcam => {
        this.webcam = webcam;
    }
 
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc)
        this.props.handleAddPic(imageSrc)
     }



    render(){

        const videoConstraints = {
                width: 1280,
                height: 720,
                facingMode: "user"
        }

        return(


        <div>
            <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
            />
            <button onClick={this.capture}>Capture photo</button>
        </div>

        )
    }

}

export default PictureAdd