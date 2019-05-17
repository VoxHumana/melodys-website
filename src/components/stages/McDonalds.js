import StageComponent from "./StageComponent";
import StageContainer from "../StageContainer";
import React from "react";
import TypedText from "../TypedText";
import GreenButton from "../GreenButton";
import BlueButton from "../BlueButton";
import OrangeButton from "../OrangeButton";
import Loader from "../Loader";
import ClickableThumbnail from "../ClickableThumbnail";
import bigMacImg from "../../img/big_mac.png";
import beefWellingtonImg from "../../img/beef_wellington.jpg";
import escargotImg from "../../img/escargot.jpg";
import mcdonaldImg from "../../img/mcdonald.jpg";
import idiotSandwichVideo from "../../img/idiot_sandwich.mp4";
import holyGrailFrenchmenVideo from "../../img/holy_grail_frenchmen.mp4";
import ButtonsContainer from "../ButtonsContainer";
import Video from "../Video";
import Img from "../Img";

export default class McDonalds extends StageComponent {
  constructor(props) {
    super(props);
    this.state.isBigMacImageLoaded = false;
    this.state.isBeefWellingtonImageLoaded = false;
    this.state.isEscargotImageLoaded = false;
    this.state.isMcdonaldVideoLoaded = false;
    this.state.isIdiotSandwichVideoLoaded = false;
    this.state.isHolyGrailFrenchmenVideoLoaded = false;
  }

  onBigMacClick = () => {
    this.showView("BigMac");
  };

  onBeefWellingtonClick = () => {
    this.showView("BeefWellington");
  };

  onEscargotClick = () => {
    this.showView("Escargot");
  };

  render() {
    switch (this.state.viewToDisplay) {
      case null:
      case undefined:
      case "Default":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.onBigMacClick}>
                <Loader height={267}
                        width={267}
                        isMediaLoaded={this.state.isBigMacImageLoaded}
                        isVisible={this.state.isImageElementVisible}
                />
                <ClickableThumbnail src={bigMacImg}
                                    onLoad={() => {
                                      this.setState({isBigMacImageLoaded: true})
                                    }}
                                    visible={this.state.isBigMacImageLoaded}
                                    alt={"McDonald's Big Mac"}/>
              </GreenButton>
              <BlueButton onClick={this.onBeefWellingtonClick}>
                <Loader height={267}
                        width={300}
                        isMediaLoaded={this.state.isBeefWellingtonImageLoaded}
                        isVisible={this.state.isImageElementVisible}
                />
                <ClickableThumbnail src={beefWellingtonImg}
                                    onLoad={() => {
                                      this.setState({isBeefWellingtonImageLoaded: true})
                                    }}
                                    visible={this.state.isBeefWellingtonImageLoaded}
                                    alt={"Beef wellington"}/>
              </BlueButton>
              <OrangeButton onClick={this.onEscargotClick}>
                <Loader height={267}
                        width={300}
                        isMediaLoaded={this.state.isEscargotImageLoaded}
                        isVisible={this.state.isImageElementVisible}
                />
                <ClickableThumbnail src={escargotImg}
                                    onLoad={() => {
                                      this.setState({isEscargotImageLoaded: true})
                                    }}
                                    visible={this.state.isEscargotImageLoaded}
                                    alt={"Escargots"}/>
              </OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "BigMac":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={414}
                    width={620}
                    isMediaLoaded={this.state.isMcdonaldVideoLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Img src={mcdonaldImg}
                 onLoad={() => {
                   this.setState({isMcdonaldVideoLoaded: true})
                 }}
                 isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isMcdonaldVideoLoaded}
            />
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.onCorrectButtonClick}>
                I'm lovin' it!
              </GreenButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "BeefWellington":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={280}
                    width={500}
                    isMediaLoaded={this.state.isIdiotSandwichVideoLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Video isVisible={this.state.isImageElementVisible}
                   isLoaded={this.state.isIdiotSandwichVideoLoaded}
                   onCanPlay={() => {
                     this.setState({isIdiotSandwichVideoLoaded: true})
                   }}
                   autoPlay
                   loop
                   muted
                   playsInline>
              <source src={idiotSandwichVideo} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <ButtonsContainer visible={!this.state.isTyping}>
              <BlueButton onClick={this.returnToDefaultView}>
                You're an idiot sandwich!
              </BlueButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Escargot":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={384}
                    width={718}
                    isMediaLoaded={this.state.isHolyGrailFrenchmenVideoLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Video isVisible={this.state.isImageElementVisible}
                   isLoaded={this.state.isHolyGrailFrenchmenVideoLoaded}
                   onCanPlay={() => {
                     this.setState({isHolyGrailFrenchmenVideoLoaded: true})
                   }}
                   autoPlay
                   loop
                   muted
                   playsInLine>
              <source src={holyGrailFrenchmenVideo} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <ButtonsContainer visible={!this.state.isTyping}>
              <OrangeButton onClick={this.returnToDefaultView}>
                I fart in your general direction!
              </OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        );
    }
  }
}