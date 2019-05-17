import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import StageContainer from "../StageContainer";
import Video from "../Video";
import StageComponent from "./StageComponent";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import TypedText from "../TypedText";
import Img from "../Img";
import shawnLetItGo from '../../img/shawn_let_it_go.mp4';
import braceYourself from '../../img/brace_yourself.jpg';
import Loader from "../Loader";

export default class Shawn extends StageComponent {
  constructor(props) {
    super(props);
    this.state.isShawnVideoLoaded = false;
    this.state.isWinterIsComingImageLoaded = false;
  }
  onSeanButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        winterIsComing: true,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  winterIsComing = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        winterIsComing: false,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  render() {
    if (this.state.winterIsComing == null || this.state.winterIsComing === false) {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          <TypedText/>
          <Loader height={600}
                  width={337.5}
                  isMediaLoaded={this.state.isShawnVideoLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Video isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isShawnVideoLoaded}
                 onCanPlay={() => {
                   this.setState({isShawnVideoLoaded: true})
                 }}
                 controls>
            <source src={shawnLetItGo} type="video/mp4"/>
            Your browser does not support HTML5 video.
          </Video>
          <ButtonsContainer
            visible={!this.state.isTyping}>
            <GreenButton onClick={this.onCorrectButtonClick}>Shawn He</GreenButton>
            <OrangeButton onClick={this.onSeanButtonClick}>Sean Bean</OrangeButton>
          </ButtonsContainer>
        </StageContainer>
      );
    } else {
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
          <ButtonsContainer
            visible={true}>
            <GreenButton onClick={this.winterIsComing}>Winter is coming</GreenButton>
          </ButtonsContainer>
        </StageContainer>
      );
    }
  }
}