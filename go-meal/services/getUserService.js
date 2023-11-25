import { generateApiEndpoint } from "@/utils";
import axios from "./client";

export async function getUserService(user) {
  const token = " xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV";
  const url = generateApiEndpoint(
    "users/me?fields=id,first_name,last_name,email,avatar",
  );
  return axios.post(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(user),
  });
}
