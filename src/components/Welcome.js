import React, {Component} from 'react';
import Typed from "typed.js";
import styled from 'styled-components';
import StageContainer from './StageContainer';
import ButtonsContainer from './ButtonsContainer';
import Button from "./Button";

const YesButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const OfCourseButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true,
      isStageVisible: true
    };
  }

  componentDidMount() {
    this.props.typedOptions.onComplete = () => {
      this.setState({
        isTyping: false
      })
    };
    this.typed = new Typed(this.textElement, this.props.typedOptions);
    this.typed.start();
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

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