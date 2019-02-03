import React from 'react';
import StageContainer from '../StageContainer';
import ButtonsContainer from "../ButtonsContainer";
import styled from "styled-components";
import Button from "../Button";
import StageComponent from "./StageComponent";

const WhatButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const IsHeWhiteButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

export default class DoYouWipe extends StageComponent {
  onButtonClick = () => {
    this.setState({
      isStageVisible: false
    });
    setTimeout(this.props.onStageComplete, 1000);
  };

  render() {
    return(
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <div>
          <span ref={(ele) => {
            this.textElement = ele;
          }}/>
        </div>
        <ButtonsContainer
          visible={!this.state.isTyping}>>
          <WhatButton onClick={this.onButtonClick}>What?</WhatButton>
          <IsHeWhiteButton onClick={this.onButtonClick}>Is he white?</IsHeWhiteButton>
        </ButtonsContainer>
      </StageContainer>
    )
  }
}