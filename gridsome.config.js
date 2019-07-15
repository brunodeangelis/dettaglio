module.exports = {
  siteName: "Dettaglio",
  siteUrl: "https://dettaglio.co",
  siteDescription: "Creamos productos digitales. Potenciamos tu negocio a través del diseño y el desarrollo.",
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
