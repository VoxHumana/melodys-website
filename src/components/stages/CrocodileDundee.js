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
import ContentLoader from 'react-content-loader';
import Loader from "../Loader";

let ClickableThumbnail = styled.img`
        align-self: center;
        border-radius: 4px;
        box-shadow: inset 0 8px 16px 2px rgba(0,0,0,0.2), inset 0 6px 20px 2px rgba(0,0,0,0.19), 0 8px 16px 2px rgba(0,0,0,0.2), 0 6px 20px 2px rgba(0,0,0,0.19);
        margin: 8px;
        max-height: 300px;
        width: auto;
        transition: 1s;
        display: ${props => props.visible ? 'block' : 'none'};
        :active {
          box-shadow: inset 0 2px 4px 2px rgba(0,0,0,0.2), inset 0 1.5px 5px 2px rgba(0,0,0,0.19), 0 2px 4px 2px rgba(0,0,0,0.2), 0 1.5px 5px 2px rgba(0,0,0,0.19);
          text-shadow: 0 4px 4px rgba(0,0,0,0.4);
        }
    `;

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
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton onClick={this.onBowieKnifeClick}>
                {this.state.isBowieImageLoaded ? null :
                  <Loader
                    height={300}
                    width={300}
                  />}
                <ClickableThumbnail src={bowieKnifeImg}
                                    onLoad={() => {
                                      this.setState({isBowieImageLoaded: true})
                                    }}
                                    visible={this.state.isBowieImageLoaded}
                                    alt={'Bowie knife'}/>
              </GreenButton>
              <OrangeButton onClick={this.onSwitchbladeClick}>
                {this.state.isSwitchbladeImageLoaded ? null :
                  <ContentLoader
                    height={300}
                    width={400}
                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#d4d3d3"
                    style={{width: 400, height: 300}}
                  >
                    <rect x="0" y="0" rx="5" ry="5" width="400" height="300"/>
                    <rect x="152" y="98" rx="0" ry="0" width="0" height="0"/>
                  </ContentLoader>}
                <ClickableThumbnail src={switchbladeImg}
                                    onLoad={() => {
                                      this.setState({isSwitchbladeImageLoaded: true})
                                    }}
                                    visible={this.state.isSwitchbladeImageLoaded}
                                    alt={'Switchblade knife'}/>
              </OrangeButton>
            </ButtonsContainer>
          </StageContainer>
        );
      case "Bowie":
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            {this.state.isThatsAKnifeGifLoaded ? null :
              <ContentLoader
                height={240}
                width={600}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#d4d3d3"
                style={{width: 600, height: 240}}
              >
                <rect x="0" y="0" rx="5" ry="5" width="600" height="240"/>
                <rect x="152" y="98" rx="0" ry="0" width="0" height="0"/>
              </ContentLoader>}
            <Img src={thatsAKnifeGif}
                 onLoad={() => {
                   this.setState({isThatsAKnifeGifLoaded: true})
                 }}
                 display={this.state.isThatsAKnifeGifLoaded}
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
            {this.state.isThatsNotAKnifeGifLoaded ? null :
              <Loader
                height={260}
                width={612}
              />}
            <Img src={thatsNotAKnifeGif}
                 onLoad={() => {
                   this.setState({isThatsNotAKnifeGifLoaded: true})
                 }}
                 display={this.state.isThatsNotAKnifeGifLoaded}
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