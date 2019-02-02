import React, {Component} from 'react';
import Typed from "../../../node_modules/typed.js/lib/typed";
import StageContainer from '../StageContainer';
import {ButtonsContainer} from "../ButtonsContainer";
import styled from "styled-components";
import Button from "../Button";

const WhatButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const IsHeWhiteButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

export default class DoYouWipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true,
      isStageVisible: false
    }
  }

  componentDidMount() {
    setTimeout(this.reveal, 10);
  }

  reveal = () => {
    this.props.typedOptions.omComplete = () => {
      this.setState({
        isTyping: false
      })
    };
    this.typed = new Typed(this.textElement, this.props.typedOptions);
    this.typed.start();
    this.setState({
      isStageVisible: true
    });
  };

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