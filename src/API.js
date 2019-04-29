class API {
  static init() {
    this.baseURL = "http://localhost:3000";
    this.signinURL = this.baseURL + "/signin";
    this.createUserURL = this.baseURL + "/users";
  }

  static siginin(user) {
    return fetch(this.signinURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }

  static createAccount(user) {
    return fetch(this.createUserURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }
}

API.init();

export default API;
