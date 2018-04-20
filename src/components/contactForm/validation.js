import { validateMobile, validateEmail } from "../../utils/regular";

export default (map) => {
  let errors = [];

  if (!map.has("Контактный телефон")) {
    errors = [...errors, "Не заполнено поле 'Контактный телефон'"];
  }

  if (!validateMobile(map.get("Контактный телефон"))) {
    errors = [...errors, "Некорректный формат телефона"];
  }

  if (!map.has("Имя")) {
    errors = [...errors, "Не заполнено поле 'Как к вам обратиться?'"];
  }

  if (!map.has("E-mail")) {
    errors = [...errors, "Не заполнено поле 'E-mail'"];
  }

  if (!validateEmail(map.get("E-mail"))) {
    errors = [...errors, "Некорректный E-mail адрес"];
  }

  return errors;
};
