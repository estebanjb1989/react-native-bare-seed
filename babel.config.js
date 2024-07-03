module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    ["@babel/plugin-transform-private-methods", { loose: true }],
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        alias: {
          src: "./src",
          "@assets": "./src/assets",
          "@store": "./src/store",
          "@helpers": "./src/helpers",
          "@screens": "./src/screens",
          "@navigation": "./src/navigation",
        },
      },
    ],
  ],
};
