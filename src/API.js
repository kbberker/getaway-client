class API {
  static init() {
    this.baseURL = "http://localhost:3000";
    this.signinURL = this.baseURL + "/signin";
  }

  static siginin(user) {
    return fetch(this.signinURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }
}

API.init();

export default API;
