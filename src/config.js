export default new function() {
	const config = this;
	this.dev = true;
	this.ssl = false;
	this.port = "3070";
	this.staticFolder = "/public"
  this.type = this.ssl ? "https://" : "http://";
  this.productionDomain = "smm.levelupworlds.com";
  this.productionHost = "185.22.232.114";
	this.domain = this.type + (this.dev ? ("localhost:" + this.port) : this.productionDomain);
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "127.0.0.1" : this.productionHost;
	this.hosturl = this.type + this.host;
	this.sitename = "smm.levelupworlds.com";
	this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzbW0ubGV2ZWx1cHdvcmxkcy5jb20iLCJpYXQiOjE1MDM4NDA3ODMsImV4cCI6MTUzNTM3Njc4MywiYXVkIjoic21tLmxldmVsdXB3b3JsZHMuY29tIiwic3ViIjoiNzgzNDgzNjkiLCJhcHBsaWNhdGlvbl9pZCI6Ijc4MzQ4MzY5In0.GUncfrtxmd2HMrvfG0Hm80gLR7h6g4v7jQmuJRlu1Hk";
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Levelup SMM";
		this.to = "smm@levelupworlds.com";
	}()
}();
