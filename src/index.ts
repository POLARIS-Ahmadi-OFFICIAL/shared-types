export type { paths, components, operations } from "./generated/api.js";

export const API_VERSION = "v1" as const;
export const API_PREFIX = "/api/v1" as const;

export function apiPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_PREFIX}${normalized}`;
}
