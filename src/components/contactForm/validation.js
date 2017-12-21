import {
  validateEmail,
  validateMobile,
} from "../../utils/regular";

export default data => Object.keys(data).reduce((prev, curr) => {
  if (curr === "Контактный телефон" && !data[curr]) return [...prev, "Не заполнено поле 'Контактный телефон'"];
  if (curr === "Контактный телефон" && !validateMobile(data[curr])) return [...prev, "Некорретный формат телефона"];
  if (curr === "Имя" && !data[curr]) return [...prev, "Не заполнено поле 'Как к вам обратиться?'"];
  if (curr === "E-mail" && !data[curr]) return [...prev, "Не заполнено поле 'E-mail'"];
  if (curr === "E-mail" && !validateEmail(data[curr])) return [...prev, "Некорректный E-mail"];
  return prev;
}, []);

