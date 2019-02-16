import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import StageContainer from "../StageContainer";
import styled from "styled-components";
import Button from "../Button";
import Video from "../Video";
import StageComponent from "./StageComponent";

const BraceYourselfImg = styled.img`
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

const ShawnButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const SeanButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

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
    let typedText =
      <div>
        <span ref={(ele) => {
          this.textElement = ele;
        }}/>
      </div>;
    if (this.state.winterIsComing == null || this.state.winterIsComing === false) {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          {typedText}
          <Video isVisible={this.state.isImageElementVisible} controls>
            <source src="./img/shawn_let_it_go.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.
          </Video>
          <ButtonsContainer
            visible={!this.state.isTyping}>
            <ShawnButton onClick={this.onCorrectButtonClick}>Shawn He</ShawnButton>
            <SeanButton onClick={this.onSeanButtonClick}>Sean Bean</SeanButton>
          </ButtonsContainer>
        </StageContainer>
      );
    } else {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          {typedText}
          <BraceYourselfImg src="./img/brace_yourself.jpg"
                            isVisible={this.state.isImageElementVisible}/>
          <ButtonsContainer
            visible={true}>
            <SeanButton onClick={this.winterIsComing}>Winter is coming</SeanButton>
          </ButtonsContainer>
        </StageContainer>
      );
    }
  }
}