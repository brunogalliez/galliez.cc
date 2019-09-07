import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: "#000",
    secondary: "#73737D",
    accent: "rgb(255, 127, 102)",
    grey: "#73737D",
    background: "#fff",
  },
};