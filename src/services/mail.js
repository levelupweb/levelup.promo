import config from "../config";
import { NotificationManager } from "react-notifications";
import axiosInstance from "../utils/axiosInstance";

class Mail {
  constructor(subject) {
    this.subject = subject;
    this.dispatchSend = this.dispatchSend.bind(this);
  }

  dispatchSend(html) {
    return axiosInstance({
      method: "POST",
      headers: {
        authorization: config.token
      },
      data: {
        subject: this.subject,
        who: config.mail.who,
        to: config.mail.to,
        html
      }
    }).then(({ data }) => {
      if (data.success) {
        NotificationManager.success("Ваше сообщение успешно доставлено", "Успех");
        return Promise.resolve();
      } else {
        NotificationManager.error("При отправке сообщения возникла непредвиденная ошибка", "Ошибка");
        return Promise.reject();
      }
    }).catch((err) => {
      NotificationManager.error("Попробуйте позже, не удалось связаться с сервером", "Ошибка");
      return Promise.reject(err);
    });
  }
}

export default Mail;
