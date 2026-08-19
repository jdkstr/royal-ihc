import type { NextConfig } from "next";

const repoName = "royal-ihc";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.royalihc.com",
        pathname: "/sites/default/files/**",
      },
    ],
  },
};

export default nextConfig;
