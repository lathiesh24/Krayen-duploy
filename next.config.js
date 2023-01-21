/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["www.notion.so"]
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.LOOM_SCRIPT': JSON.stringify('https://cdn.loom.com/player.js'),
      })
    );
    return config;
  },
}

module.exports = nextConfig
