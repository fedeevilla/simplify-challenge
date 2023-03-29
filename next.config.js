/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "m.media-amazon.com",
      "res.cloudinary.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/list",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/list",
        permanent: false,
      },
    ];
  },
  "fontawesome-svg-core": {
    license: "free",
  },
};

module.exports = nextConfig;
