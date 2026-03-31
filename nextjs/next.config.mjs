/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',  // Changed from '/' to '/**' to match all paths
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'loremflickr.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'placehold.co',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'placeimg.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'pixabay.com',
          pathname: '/**',  // Changed from '/' to '/**'
        },
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'randomuser.me',  // Added for testimonial profile images
          pathname: '/**',
        }
      ],
    },
    // Enable strict mode for better development experience
    reactStrictMode: true,
  };
  
  export default nextConfig;