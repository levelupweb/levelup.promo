export default new function () {
  const config = this;
  this.dev = true;
  this.ssl = false;
  this.port = "PRODUCTION PORT";
  this.staticFolder = "/public";
  this.type = this.ssl ? "https://" : "http://";
  this.productionDomain = "smm.levelupworlds.com";
  this.productionHost = "PRODUCTION URL";
  this.domain = this.type + (this.dev ? (`localhost:${this.port}`) : this.productionDomain);
  this.staticURL = this.domain + this.staticFolder;
  this.host = this.dev ? "127.0.0.1" : productionHost;
  this.hostUrl = this.type + this.host;
  this.sitename = "smm.levelupworlds.com";
  this.token = "YOUR TOKEN";
  this.mail = new function () {
    this.port = "YOUR MAIL SERVER PORT";
    this.sendURL = "MAIL SERVER POST URL";
    this.who = "MANAGER NAME";
    this.to = "E-MAIL WHERE TO SEND";
  }();
}();
