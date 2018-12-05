import React from 'react'
import { Container, Segment, SegmentGroup, Image, Dropdown } from 'semantic-ui-react'
import Webcam from "react-webcam";

class UserProfile extends React.Component {

    state = {
        user: this.props.user,
        picture_taken: false,
        localPic: ''
    }



    postImage = (user_id, image) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pic_url: image
      })
    }).then(resp => resp.json())
  }


    setRef = webcam => {
        this.webcam = webcam;
    }
 
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc)
        this.postImage(this.props.user_id, imageSrc)
        this.setState({ picture_taken: true })
        this.setState({ localPic: imageSrc })
     }

    

    render(){

        const { user, picture_taken, localPic } = this.state
        const videoConstraints = {
                width: 1280,
                height: 720,
                facingMode: "user"
        }

        return(

        <div>


        <div>
            {
                
                user.pic_url 
                    ? null
                    : picture_taken
                    ? null
                    :
                <div >
                    <Webcam
                    style={{ 
                        marginLeft: "550px",
                        borderRadius: "50%"
                    }}
                    audio={false}
                    // height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    // width={350}
                    videoConstraints={videoConstraints}
                    />
                    <button onClick={this.capture}>Capture photo</button>
                </div>
                
            }
        </div>



            <div style={{
                      borderRadius: "10px",
                      margin: "1 em auto",
                      width: "90%",
                      textAlign: "center" 
                }}>
                {

                <div style={{ marginLeft: "200px", tranform: "scale(1.3)"}}>
                                {/* <Segment> */}
                                    <div>
                                    {
                                        user.pic_url 
                                        ? <img id="image" style={{borderRadius: "20%"}} src={user.pic_url} alt="take a picture!" /> 
                                        : <img id="image" style={{borderRadius: "20%"}} src={localPic} alt="take a picture!" /> 
                                    }

                                        <div style={{ fontFamily: "monospace", fontSize: "30px", paddingTop: "30px"}}>
                                            
                                        {user.username}

                                        </div>
                                    </div>
                                {/* </Segment> */}
                            {/* <Segment.Group vertical> */}
                                {/* <Segment> */}

                                {/* </Segment> */}
                        
                            {/* </Segment.Group> */}
                


                </div>

                 }

            </div>


        </div>


        )
    }

}

export default UserProfile










