import React, { Component } from "react";
import "./styles.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.reveal = this.reveal.bind(this);

    this.state = {
      isRevealed: false
    };
  }

  reveal() {
    this.setState(state => ({ isRevealed: !state.isRevealed }), () => {
      toggleBlurOnBody();
    });
  }

  render() {
    const { isRevealed, } = this.state;

    const {
      render,
      options
    } = this.props;

    const {
      title,
      description,
    } = options;

    return (
      <div>
        <div className={isRevealed ? "Modal open" : "Modal"}>
          <div className="Modal-wrapper inverted">
            <div className="Modal-closer">
              <button className="button ghost" onClick={this.reveal}>Закрыть</button>
            </div>
            <div className="Modal-title">
              <div className="block">
                <h1>{title}</h1>
                <p className="primary">{description}</p>
              </div>
            </div>
            <div className="Modal-content">
              <div className="block">
                {React.createElement(render)}
              </div>
            </div>
          </div>
        </div>
        <span>
          {React.cloneElement(this.props.children, { onClick: this.reveal })}
        </span>
      </div>
    );
  }
}

const toggleBlurOnBody = () => {
  document
    .querySelector("body").classList
    .toggle("blocked");
};

export default Modal;
