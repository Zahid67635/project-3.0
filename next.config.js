/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "3000",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "img-b.udemycdn.com",
        port: "3000",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
