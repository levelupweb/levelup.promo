import React from "react";
import Field from "../field";
import validation from "./validation";
import Mail from "../../services/mail";
import generateHtml from "./template";
import "./styles.css";

const getDefaultData = () => new Map();

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.mailSender = null;

    this.state = {
      data: getDefaultData(),
      errors: [],
    };
  }

  componentDidMount() {
    this.mailSender = new Mail("Новая заявка из контактной формы");
  }

  getFieldValue(field) {
    const { data } = this.state;

    return data.get(field);
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
      return this.mailSender
        .dispatchSend(generateHtml(data))
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
      <ul className="contact-form-errors">
        {errors.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="contact-form">
        {this.renderError()}
        <Field
          fieldName="Имя"
          onInput={this.updateData}
          title="Как к вам обращаться?"
          defaultValue={() => this.getFieldValue("Имя")}
          type="text"
        />
        <Field
          fieldName="E-mail"
          onInput={this.updateData}
          title="Здесь e-mail"
          defaultValue={() => this.getFieldValue("E-mail")}
          type="text"
        />
        <Field
          fieldName="Контактный телефон"
          onInput={this.updateData}
          title="Здесь ваш мобильный (+7)"
          defaultValue={() => this.getFieldValue("Контактный телефон")}
          type="text"
        />
        <Field
          fieldName="Сообщение"
          onInput={this.updateData}
          title="Дополнительное сообщение.. (не обязательно)"
          defaultValue={() => this.getFieldValue("Сообщение")}
          type="textarea"
        />

        <button
          onClick={this.submitForm}
          type="submit"
          className="button"
        >
          Отправить
        </button>
      </div>
    );
  }
}

export default ContactForm;
