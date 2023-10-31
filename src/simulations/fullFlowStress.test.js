import Users from "../requests/users.request";

import { group } from "k6";

export let options = {
  stages: [
    { duration: "05s", target: 1 },
    { duration: "05s", target: 2 },
    { duration: "05s", target: 4 },
    { duration: "05s", target: 5 },
    { duration: "05s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(99)<3500"], // 99% dos requests precisam passar abaixo dos 3.5s para os testes serem conclúidos com sucesso.
  },
};

export default function () {
  let users = new Users();

  group("Get all Users", () => {
    users.getUserss();
  });
}
