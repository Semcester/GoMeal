import config from "@/config";

export function generateApiEndpoint(url) {
  return `${config.urls.api}/${url}`;
}
