module.exports = {
    plugins: ["@babel/syntax-dynamic-import"],
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
    ],
  };
  
