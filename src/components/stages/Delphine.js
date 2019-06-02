import React from 'react';
import Container from '../Container';
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
import Loader from "../Loader";

export default class Delphine extends StageComponent {
  constructor(props) {
    super(props);
    this.state.isDelphineKaraokeVideoLoaded = false;
    this.state.isDelphineScreamLoaded = false;
    this.state.isDelphineGeishaKissLoaded = false;
  }
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
            <Loader height={540}
                    width={960}
                    isMediaLoaded={this.state.isDelphineKaraokeVideoLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Video isVisible={this.state.isImageElementVisible}
                   isLoaded={this.state.isDelphineKaraokeVideoLoaded}
                   onCanPlay={() => {
                     this.setState({isDelphineKaraokeVideoLoaded: true})
                   }}
                   controls>
              <source src={delphineKaraoke} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </Video>
            <Container
              visible={!this.state.isTyping}>
              <GreenButton onClick={this.onFromageButtonClick}>Omelette du
                fromage!</GreenButton>
              <OrangeButton onClick={this.onNonButtonClick}>Non!</OrangeButton>
            </Container>
          </StageContainer>);
      else
        return (
          <StageContainer isStageVisible={this.state.isStageVisible}>
            <TypedText/>
            <Loader height={252}
                    width={252}
                    isMediaLoaded={this.state.isDelphineGeishaKissLoaded}
                    isVisible={this.state.isImageElementVisible}
            />
            <Img src={delphineGeishaKiss}
                 onLoad={() => {
                   this.setState({isDelphineGeishaKissLoaded: true})
                 }}
                 isVisible={this.state.isImageElementVisible}
                 isLoaded={this.state.isDelphineGeishaKissLoaded}
            />
            <Container
              visible={true}>
              <GreenButton onClick={this.onCorrectButtonClick}>Tabernac!</GreenButton>
            </Container>
          </StageContainer>
        );
    } else {
      return (
        <StageContainer isStageVisible={this.state.isStageVisible}>
          <TypedText/>
          <Loader height={252}
                  width={252}
                  isMediaLoaded={this.state.isDelphineScreamLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={delphineScream}
               onLoad={() => {
                 this.setState({isDelphineScreamLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isDelphineScreamLoaded}
          />
          <Container
            visible={true}>
            <OrangeButton onClick={this.onSacreBleuButtonClick}>Sacré bleu!</OrangeButton>
          </Container>
        </StageContainer>
      )
    }

  }
}