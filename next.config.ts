import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true"
    ? { output: "export" as const, basePath: "/SineBarro", trailingSlash: true }
    : {}),
};

export default nextConfig;
