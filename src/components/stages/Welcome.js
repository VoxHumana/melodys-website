import React from 'react';
import styled from 'styled-components';
import StageContainer from '../StageContainer';
import ButtonsContainer from '../ButtonsContainer';
import Button from "../Button";
import StageComponent from "./StageComponent";

const YesButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const OfCourseButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

export default class Welcome extends StageComponent {
  onButtonClick = () => {
    this.setState({
      isStageVisible: false
    });
    setTimeout(this.props.onStageComplete, 1000);
  };

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <div>
          <span ref={(ele) => {
            this.textElement = ele;
          }}/>
        </div>
        <ButtonsContainer
          visible={!this.state.isTyping}>
          <YesButton onClick={this.onButtonClick}>YES</YesButton>
          <OfCourseButton onClick={this.onButtonClick}>OF COURSE</OfCourseButton>
        </ButtonsContainer>
      </StageContainer>
    );
  }
}