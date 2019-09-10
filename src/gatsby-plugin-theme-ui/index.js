import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  fonts: {
    ...novelaTheme.fonts,
    serif: "'Merriweather', Georgia, Serif",
    sansSerif:
      "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  colors: {
    ...novelaTheme.colors,
    primary: "rgb(17, 54, 84)",
    accent: "#556BE7",
    /*grey: "#73737D",
    secondary: "#73737D",
    background: "#fafafa",
    hover: "rgba(0, 0, 0, 0.07)",
    gradient: "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #D9DBE0 100%)",
    articleText: "#08080B",
    track: "rgba(8, 8, 11, 0.3)",
    progress: "#000",
    card: "#fff",
    error: "#EE565B",
    success: "#46B17B",
    errorBackground: "rgba(238, 86, 91, 0.1)",
    horizontalRule: "rgba(8, 8, 11, 0.15)",
    inputBackground: "rgba(0, 0, 0, 0.05)",
    modes: {
      dark: {
        grey: "#73737D",
        primary: "#fff",
        secondary: "#fff",
        accent: "rgb(255, 127, 102)",
        background: "#111216",
        hover: "rgba(255, 255, 255, 0.07)",
        gradient:
          "linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)",
        articleText: "#fff",
        track: "rgba(255, 255, 255, 0.3)",
        progress: "#fff",
        card: "#1D2128",
        error: "#EE565B",
        success: "#46B17B",
        errorBackground: "rgba(238, 86, 91, 0.1)",
        horizontalRule: "rgba(255, 255, 255, 0.15)",
        inputBackground: "rgba(255, 255, 255, 0.07)",
      },
    },*/  
  },
};