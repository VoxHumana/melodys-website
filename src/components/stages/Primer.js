import React from 'react';
import StageContainer from '../StageContainer';
import ButtonsContainer from '../Container';
import StageComponent from "./StageComponent";
import GreenButton from "../GreenButton";
import TypedText from "../TypedText";

export default class Primer extends StageComponent {
  render() {
    return(
      <StageContainer
        isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer visible={!this.state.isTyping}>
          <GreenButton
            onClick={this.onCorrectButtonClick}>
            Yes
          </GreenButton>
        </ButtonsContainer>
      </StageContainer>
    )
  }
}