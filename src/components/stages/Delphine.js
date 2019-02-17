import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import StageContainer from "../StageContainer";
import StageComponent from "./StageComponent";
import Video from "../Video";
import GreenButton from "../GreenButton";
import OrangeButton from "../OrangeButton";
import TypedText from "../TypedText";
import Img from "../Img";
import delphineKaraoke from '../../img/delphine_karaoke.mp4';
import delphineScream from '../../img/delphine_the_scream.gif';
import delphineGeishaKiss from '../../img/delphine_geisha_kiss.gif';

export default class Delphine extends StageComponent {
  onFromageButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        sacreBleu: false,
        omeletteDuFromage: true,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  onNonButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        sacreBleu: true,
        omeletteDuFromage: false,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  onSacreBleuButtonClick = () => {
    this.hide();
    setTimeout(() => {
      this.setState({
        sacreBleu: false,
        omeletteDuFromage: false,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000);
  };

  render() {
    if (this.state.sacreBleu == null || this.state.sacreBleu === false) {
      if (this.state.omeletteDuFromage == null || this.state.omeletteDuFromage === false)
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Video isVisible={this.state.isImageElementVisible} controls>
              <source src={delphineKaraoke} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <ButtonsContainer
              visible={!this.state.isTyping}>
              <GreenButton onClick={this.onFromageButtonClick}>Omelette du
                fromage!</GreenButton>
              <OrangeButton onClick={this.onNonButtonClick}>Non!</OrangeButton>
            </ButtonsContainer>
          </StageContainer>);
      else
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Img src={delphineGeishaKiss}
                               isVisible={this.state.isImageElementVisible}/>
            <ButtonsContainer
              visible={true}>
              <GreenButton onClick={this.onCorrectButtonClick}>Tabernac!</GreenButton>
            </ButtonsContainer>
          </StageContainer>
        );
    } else {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          <TypedText/>
          <Img src={delphineScream}
                             isVisible={this.state.isImageElementVisible}/>
          <ButtonsContainer
            visible={true}>
            <OrangeButton onClick={this.onSacreBleuButtonClick}>Sacré bleu!</OrangeButton>
          </ButtonsContainer>
        </StageContainer>
      )
    }

  }
}