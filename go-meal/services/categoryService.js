import { generateApiEndpoint } from "@/utils";
import axios from "axios";

export async function getCategory() {
  const url = generateApiEndpoint("items/ecommerce_category");
  return axios.get(url);
}
