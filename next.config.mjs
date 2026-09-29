/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soeltrwechjgidbomkxw.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
