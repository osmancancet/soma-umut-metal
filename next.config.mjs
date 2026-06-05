/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // İleride dış kaynaklı (CMS/CDN) görseller eklenirse buraya remotePatterns tanımlanır.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
