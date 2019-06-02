import StageComponent from "./StageComponent";
import React from "react";
import StageContainer from "../StageContainer";
import TypedText from "../TypedText";
import Container from "../Container";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import bowieKnifeImg from "../../img/bowie_knife.jpg";
import switchbladeImg from "../../img/switchblade.jpg";
import thatsAKnifeVideo from "../../img/thats_a_knife.mp4"
import thatsNotAKnifeVideo from "../../img/thats_not_a_knife.mp4";
import Loader from "../Loader";
import Video from "../Video";
import ClickableThumbnail from "../ClickableThumbnail";

export default class CrocodileDundee extends StageComponent {
  constructor(props) {
    super(props);
    this.state.isBowieImageLoaded = false;
    this.state.isSwitchbladeImageLoaded = false;
    this.state.isThatsAKnifeGifLoaded = false;
    this.state.isThatsNotAKnifeGifLoaded = false;
  }

  onBowieKnifeClick = () => {
    this.showView("Bowie");
  };

  onSwitchbladeClick = () => {
    this.showView("Switchblade");
  };

  render() {
    switch (this.state.viewToDisplay) {
      case null:
      case undefined:
      case "Default":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Container visible={!this.state.isTyping}>
              <GreenButton onClick={this.onBowieKnifeClick}>
                <Loader height={300}
                        width={300}
                        isMediaLoaded={this.state.isBowieImageLoaded}
                        isVisible={this.state.isImageElementVisible}
                />
                <ClickableThumbnail src={bowieKnifeImg}
                                    onLoad={() => {
                                      this.setState({isBowieImageLoaded: true})
                                    }}
                                    visible={this.state.isBowieImageLoaded}
                                    alt={'Bowie knife'}/>
              </GreenButton>
              <OrangeButton onClick={this.onSwitchbladeClick}>
                <Loader height={300}
                        width={400}
                        isMediaLoaded={this.state.isSwitchbladeImageLoaded}
                        isVisible={this.state.isImageElementVisible}
                />
                <ClickableThumbnail src={switchbladeImg}
                                    onLoad={() => {
                                      this.setState({isSwitchbladeImageLoaded: true})
                                    }}
                                    visible={this.state.isSwitchbladeImageLoaded}
                                    alt={'Switchblade knife'}/>
              </OrangeButton>
            </Container>
          </StageContainer>
        );
      case "Bowie":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={260}
                    width={612}
                    isMediaLoaded={this.state.isThatsAKnifeGifLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Video isVisible={this.state.isImageElementVisible}
                   isLoaded={this.state.isThatsAKnifeGifLoaded}
                   onCanPlay={() => {
                     this.setState({isThatsAKnifeGifLoaded: true})
                   }}
                   autoPlay
                   loop
                   muted
                   playsInLine>
              <source src={thatsAKnifeVideo} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <Container visible={!this.state.isTyping}>
              <GreenButton onClick={this.onCorrectButtonClick}>
                That's a knife!
              </GreenButton>
            </Container>
          </StageContainer>
        );
      case "Switchblade":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={260}
                    width={612}
                    isMediaLoaded={this.state.isThatsNotAKnifeGifLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Video isVisible={this.state.isImageElementVisible}
                   isLoaded={this.state.isThatsNotAKnifeGifLoaded}
                   onCanPlay={() => {
                     this.setState({isThatsNotAKnifeGifLoaded: true})
                   }}
                   autoPlay
                   loop
                   muted
                   playsInLine>
              <source src={thatsNotAKnifeVideo} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <Container visible={!this.state.isTyping}>
              <OrangeButton onClick={this.returnToDefaultView}>
                That's not a knife...
              </OrangeButton>
            </Container>
          </StageContainer>
        )
    }
  }
}