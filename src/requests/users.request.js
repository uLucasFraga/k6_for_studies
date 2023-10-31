import { check } from "k6";
import http from "k6/http";
import utils from "../utils/utils.js";

export default class Users {
  constructor() {
    this.params = {
      headers: {
        "Content-Type": "application/json",
        monitor: false,
      },
    };
  }

  getUsers() {
    let response = http.get(`${utils.getBaseUrl()}/usuarios`, this.params);
    check(response, {
      "is status 200": () => response.status === 200,
    });
  }
}
