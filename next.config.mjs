/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/features/cctv-injury-alert',
        destination: '/feature/cctv',
        permanent: true,
      },
      {
        source: '/features/meal-scanner',
        destination: '/feature/meal-scanner',
        permanent: true,
      },
      {
        source: '/features/trainer-management',
        destination: '/feature/trainer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
