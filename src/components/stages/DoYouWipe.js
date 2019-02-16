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
          <WhatButton onClick={this.onCorrectButtonClick}>What?</WhatButton>
          <IsHeWhiteButton onClick={this.onCorrectButtonClick}>Is he white?</IsHeWhiteButton>
        </ButtonsContainer>
      </StageContainer>
    )
  }
}