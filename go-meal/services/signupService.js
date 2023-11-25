import { generateApiEndpoint } from "@/utils";
import axios from "./client";

export async function SignUpUser(user) {
  const url = generateApiEndpoint("users");
  return axios.post(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
