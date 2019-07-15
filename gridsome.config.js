module.exports = {
  siteName: "Dettaglio",
  siteUrl: "https://dettaglio.co",
  siteDescription:
    "Digital agency that designs and develops products for the world of today. We empower business through multimedia design.",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-143868632-1"
      }
    }
  ]
};
