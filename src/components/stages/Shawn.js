import React from 'react';
import Container from '../Container';
import StageContainer from "../StageContainer";
import Video from "../Video";
import StageComponent from "./StageComponent";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import TypedText from "../TypedText";
import Img from "../Img";
import shawnLetItGo from '../../img/shawn_let_it_go.mp4';
import braceYourself from '../../img/brace_yourself.jpg';
import shawnGoodAtEverything from "../../img/shawn_good_at_everything.mp4";
import Loader from "../Loader";

export default class Shawn extends StageComponent {
  constructor(props) {
    super(props);
    Object.assign(this.state, {
      isShawnLetItGoVideoLoaded: false,
      isShawnGoodAtEverythingVideoLoaded: true,
      isWinterIsComingImageLoaded: false,
      viewToDisplay: "default"
    });
  }
  onSeanButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: "winterIsComing",
        isStageVisible: true,
        isImageElementVisible: true,
        isShawnLetItGoVideoLoaded: false
      })
    }, 1000);
  };

  onShawnButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: "goodAtEverything",
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  winterIsComing = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: "default",
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  render() {
    if (this.state.viewToDisplay === "winterIsComing") {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          <TypedText/>
          <Loader height={600}
                  width={436}
                  isMediaLoaded={this.state.isWinterIsComingImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={braceYourself}
               onLoad={() => {
                 this.setState({isWinterIsComingImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isWinterIsComingImageLoaded}/>
          <Container
            visible={true}>
            <GreenButton onClick={this.winterIsComing}>Winter is coming</GreenButton>
          </Container>
        </StageContainer>
      );
    } else if (this.state.viewToDisplay === "goodAtEverything") {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          <TypedText/>
          <Video isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isShawnGoodAtEverythingVideoLoaded}
                 onCanPlay={() => {
                   this.setState({isShawnGoodAtEverythingVideoLoaded: true})
                 }}
                 controls>
            <source src={shawnGoodAtEverything} type="video/mp4"/>
            Your browser does not support HTML5 video.
          </Video>
          <Container
            visible={true}>
            <GreenButton onClick={this.onCorrectButtonClick}>A humble and rising star</GreenButton>
          </Container>
        </StageContainer>
      )
    } else {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          <TypedText/>
          <Loader height={600}
                  width={337.5}
                  isMediaLoaded={this.state.isShawnLetItGoVideoLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Video isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isShawnLetItGoVideoLoaded}
                 onCanPlay={() => {
                   this.setState({isShawnLetItGoVideoLoaded: true})
                 }}
                 controls>
            <source src={shawnLetItGo} type="video/mp4"/>
            Your browser does not support HTML5 video.
          </Video>
          <Container
            visible={!this.state.isTyping}>
            <GreenButton onClick={this.onShawnButtonClick}>Shawn He</GreenButton>
            <OrangeButton onClick={this.onSeanButtonClick}>Sean Bean</OrangeButton>
          </Container>
        </StageContainer>
      );
    }
  }
}