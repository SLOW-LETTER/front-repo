module.exports = {
  images: {
    domains: ["slowletter.s3.ap-northeast-2.amazonaws.com"],
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = require("next-transpile-modules")(["three"]);

module.exports = nextConfig;
module.exports = withTM();

module.exports = {
  async rewrites() {
    return {
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/templates/:path*",
          destination:
            "https://slowletter.s3.ap-northeast-2.amazonaws.com/templates/:path*",
        },
      ],
    };
  },
};

