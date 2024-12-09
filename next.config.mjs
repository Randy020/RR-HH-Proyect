/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: ""
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev",
        port: ""
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",  // Agregado para permitir imágenes de placeholder
        port: ""
      },
      // Agregado para permitir imágenes de Pinterest
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: ""
      },
      {
        protocol: 'https',
        hostname: 'user-images.strikinglycdn.com',
        pathname: '/res/hrscywv4p/image/upload/**',
      },
    ]
  }
};

export default nextConfig;
