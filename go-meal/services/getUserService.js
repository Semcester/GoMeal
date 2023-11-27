import { generateApiEndpoint } from "@/utils";
import axios from "axios";

export async function getUserService(user) {
  const token = " xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV";
  const url = generateApiEndpoint("users/me");
  return axios.post(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(user),
  });
}
