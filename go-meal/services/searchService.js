import { generateApiEndpoint } from "@/utils";
import axios from "axios";

export async function SearchService(searchInput) {
  const token = " xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV";
  const url = generateApiEndpoint(
    "items/ecommerce_product?filter[name][_contains]=" + searchInput.searchTerm,
  );
  return axios.get(url, {
    headers: { Authorization: "Bearer" + token },
  });
}
