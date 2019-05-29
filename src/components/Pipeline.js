import React, {Component} from 'react';
import Welcome from './stages/Welcome';
import Primer from './stages/Primer'
import Jackie from "./stages/Jackie";
import DoYouWipe from "./stages/DoYouWipe";
import Shawn from "./stages/Shawn";
import Delphine from "./stages/Delphine";
import Mona from "./stages/Mona";
import cap1_1 from "../img/cap1/001.png";
import cap1_2 from "../img/cap1/002.png";
import cap1_3 from "../img/cap1/003.png";
import cap1_4 from "../img/cap1/004.png";
import cap1_5 from "../img/cap1/005.png";
import cap1_6 from "../img/cap1/006.png";
import cap1_7 from "../img/cap1/007.png";
import cap1_8 from "../img/cap1/008.png";
import cap1_9 from "../img/cap1/009.png";
import cap1_10 from "../img/cap1/010.png";
import cap1_11 from "../img/cap1/011.png";
import cap1_12 from "../img/cap1/012.png";
import cap1_13 from "../img/cap1/013.png";
import cap1_14 from "../img/cap1/014.png";
import cap1_15 from "../img/cap1/015.png";
import cap1_16 from "../img/cap1/016.png";
import cap2_1 from "../img/cap2/001.png";
import cap2_2 from "../img/cap2/002.png";
import cap2_3 from "../img/cap2/003.png";
import cap2_4 from "../img/cap2/004.png";
import cap2_5 from "../img/cap2/005.png";
import cap2_6 from "../img/cap2/006.png";
import cap2_7 from "../img/cap2/007.png";
import cap2_8 from "../img/cap2/008.png";
import cap2_9 from "../img/cap2/009.png";
import cap2_10 from "../img/cap2/010.png";
import cap2_11 from "../img/cap2/011.png";
import cap2_12 from "../img/cap2/012.png";
import cap2_13 from "../img/cap2/013.png";
import cap2_14 from "../img/cap2/014.png";
import cap2_15 from "../img/cap2/015.png";
import cap2_16 from "../img/cap2/016.png";
import CrocodileDundee from "./stages/CrocodileDundee";
import Thanos from "./stages/Thanos";
import McDonalds from "./stages/McDonalds";


export default class Pipeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStage: <div/>,
      stageIndex: 1
    };
    this.typedOptions = {
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1300
    };
    setTimeout(this.loadThanosStage, 1000);
  }

  loadWelcomeStage = () => {
    this.typedOptions.strings = ["", "G'day Melody!", "Let's put some shrimp on the barbie!", "But first,^900hmmm^400.^250.^250.", "Are you^150 <strong><i>really</i></strong>^150 Melody?"];
    const welcomeStageComponent = <Welcome
      typedOptions={this.typedOptions}
      onStageComplete={this.loadPrimerStage}
    />;
    this.setState({
      currentStage: welcomeStageComponent
    })
  };

  loadPrimerStage = () => {
    this.typedOptions.strings = ["", "Alright", "Let's try a little quiz", "Answer correctly to prove that you're <strong><i>really</i></strong> Melody", "Ready?"];
    const primerStageComponent = <Primer
      typedOptions={this.typedOptions}
      onStageComplete={this.loadCrocodileDundeeStage}
    />;
    this.setState({
      currentStage: primerStageComponent
    });
  };

  loadCrocodileDundeeStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 object recognition`, "Which one of these is a knife?"];
    const crocodileDundeeStageComponent = <CrocodileDundee
      typedOptions={this.typedOptions}
      onStageComplete={this.loadJackieStage}
    />;
    this.loadStage(crocodileDundeeStageComponent);
  };

  loadJackieStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 are you a robot?`, "Select all squares with Jackie"];
    let captchaImage1 = [cap1_1, cap1_2, cap1_3, cap1_4,
      cap1_5, cap1_6, cap1_7, cap1_8,
      cap1_9, cap1_10, cap1_11, cap1_12,
      cap1_13, cap1_14, cap1_15, cap1_16];

    let captchaImage2 = [cap2_1, cap2_2, cap2_3, cap2_4,
      cap2_5, cap2_6, cap2_7, cap2_8,
      cap2_9, cap2_10, cap2_11, cap2_12,
      cap2_13, cap2_14, cap2_15, cap2_16];

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
      onStageComplete={this.loadMcDonaldStage}
      firstImage={captchaImage1}
      secondImage={captchaImage2}
      correctIndices={correctIndices}
    />;
    this.loadStage(jackieStageComponent);
  };

  loadMcDonaldStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 culinary tastes`, "Which of these is the most refined cuisine?"];
    const mcdonaldStageComponent = <McDonalds typedOptions={this.typedOptions} onStageComplete={this.loadShawnStage}/>;
    this.loadStage(mcdonaldStageComponent);
  };

  loadShawnStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 voice recognition`, "Who is this angelic singer?"];
    const shawnStageComponent =
      <Shawn typedOptions={this.typedOptions} onStageComplete={this.loadDelphineStage}/>;
    this.loadStage(shawnStageComponent);
  };

  loadDelphineStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 inter-personal relations`, "Voulez-vous coucher avec moi ce soir?"];
    const delphineStageComponent =
      <Delphine typedOptions={this.typedOptions} onStageComplete={this.loadDoYouWipeStage}/>;
    this.loadStage(delphineStageComponent);
  };

  loadDoYouWipeStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 personal hygiene`, "Do you wipe?"];
    const wipeStageComponent =
      <DoYouWipe
        typedOptions={this.typedOptions}
        onStageComplete={this.loadMonaStage}
      />;
    this.loadStage(wipeStageComponent);
  };

  loadMonaStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 lie detection`, "Below are two truths and a lie about Mona", "Which is the lie?"];
    const monaStageComponent =
      <Mona typedOptions={this.typedOptions} onStageComplete={this.loadThanosStage}/>;
    this.loadStage(monaStageComponent);
  };

  loadThanosStage = () => {
    this.typedOptions.strings = ["", `Question ${this.state.stageIndex}:^500 willpower`, "The hardest choices require the strongest wills", "Keep the world perfectly balanced, as all things should be"];
    const thanosStageComponent =
      <Thanos typedOptions={this.typedOptions} onStageComplete={this.loadEndStage}/>;
    this.loadStage(thanosStageComponent);
  };

  loadEndStage = () => {
  };

  loadStage = (component) => {
    this.setState((state) => {
      return {
        currentStage: component,
        stageIndex: state.stageIndex + 1
      }
    })
  };

  render() {
    return this.state.currentStage;
  }
}