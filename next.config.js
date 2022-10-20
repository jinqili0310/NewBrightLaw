/*
 * @Date: 2022-10-19 09:46:28
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-10-19 16:57:02
 * @FilePath: \newbrightlaw\next.config.js
 */
/** @type {import('next').NextConfig} 
 * 
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
