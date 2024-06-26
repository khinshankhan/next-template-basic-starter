// @ts-check

/**
 * @typedef {import('next').NextConfig} NextConfig
 */

/** @type {NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
}

/**
 * Composes the configuration with a series of functions.
 * @param {NextConfig} initial The initial configuration.
 * @param {((config: NextConfig) => NextConfig)[]} fns The array of functions to compose.
 * @returns {NextConfig} The composed configuration.
 */
const compose = (initial, fns) => fns.reduce((acc, fn) => fn(acc), initial)

// Using ESM syntax for exporting the configuration.
export default () => {
  const plugins = []
  const config = compose(nextConfig, plugins)

  return config
}
