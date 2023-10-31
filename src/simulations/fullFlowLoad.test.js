import Users from "../requests/users.request";

import { group } from "k6";

export let options = {
  stages: [
    { duration: "05s", target: 3 }, // para simular um ramp-up em um tráfico de 1 até 3 usuários em 05s
    { duration: "10s", target: 5 }, // manter com 5 usuários por 10s
    { duration: "15s", target: 0 }, // simular um ramp-down até 0 usuários em 15s
  ],
  thresholds: {
    http_req_duration: ["p(99)<3500"], // 99% dos requests precisam passar abaixo dos 3.5s para os testes serem conclúidos com sucesso.
  },
};

export default function () {
  let users = new Users();

  group("Get all Users", () => {
    users.getUsers();
  });
}
