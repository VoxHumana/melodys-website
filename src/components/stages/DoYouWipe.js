import React from 'react';
import StageContainer from '../StageContainer';
import ButtonsContainer from "../ButtonsContainer";
import StageComponent from "./StageComponent";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import TypedText from "../TypedText";

export default class DoYouWipe extends StageComponent {
  render() {
    return(
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer
          visible={!this.state.isTyping}>
          <GreenButton onClick={this.onCorrectButtonClick}>What?</GreenButton>
          <OrangeButton onClick={this.onCorrectButtonClick}>Is he white?</OrangeButton>
        </ButtonsContainer>
      </StageContainer>
    )
  }
}