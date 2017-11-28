import axios from "axios";
import { NotificationManager } from "react-notifications";
import config from "../config";

class Mail {
	constructor(subject) {
		this.subject = subject;
	}

	dispatchSend(html) {
		const {
			who,
			to,
			sendURL
		} = config.mail;

		return axios({
			method: "POST",
			url: sendURL,
			headers: {
				authorization: config.token
			},
			data: {
				subject: this.subject,
				html,
				who,
				to
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
