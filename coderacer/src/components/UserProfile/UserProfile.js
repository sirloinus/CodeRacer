import React from 'react'
import { Button } from 'semantic-ui-react'
import Webcam from "react-webcam";
import './UserProfile.css'

class UserProfile extends React.Component {

    state = {
        user: this.props.user,
        picture_taken: false,
        localPic: '',
        elapsed: null
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


    takingNewPic = () => {
        this.setState({ takeNewPic: true })
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
        this.setState({ takeNewPic: false })
    }

    tick() {
        this.setState((prevState) => ({
            elapsed: prevState.elapsed - 1
        }))
    }


    countDown = () => {
        if(this.state.elapsed > 1){
            this.tick()
        } else {
            clearInterval(this.interval)
            this.setState({ elapsed: null })
            this.capture()
        }
    }

    componentWillUnmount(){
        console.log("getting new user")
        this.props.fetchUser(this.props.user_id)
    }

    takePicWithCountdown = () => {
        this.setState({ elapsed: 3 })
        this.interval = setInterval(() => this.countDown(), 1000)
    }

    

    render(){

        const { user, localPic, elapsed, takeNewPic } = this.state

        return(

        <div className="webcam">

        {
            
            takeNewPic
            // has the user pressed the button to take a new picture? --> 
            // if so render the webcam so the user can take a new pic

            ?   <div className="pic-button">
                    <Webcam
                    style={{ borderRadius: "50%" }}
                    audio={false}
                    height={450}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={450}
                    />
                    { <Button onClick={this.takePicWithCountdown}>Capture photo</Button>}
                    <h1 className="centered">{elapsed}</h1>
                 </div>

            :   this.state.localPic
            // is there a local pic (i.e. one that has just been taken?) --> if so render this

                ?   <div>

                            <img objectFit="contain" src={localPic} alt="nothing" height={450} width={450} style={{ borderRadius: "50%" }}/>

                    </div>
                :   user.pic_url 
                // if no local pic, is there a pic that the user obj is associated with (in the back-end) --> if so render this

                    ?   <div>

                            <img objectFit="contain" src={user.pic_url} alt="nothing" height={450} width={450} style={{ borderRadius: "50%" }}/>

                        </div>

                // if there is no local/database pic, render the webcam so the user can take one
                    :   <div className="pic-button">
                            <Webcam
                            style={{ borderRadius: "50%" }}
                            audio={false}
                            height={450}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={450}
                            />
                            { <Button onClick={this.takePicWithCountdown}>Capture photo</Button>}
                            <h1 className="centered">{elapsed}</h1>
                        </div>

        }

            <div className="pic-button">
                {
                    // does the user already have a local and/or database pic? --> 
                    // if so render a different button asking if they would like to take a new pic
                    !takeNewPic && (user.pic_url || localPic) && <Button onClick={this.takingNewPic}>Take new picture</Button>
                }
            </div>
            <div>
                <h1 style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "20px"
                }}>{user.username}</h1>
            </div>

        </div>

        )
    }

}

export default UserProfile










