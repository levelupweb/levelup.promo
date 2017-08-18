import axios from "axios";

class Mail {
	constructor(token, who, to, subject) {
		this.token = token;
		this.who = who;
		this.to = to;
		this.subject = subject;
	}
	send(html) {
		return axios({
			method: "POST",
			url: "http://185.22.232.114:3080/send",
			headers: {
				"x-access-token": this.token 
			},
			data: {
				who: this.who,
				to: this.to,
				subject: this.subject,
				html: html,
			}
		});
	}
}

export default Mail;
