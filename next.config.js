/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "dallesky.blob.core.windows.net",
      "links.papareact.com",
      "nextsecondround-ecommerce.s3.amazonaws.com",
    ],
  },
};
