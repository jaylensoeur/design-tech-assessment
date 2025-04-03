/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120, // Default = 80
  tabWidth: 2, // Default = 2
  useTabs: false, // Default = false
  semi: true, // Default = true
  singleQuote: false, // Default = false
  jsxSingleQuote: false, // Default = false
  trailingComma: "es5", // Default = "es5" Options: "<es5|none|all>""
  bracketSpacing: true, // Default = true
  jsxBracketSameLine: false, // Default = false
  arrowParens: "always", // Default = "always" Options: "<always|avoid>"
  rangeStart: 0, // Default = 0
  rangeEnd: Infinity, // Default = Infinity
  htmlWhitespaceSensitivity: "css", // Default = css Options: "<css|strict|ignore>"
  endOfLine: "auto", // Default "lf" Options "<lf|crlf|cr|auto>"
  quoteProps: "preserve", // Default = "as-needed" Options: "<as-needed|consistent|preserve>"
};
