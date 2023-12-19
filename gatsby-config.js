/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `scan2bin-app`,
    siteUrl: ``,
    description: `Uma empresa com foco em engenharia digital, pioneira e referência no Brasil, fornecendo e implementando soluções com tecnologias líderes no mercado mundial de software e hardware. Atuamos na convergência entre a tecnologia e engenharia garantindo maior geração de valor para nossos clientes e seu ecossistema de negócios.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Scan2bin",
        short_name: "Scan2bin",
        start_url: "/",
        background_color: "#FAFAFA",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        //crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
