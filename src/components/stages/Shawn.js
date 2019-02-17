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

export default class Shawn extends StageComponent {
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
          <Video isVisible={this.state.isImageElementVisible} controls>
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
          <Img src={braceYourself}
                            isVisible={this.state.isImageElementVisible}/>
          <ButtonsContainer
            visible={true}>
            <GreenButton onClick={this.winterIsComing}>Winter is coming</GreenButton>
          </ButtonsContainer>
        </StageContainer>
      );
    }
  }
}