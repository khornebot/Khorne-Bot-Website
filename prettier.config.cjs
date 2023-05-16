/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    arrowParens: "avoid",
    trailingComma: "none",
    tabWidth: 4
};

module.exports = config;
