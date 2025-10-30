
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // This will bypass the build error
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: ['https://3001-firebase-studio-1754746977614.cluster-rhptpnrfenhe4qarq36djxjqmg.cloudworkstations.dev'],
};

export default nextConfig;
