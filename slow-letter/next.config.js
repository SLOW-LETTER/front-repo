const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = require("next-transpile-modules")(["three"]);

module.exports = nextConfig;
module.exports = withTM();

module.exports = {
  images: {
    domains: ['slowletter.s3.ap-northeast-2.amazonaws.com'],
  },
}
