const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Resolve public assets for both the domain root and GitHub project Pages. */
export function assetPath(path: string) {
  return `${basePath}/${path.replace(/^\/+/, "")}`;
}
