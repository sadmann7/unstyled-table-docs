import { withContentlayer } from "next-contentlayer"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  redirects: async () => [
    {
      source: "/docs",
      destination: "/docs/introduction",
      permanent: true,
    },
    {
      source: "/docs/getting-started",
      destination: "/docs/introduction",
      permanent: true,
    },
    {
      source: "/docs/core-apis",
      destination: "/docs/core-apis/column-def",
      permanent: true,
    },
    {
      source: "/docs/renderers",
      destination: "/docs/renderers/header",
      permanent: true,
    },
    {
      source: "/docs/examples",
      destination: "/docs/examples/basic",
      permanent: true,
    },
  ],
}

export default withContentlayer(nextConfig)
