import React from 'react';
import StageContainer from '../StageContainer';
import ButtonsContainer from '../ButtonsContainer';
import StageComponent from "./StageComponent";
import TypedText from "../TypedText";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";

export default class Welcome extends StageComponent {
  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer
          visible={!this.state.isTyping}>
          <GreenButton onClick={this.onCorrectButtonClick}>YES</GreenButton>
          <OrangeButton onClick={this.onCorrectButtonClick}>OF COURSE</OrangeButton>
        </ButtonsContainer>
      </StageContainer>
    );
  }
}