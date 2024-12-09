/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "user-images.strikinglycdn.com", pathname: "/res/hrscywv4p/image/upload/**" },
    ]
  }
};

module.exports = nextConfig;
