import axios from "axios";
import { NotificationManager } from 'react-notifications';

class Mail {
	constructor(token, who, to, subject, url) {
		this.token = token;
		this.who = who;
		this.to = to;
		this.subject = subject;
		this.url = url;
	}
	dispatchSend(html) {
		console.log(this.url)
		return axios({
			method: "POST",
			url: this.url,
			headers: {
				"x-access-token": this.token 
			},
			data: {
				who: this.who,
				to: this.to,
				subject: this.subject,
				html,
			}
		}).then((response) => {
			const { success, message } = response.data;
			console.log(response)	
		if(success) {
				return NotificationManager.success(message, 'Успех');
			} else {
				return NotificationManager.error(message, 'Ошибка');
			}
		}).catch((err) => {
			console.log(err)
			return NotificationManager.error('Ошибка клиента', 'Ошибка');
		})
	}
}

export default Mail;
