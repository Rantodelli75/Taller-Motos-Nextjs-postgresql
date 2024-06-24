/** @type {import('next').NextConfig} */
const nextConfig = {
     async rewrites() {
    return [
      {
        source: '/api/usuarios/:cedula',
        destination: '/api/usuarios',
      },
    ];
  },  experimental: {
    auth: true,
  }
};

export default nextConfig;
