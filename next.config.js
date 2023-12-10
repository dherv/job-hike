/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*i.pravatar.cc",
        port: "",
        pathname: "**",
      },
    ],
  },
  logging: {
    level: "verbose",
  },
};

module.exports = nextConfig;
