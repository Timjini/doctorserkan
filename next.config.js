/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
}
