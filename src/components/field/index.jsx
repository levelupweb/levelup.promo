import React, { Component } from "react";
import "./styles.css";

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.makeUnactive = this.makeUnactive.bind(this);
    this.makeActive = this.makeActive.bind(this);

    this.state = {
      isActive: false
    };
  }

  makeActive() {
    this.setState({
      isActive: true
    });
    this.input.focus();
  }

  makeUnactive() {
    if (!this.input.value) {
      this.setState({
        isActive: false
      });
    }
  }

  render() {
    const {
      isActive
    } = this.state;

    const {
      title,
      type,
      onInput,
      fieldName,
      hidden
    } = this.props;

    if (!hidden) {
      switch (type) {
        case "hidden":
          return null;
        case "textarea":
          return (
            <div className="field">
              {!isActive &&
              <label onClick={this.makeActive}>
                {title}
              </label>
							}
              <textarea
                onInput={(e) => onInput(fieldName, e.target.value)}
                ref={(e) => { this.input = e; }}
                onBlur={this.makeUnactive}
                onFocus={this.makeActive}
                name={fieldName}
                rows="4"
              />
            </div>
          );
        default:
          return (
            <div className={isActive ? "field active" : "field"}>
              <label onClick={this.makeActive}>
                {title}
              </label>
              <input
                onInput={(e) => onInput(fieldName, e.target.value)}
                ref={(e) => { this.input = e; }}
                onBlur={this.makeUnactive}
                onFocus={this.makeActive}
                type={type || "text"}
                name={fieldName}
              />
            </div>
          );
      }
    } else {
      return (
        <div className="field hidden">
          <input
            onInput={(e) => onInput(fieldName, e.target.value)}
            className="hidden"
            ref={(e) => { this.input = e; }}
            type="text"
            name={fieldName}
          />
        </div>
      );
    }
  }
}
