import axios from "axios";

class Mail {
	constructor(token, who, to, subject, url) {
		this.token = token;
		this.who = who;
		this.to = to;
		this.subject = subject;
		this.url = url;
	}
	send(html) {
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
				html: html,
			}
		});
	}
}

export default Mail;
