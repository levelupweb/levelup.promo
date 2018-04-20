import { validateMobile, } from "../../utils/regular";

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

  return errors;
};
