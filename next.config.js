/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      [
        "swc-plugin-coverage-instrument",
        {
          coverageVariable: "__coverage__"
        }
      ]
    ]
  }
}
