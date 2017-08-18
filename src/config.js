export default new function() {
	this.ssl = false;
	this.type = this.ssl ? "https://" : "http://";
	this.host = "185.22.232.114";
	this.mailport = "3080";
	this.secret = "8gia89fianfiajsf";
	this.mailsendurl = this.type + this.host + ":" + this.mailport + "/send";
};
