import React from "react";
import Field from "../field";
import validation from "./validation";
import sendmail from "../../services/mail";
import config from "../../utils/config";
import generateHtml from "./template";
import "./styles.css";

const getDefaultData = () => new Map();

class CallbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);

    this.state = {
      data: getDefaultData(),
      errors: [],
    };
  }

  getFieldValue(field) {
    const { data } = this.state;

    if (data.has(field)) {
      return this.state.data.get(field);
    }

    return "";
  }

  updateData(field, value) {
    this.setState(state => ({
      data: state.data.set(field, value)
    }));
  }

  handleSuccess() {
    this.setState({ data: getDefaultData() });
  }

  submitForm() {
    const { data } = this.state;

    const errors = validation(data);
    if (!errors.length) {
      // send axios request to mail server if we don't have errors
      return sendmail(data, config.contactposturl)
        .then(this.handleSuccess);
    }
    // if we have client-side validation errors
    return this.setState({
      errors,
    });
  }

  renderError() {
    const { errors } = this.state;

    if (errors.length === 0) {
      return null;
    }

    return (
      <ul className="callback-errors">
        {errors.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="callback-form inverted">
        {this.renderError()}
        <Field
          fieldName="Контактный телефон"
          onInput={this.updateData}
          defaultValue={() => this.getFieldValue("Контактный телефон")}
          title="Контактный телефон"
        />
        <Field
          fieldName="Имя"
          onInput={this.updateData}
          defaultValue={() => this.getFieldValue("Имя")}
          title="Как к вам обращаться?"
        />
        <Field
          fieldName="Сообщение"
          type="textarea"
          onInput={this.updateData}
          defaultValue={() => this.getFieldValue("Сообщение")}
          title="Дополнительное сообщение"
        />
        <button
          onClick={this.submitForm}
          type="submit"
          className="button ghost"
        >
          Отправить
        </button>
      </div>
    );
  }
}

export default CallbackForm;
