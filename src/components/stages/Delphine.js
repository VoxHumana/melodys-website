import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import StageContainer from "../StageContainer";
import styled from "styled-components";
import Button from "../Button";
import StageComponent from "./StageComponent";
import Video from "../Video";

const DelphineScreamImg = styled.img`
  align-self: center;
  border: 6px solid #ff90ca;
  border-radius: 4px;
  box-shadow: inset 0 8px 12px 6px rgba(0,0,0,0.2), inset 0 6px 16px 6px rgba(0,0,0,0.19), 0 8px 12px 6px rgba(0,0,0,0.2), 0 6px 16px 6px rgba(0,0,0,0.19);
  margin: 8px;
  max-height: 600px;
  opacity: ${(props) => props.isVisible ? 1 : 0};
  transition: 1s;
  width: auto;
`;

const OmeletteDuFromageButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const NonButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

export default class Delphine extends StageComponent {
  onFromageButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        sacreBleu: false,
        omeletteDuFromage: true,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  onNonButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        sacreBleu: true,
        omeletteDuFromage: false,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  onSacreBleuButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        sacreBleu: false,
        omeletteDuFromage: false,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  render() {
    let typedText =
      <div>
        <span ref={(ele) => {
          this.textElement = ele;
        }}/>
      </div>;
    if (this.state.sacreBleu == null || this.state.sacreBleu === false) {
      if (this.state.omeletteDuFromage == null || this.state.omeletteDuFromage === false)
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            {typedText}
            <Video isVisible={this.state.isImageElementVisible} controls>
              <source src="./img/delphine_karaoke.mp4" type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <ButtonsContainer
              visible={!this.state.isTyping}>
              <OmeletteDuFromageButton onClick={this.onFromageButtonClick}>Omelette du
                fromage!</OmeletteDuFromageButton>
              <NonButton onClick={this.onNonButtonClick}>Non!</NonButton>
            </ButtonsContainer>
          </StageContainer>);
      else
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            {typedText}
            <DelphineScreamImg src="./img/delphine_geisha_kiss.gif"
                               isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer
              visible={true}>
              <OmeletteDuFromageButton onClick={this.onCorrectButtonClick}>Tabernac!</OmeletteDuFromageButton>
            </ButtonsContainer>
          </StageContainer>
        );
    } else {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          {typedText}
          <DelphineScreamImg src="./img/delphine_the_scream.gif"
                             isVisible={this.state.isImageElementVisible}/>
          <ButtonsContainer
            visible={true}>
            <NonButton onClick={this.onSacreBleuButtonClick}>Sacré bleu!</NonButton>
          </ButtonsContainer>
        </StageContainer>
      )
    }

  }
}