import React from "react";
import Field from "../field/Field";
import validation from "./validation";
import Mail from "../../services/mail";
import generateHtml from "./template";
import "./style.css";

const displayErrors = errors => {
  if (!errors.length) return null;
  return (<ul>{errors.map((item, i) => (<li key={i}>{item}</li>))}</ul>);
};

const defaultData = {
  "E-mail": null,
  Имя: null,
  "Контактный телефон": null,
  Сообщение: null,
};

class CheckPriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.mail = new Mail("Новая заявка из контактной формы");
    this.sendEmail = this.mail.dispatchSend;
    this.state = {
      data: defaultData,
      errors: [],
    };
  }

  updateData(field, value) {
    this.setState(state => ({
      data: {
        ...state.data,
        [field]: value,
      }
    }));
  }


  submitForm() {
    const { data } = this.state;
    const errors = validation(data);

    if (!errors.length) {
      return this.sendEmail(generateHtml(data))
        .then(() => this.setState({ data: defaultData }))
        .catch((err) => console.log(err));
    }
    return this.setState({
      errors,
    });
	}

  render() {
    const {
      data,
      errors
    } = this.state;

    return (
      <div className="contact-form">
        {displayErrors(errors)}
        <Field
          fieldName="Имя"
          onInput={this.updateData}
          title="Как к вам обращаться?"
          defaultValue={data["Имя"]}
          type="text"
        />
        <Field
          fieldName="E-mail"
          onInput={this.updateData}
          title="Здесь e-mail"
          defaultValue={data["E-mail"]}
          type="text"
        />
        <Field
          fieldName="Контактный телефон"
          onInput={this.updateData}
          title="Здесь ваш мобильный (+7)"
          defaultValue={data["Контактный телефон"]}
          type="text"
        />
        <Field
          fieldName="Сообщение"
          onInput={this.updateData}
          title="Дополнительное сообщение.. (не обязательно)"
          defaultValue={data["Сообщение"]}
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

export default CheckPriceForm;
