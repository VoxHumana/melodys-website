import StageComponent from "./StageComponent";
import React from "react";
import StageContainer from "../StageContainer";
import TypedText from "../TypedText";
import ButtonsContainer from "../ButtonsContainer";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import bowieKnifeImg from "../../img/bowie_knife.jpg";
import switchbladeImg from "../../img/switchblade.jpg";
import thatsAKnifeGif from "../../img/thats_a_knife.gif"
import thatsNotAKnifeGif from "../../img/thats_not_a_knife.gif";
import styled from "styled-components";
import Img from "../Img";

export default class CrocodileDundee extends StageComponent {
  onBowieKnifeClick = () => {
    this.showView("Bowie");
  };

  onSwitchbladeClick = () => {
    this.showView("Switchblade");
  };

  render() {
    let ClickableThumbnail = styled.img`
        align-self: center;
        border-radius: 4px;
        box-shadow: inset 0 8px 16px 2px rgba(0,0,0,0.2), inset 0 6px 20px 2px rgba(0,0,0,0.19), 0 8px 16px 2px rgba(0,0,0,0.2), 0 6px 20px 2px rgba(0,0,0,0.19);
        margin: 8px;
        max-height: 300px;
        width: auto;
        transition: 1s;
        :active {
          box-shadow: inset 0 2px 4px 2px rgba(0,0,0,0.2), inset 0 1.5px 5px 2px rgba(0,0,0,0.19), 0 2px 4px 2px rgba(0,0,0,0.2), 0 1.5px 5px 2px rgba(0,0,0,0.19);
          text-shadow: 0 4px 4px rgba(0,0,0,0.4);
        }
    `;

    switch (this.state.viewToDisplay) {
      case null:
      case undefined:
      case "Default":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.onBowieKnifeClick}>
                <ClickableThumbnail src={bowieKnifeImg}
                                    isVisible={this.state.isImageElementVisible}/>
              </GreenButton>
              <OrangeButton onClick={this.onSwitchbladeClick}>
                <ClickableThumbnail src={switchbladeImg}
                                    isVisible={this.state.isImageElementVisible}/>
              </OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Bowie":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Img src={thatsAKnifeGif}
                 isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.onCorrectButtonClick}>
                That's a knife!
              </GreenButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Switchblade":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Img src={thatsNotAKnifeGif}
                 isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <OrangeButton onClick={this.returnToDefaultView}>
                That's not a knife...
              </OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        )
    }

  }
}