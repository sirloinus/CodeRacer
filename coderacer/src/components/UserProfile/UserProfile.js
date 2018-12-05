import React from 'react'
import { Container, Segment, SegmentGroup, Image, Dropdown } from 'semantic-ui-react'
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


    bleh = () => {
        if(this.state.elapsed > 0){
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

    countDown = () => {
        this.setState({ elapsed: 3 })
        this.interval = setInterval(() => this.bleh(), 1000)
    }

    

    render(){

        const { user, localPic, elapsed, takeNewPic } = this.state

        return(

        <div className="webcam">

        {
            takeNewPic

            ?   <div>
                    <Webcam
                    style={{ borderRadius: "50%" }}
                    audio={false}
                    // objectFit={"cover"}
                    height={450}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={450}
                    // videoConstraints={videoConstraints}
                    />
                    { <button onClick={this.countDown}>Capture photo</button>}
                    <h1 className="centered">{elapsed}</h1>
                 </div>

            :   this.state.localPic

                ?   <div>

                            <img objectFit="contain" src={localPic} alt="nothing" height={450} width={450} style={{ borderRadius: "50%" }}/>

                    </div>

                :   user.pic_url 
                    
                    ?   <div>

                            <img objectFit="contain" src={user.pic_url} alt="nothing" height={450} width={450} style={{ borderRadius: "50%" }}/>

                        </div>

                    :   <div>
                            <Webcam
                            style={{ borderRadius: "50%" }}
                            audio={false}
                            // objectFit={"cover"}
                            height={450}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={450}
                            // videoConstraints={videoConstraints}
                            />
                            { <button onClick={this.countDown}>Capture photo</button>}
                            <h1 className="centered">{elapsed}</h1>
                        </div>

        }

            <div>
                {
                    !takeNewPic && (user.pic_url || localPic) && <button onClick={this.takingNewPic}>Take new picture</button>
                }
            </div>

        </div>

        )
    }

}

export default UserProfile










