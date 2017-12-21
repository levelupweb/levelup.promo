import {
  validateMobile,
} from "../../utils/regular";

export default data => Object.keys(data).reduce((prev, curr) => {
  if (curr === "Контактный телефон" && !data[curr]) return [...prev, "Не заполнено поле 'Контактный телефон'"];
  if (curr === "Контактный телефон" && !validateMobile(data[curr])) return [...prev, "Некорретный формат телефона"];
  if (curr === "Имя" && !data[curr]) return [...prev, "Не заполнено поле 'Как к вам обратиться?'"];
  return prev;
}, []);
