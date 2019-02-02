import React, {Component} from 'react';
import Welcome from './stages/Welcome';
import Primer from './stages/Primer'
import Jackie from "./stages/Jackie";
import DoYouWipe from "./stages/DoYouWipe";

export default class Pipeline extends Component {
  constructor(props) {
    super(props);
    const welcomeStageStrings = ["", "G'day Melody!", "Let's put some shrimp on the barbie!", "But first,^1200hmmm^500.^300.^300.", "Are you^300 <strong><i>really</i></strong>^300 Melody?"];
    this.typedOptions = {
      strings: welcomeStageStrings,
      typeSpeed: 60, //TODO: Make this a configurable value
      backSpeed: 60, //TODO: Make this a configurable value
      backDelay: 1500
    };
    const welcomeStageComponent = <Welcome
      typedOptions={this.typedOptions}
      onStageComplete={this.loadPrimerStage}
    />;
    this.state = {
      currentStage: welcomeStageComponent,
    };
  }

  loadPrimerStage = () => {
    this.typedOptions.strings = ["", "Alright", "Let's try a little quiz", "Answer the questions correctly to prove that you're <strong><i>really</i></strong> Melody", "Ready?"];
    const primerStageComponent = <Primer
      typedOptions={this.typedOptions}
      onStageComplete={this.loadJackieStage}
    />;
    this.setState({
      currentStage: primerStageComponent
    });
  };

  loadJackieStage = () => {
    this.typedOptions.strings = ["Select all squares with Jackie"];
    let captchaImage1 = ["/img/cap1/001.png", "/img/cap1/002.png", "/img/cap1/003.png", "/img/cap1/004.png",
      "/img/cap1/005.png", "/img/cap1/006.png", "/img/cap1/007.png", "/img/cap1/008.png",
      "/img/cap1/009.png", "/img/cap1/010.png", "/img/cap1/011.png", "/img/cap1/012.png",
      "/img/cap1/013.png", "/img/cap1/014.png", "/img/cap1/015.png", "/img/cap1/016.png"];

    let captchaImage2 = ["/img/cap2/001.png", "/img/cap2/002.png", "/img/cap2/003.png", "/img/cap2/004.png",
      "/img/cap2/005.png", "/img/cap2/006.png", "/img/cap2/007.png", "/img/cap2/008.png",
      "/img/cap2/009.png", "/img/cap2/010.png", "/img/cap2/011.png", "/img/cap2/012.png",
      "/img/cap2/013.png", "/img/cap2/014.png", "/img/cap2/015.png", "/img/cap2/016.png"];

    let correctIndices =
      [
        [ false, false, false, false,
          false,  true,  true, false,
          false,  true,  true,  true,
          false,  true,  true,  true],
        [ false, false, false, false,
          false, false,  true,  true,
          false,  true,  true,  true,
          false,  true,  true,  true]
      ];
    const jackieStageComponent = <Jackie
      typedOptions={this.typedOptions}
      onStageComplete={this.loadDoYouWipeStage}
      firstImage={captchaImage1}
      secondImage={captchaImage2}
      correctIndices={correctIndices}
    />;
    this.setState({
      currentStage: jackieStageComponent
    });
  };

  loadDoYouWipeStage = () => {
    this.typedOptions.strings = ["Do you wipe?"];

    const wipeStageComponent = <DoYouWipe
      typedOptions={this.typedOptions}
      />
  };

  loadShawnStage = () => {

  };

  render() {
    return this.state.currentStage;
  }
}