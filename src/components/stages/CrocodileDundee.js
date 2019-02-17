import StageComponent from "./StageComponent";
import React from "react";
import StageContainer from "../StageContainer";
import TypedText from "../TypedText";
import Img from "../Img";
import ButtonsContainer from "../ButtonsContainer";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import bowieKnifeImg from "../../img/bowie_knife.jpg";
import switchbladeImg from "../../img/switchblade.jpg";
import styled from "styled-components";

export default class CrocodileDundee extends StageComponent {
  render() {
    let OptionsContainer = styled.div`
      opacity: ${(props) => props.isVisible ? 1 : 0};
      transition: 1s;
      display: flex;
      flex-direction: row;
      align-items: center;
    `;

    let OptionContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    let Thumbnail = styled(Img)`
        max-height: 300px;
    `;
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <OptionsContainer isVisible={this.state.isImageElementVisible}>
          <OptionContainer>
            <Thumbnail src={bowieKnifeImg}
                       isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <GreenButton>This one!</GreenButton>
            </ButtonsContainer>
          </OptionContainer>
          <OptionContainer>
            <Thumbnail src={switchbladeImg}
                       isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer visible={!this.state.isTyping}>
              <OrangeButton>That one!</OrangeButton>
            </ButtonsContainer>
          </OptionContainer>
        </OptionsContainer>
      </StageContainer>
    )
  }
}