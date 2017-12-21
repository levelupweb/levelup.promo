import React from "react";
import Field from "../field/Field";
import validation from "./validation";
import Mail from "../../services/mail";
import generateHtml from "./template";
import "./styles.css";

const displayErrors = errors => {
  if (!errors.length) return null;
  return (<ul>{errors.map((item, i) => (<li key={i}>{item}</li>))}</ul>);
};

const defaultData = {
  "Контактный телефон": null,
  "Имя": null,
  "Сообщение": null,
};

class CheckPriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.mail = new Mail("Клиент просит узнать стоимость");
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
      return this.mail.dispatchSend(generateHtml(data))
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
      <div className="check-price-form">
        {displayErrors(errors)}
        <Field
          fieldName="Контактный телефон"
          onInput={this.updateData}
          defaultValue={data["Контактный телефон"]}
          title="Контактный телефон"
        />
        <Field
          fieldName="Имя"
          onInput={this.updateData}
          defaultValue={data["Имя"]}
          title="Как к вам обращаться?"
        />
        <Field
          fieldName="Сообщение"
          type="textarea"
          onInput={this.updateData}
          defaultValue={data["Сообщение"]}
          title="Опишите работы, стоимость которых необходимо расчитать"
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
