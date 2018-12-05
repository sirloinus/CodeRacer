import React from 'react'
import { Container, Segment, SegmentGroup, Image, Dropdown } from 'semantic-ui-react'
import Webcam from "react-webcam";

class UserProfile extends React.Component {

    state = {
        user: null
    }

    fetchUser = (user_id) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}`)
        .then(resp => resp.json())
        // .then(user => console.log(user))
        .then(user => this.setState({ user }))
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

    componentDidMount(){
        this.fetchUser(this.props.user_id)
    }



    setRef = webcam => {
        this.webcam = webcam;
    }
 
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc)
        this.postImage(this.props.user_id, imageSrc)
     }

    

    render(){

        const { user } = this.state
        const videoConstraints = {
                width: 1280,
                height: 720,
                facingMode: "user"
        }

        return(

        <div>

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



            <div>

                <Container>
                    <SegmentGroup>
                            <Segment.Group horizontal>
                                <Segment>
                                     <img src={user ? user.image_url : null}></img>
                                    </Segment>
                                <Segment.Group vertical>
                                    <Segment>
                                        
                                    NAME

                                    </Segment>
                                    <Segment >
                                            
                                    HIGHER CHARS PER MIN
 
                                    </Segment>
                                    <Segment >
                                        
                                    AVERAGE CHARS PER MIN

                                    </Segment>
                                </Segment.Group>
                      
                            </Segment.Group>
                        <Segment>
                        </Segment>
                    </SegmentGroup>
                </Container>

            </div>



        </div>
        )
    }

}

export default UserProfile










