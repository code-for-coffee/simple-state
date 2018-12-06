const presets = [
  [
    "@babel/env",

    {
      useBuiltIns: "usage"
    }
  ]
];

const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = { presets, plugins };
