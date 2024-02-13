/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["product-image.kurly.com"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
