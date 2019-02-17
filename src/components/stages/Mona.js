import StageComponent from "./StageComponent";
import React from "react";
import StageContainer from "../StageContainer";
import TypedText from "../TypedText";
import Img from "../Img";
import ButtonsContainer from "../ButtonsContainer";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import BlueButton from "../BlueButton";
import Video from "../Video";
import monaGradImg from '../../img/mona_graduation.jpg';
import onePunchManGif from '../../img/one_punch_man.gif';
import simbaImg from '../../img/simba.jpg';
import monaDrinkingWine from '../../img/mona_tries_wine.mp4';

export default class Mona extends StageComponent {
  onBlackBeltButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: "BlackBelt",
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000)
  };

  onSimbaButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: "Simba",
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000)
  };

  onWineButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: "Wine",
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000)
  };

  render() {
    switch (this.state.viewToDisplay) {
      case null:
      case undefined:
      case "Default":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Img src={monaGradImg}
                 isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.onBlackBeltButtonClick}>She has a black belt in Taekwondo</GreenButton>
              <OrangeButton onClick={this.onSimbaButtonClick}>She has a cat called Simba</OrangeButton>
              <BlueButton onClick={this.onWineButtonClick}>She loves wine</BlueButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "BlackBelt":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Img src={onePunchManGif}
                 isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.returnToDefaultView}>It's true! Waan punnnch!</GreenButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Simba":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Img src={simbaImg}
                 isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <OrangeButton onClick={this.returnToDefaultView}>She does! Meow!</OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Wine":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Video isVisible={this.state.isImageElementVisible} controls>
              <source src={monaDrinkingWine} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <ButtonsContainer visible={!this.state.isTyping}>
              <BlueButton onClick={this.onCorrectButtonClick}>Rotten grape juice, ick!</BlueButton>
            </ButtonsContainer>
          </StageContainer>
        );
    }
  }
}