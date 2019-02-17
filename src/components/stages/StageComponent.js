import React, {Component} from 'react';
import Typed from "typed.js";

export default class StageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true,
      isStageVisible: false,
      isImageElementVisible: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.reveal(this.props.typedOptions)
    }, 1000);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  reveal = (typedOptions) => {
    console.log(typeof typedOptions == 'undefined');
    typedOptions.onComplete = () => {
      this.setState({
        isTyping: false,
        isImageElementVisible: true,
      })
    };
    this.typed = new Typed('#typed', typedOptions);
    this.typed.start();
    this.setState({
      isStageVisible: true
    });
  };

  hide = () => {
    this.setState({
      isStageVisible: false,
      isImageElementVisible: false
    });
  };

  showView = (view) => {
    this.hide();
    setTimeout(() => {
      this.setState({
        viewToDisplay: view,
        isStageVisible: true,
        isImageElementVisible: true
      })
    }, 1000)
  };

  returnToDefaultView = () => {
    this.hide();
    setTimeout(() => {
      this.showView("Default");
    }, 1000)
  };

  onCorrectButtonClick = () => {
    this.setState({
      isStageVisible: false
    });
    setTimeout(this.props.onStageComplete, 1000);
  }
}