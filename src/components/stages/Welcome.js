import React from 'react';
import StageContainer from '../StageContainer';
import Container from '../Container';
import StageComponent from "./StageComponent";
import TypedText from "../TypedText";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";

export default class Welcome extends StageComponent {
  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <Container
          visible={!this.state.isTyping}>
          <GreenButton onClick={this.onCorrectButtonClick}>YES</GreenButton>
          <OrangeButton onClick={this.onCorrectButtonClick}>OF COURSE</OrangeButton>
        </Container>
      </StageContainer>
    );
  }
}