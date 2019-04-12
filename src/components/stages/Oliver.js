import StageComponent from "./StageComponent";
import React from "react";
import TypedText from "../TypedText";
import StageContainer from "../StageContainer";
import ButtonsContainer from "../ButtonsContainer";

export default class Oliver extends StageComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer visible={!this.state.isTyping}>
        </ButtonsContainer>
      </StageContainer>
    );
  }
}