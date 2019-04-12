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
import Loader from "../Loader";

export default class Mona extends StageComponent {
  constructor(props) {
    super(props);
    this.state.isMonaGradImageLoaded = false;
    this.state.isOnePunchManGifLoaded = false;
    this.state.isSimbaImageLoaded = false;
    this.state.isMonaDrinkingWineVideoLoaded = false;
  }

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
            <Loader height={612}
                    width={550}
                    isMediaLoaded={this.state.isMonaGradImageLoaded}
            />
            <Img src={monaGradImg}
                 onLoad={() => {
                   this.setState({isMonaGradImageLoaded: true})
                 }}
                 isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isMonaGradImageLoaded}
            />
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
            <Loader height={292}
                    width={512}
                    isMediaLoaded={this.state.isOnePunchManGifLoaded}
            />
            <Img src={onePunchManGif}
                 onLoad={() => {
                   this.setState({isOnePunchManGifLoaded: true})
                 }}
                 isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isOnePunchManGifLoaded}
            />
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.returnToDefaultView}>It's true! Waan punnnch!</GreenButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Simba":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={446}
                    width={631}
                    isMediaLoaded={this.state.isSimbaImageLoaded}
            />
            <Img src={simbaImg}
                 onLoad={() => {
                   this.setState({isSimbaImageLoaded: true})
                 }}
                 isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isSimbaImageLoaded}
            />
            <ButtonsContainer visible={!this.state.isTyping}>
              <OrangeButton onClick={this.returnToDefaultView}>She does! Meow!</OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Wine":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={337.5}
                    width={600}
                    isMediaLoaded={this.state.isMonaDrinkingWineVideoLoaded}
            />
            <Video isVisible={this.state.isImageElementVisible}
                   isLoaded={this.state.isMonaDrinkingWineVideoLoaded}
                   onCanPlay={() => {
                     this.setState({isMonaDrinkingWineVideoLoaded: true})
                   }}
                   controls>
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