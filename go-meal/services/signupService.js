import { generateApiEndpoint } from "@/utils";
import axios from "axios";

export async function SignUpUser(user) {
  console.log("USER", user);
  const url = generateApiEndpoint("users");
  return axios.post(url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
