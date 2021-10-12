module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
        "@babel/preset-react",
    ],
    env: {
        test: {
            presets: ["es2015", "react"],
            plugins: ["syntax-object-rest-spread", "transform-es2015-modules-commonjs"],
        },
    },
};
