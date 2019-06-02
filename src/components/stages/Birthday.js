import StageComponent from "./StageComponent";
import React from "react";
import StageContainer from "../StageContainer";
import TypedText from "../TypedText";
import Container from "../Container";
import melodyBirthdayVideo from "../../img/melody_birthday.mp4";
import okanaganGroupImg from "../../img/group_photo.jpg";
import melodyWithStethoscopeImg from "../../img/melody_stethoscope.jpg";
import Loader from "../Loader";
import Video from "../Video";
import GreenButton from "../GreenButton";
import Img from "../Img";

export default class Birthday extends StageComponent {
  constructor(props) {
    props.typedOptions.onStringTyped = (arrayPos, self) => {
      if (arrayPos === 5 && !this.state.isBirthdayVideoPlayed) {
        self.toggle();
        this.setState({
          isTyping: false,
          isImageElementVisible: true,
          isBirthdayVideoPlayed: true
        })
      } else if (arrayPos === 6 && !this.state.isMelodyStethoscopePhotoViewed) {
        self.toggle();
        this.setState({
          isTyping: false,
          isImageElementVisible: true,
          isMelodyStethoscopePhotoViewed: true
        })
      }
    };
    super(props);
    this.state = Object.assign(this.state, {
      isMelodyBirthdayVideoLoaded: false,
      isGroupPhotoLoaded: false,
      isMelodyWithStethoscopePhotoLoaded: false,
      isBirthdayVideoPlayed: false,
      isMelodyStethoscopePhotoViewed: false,
      viewToDisplay: "birthday",
    });
  }

  onButtonClick = (view) => {
    this.hide();
    setTimeout(() => {
      this.setState({
        isStageVisible: true,
        isImageElementVisible: true,
        isBirthdayVideoPlayed: true,
        viewToDisplay: view
      });
      this.typed.toggle();
    }, 1000);
  };

  render() {
    let loader = null;
    let mediaElement = null;
    let buttonElement = null;
    switch (this.state.viewToDisplay) {
      case "birthday":
        loader = <Loader height={640}
                         width={368}
                         isMediaLoaded={this.state.isMelodyBirthdayVideoLoaded}
                         isVisible={this.state.isImageElementVisible}
        />;
        mediaElement = <Video isVisible={this.state.isImageElementVisible}
                              isLoaded={this.state.isMelodyBirthdayVideoLoaded}
                              onCanPlay={() => {
                                this.setState({isMelodyBirthdayVideoLoaded: true})
                              }}
                              controls>
          <source src={melodyBirthdayVideo} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </Video>;
        buttonElement = <GreenButton onClick={() => {
          this.onButtonClick("dreams")
        }}>Started from the bottom...</GreenButton>;
        break;
      case "dreams":
        loader = <Loader height={640}
                         width={333}
                         isMediaLoaded={this.state.isMelodyWithStethoscopePhotoLoaded}
                         isVisible={this.state.isImageElementVisible}/>;
        mediaElement = <Img src={melodyWithStethoscopeImg}
                            onLoad={() => {
                              this.setState({isMelodyWithStethoscopePhotoLoaded: true})
                            }}
                            isVisible={this.state.isImageElementVisible}
                            isLoaded={this.state.isMelodyWithStethoscopePhotoLoaded}/>;
        buttonElement = <GreenButton onClick={() => {
          this.onButtonClick("group")
        }}>...now we here!</GreenButton>;
        break;
      case "group":
        loader = <Loader height={450}
                         width={600}
                         isMediaLoaded={this.state.isGroupPhotoLoaded}
                         isVisible={this.state.isImageElementVisible}/>;
        mediaElement = <Img src={okanaganGroupImg}
                            onLoad={() => {
                              this.setState({isGroupPhotoLoaded: true})
                            }}
                            isVisible={this.state.isImageElementVisible}
                            isLoaded={this.state.isGroupPhotoLoaded}/>;
        buttonElement = <GreenButton onClick={this.onCorrectButtonClick}>Friends forever!</GreenButton>;
        break;
    }
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        {loader}
        {mediaElement}
        <Container visible={!this.state.isTyping}>
          {buttonElement}
        </Container>
      </StageContainer>
    );
  }
}