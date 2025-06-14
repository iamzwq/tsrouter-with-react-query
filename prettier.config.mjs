/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  singleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['className'],
  tailwindFunctions: ['clsx'],
  tailwindPreserveWhitespace: true,
  // plugins: ['@trivago/prettier-plugin-sort-imports'],
  // importOrder: [
  //   '<BUILTIN_MODULES>',
  //   '^(react/(.*)$)|^(react$)',
  //   '^(react-dom/(.*)$)|^(react-dom$)',
  //   '<THIRD_PARTY_MODULES>',
  //   '^~/(.*)$',
  //   '^\\.\\.(?!/?$)',
  //   '^\\.\\./?$',
  //   '^\\./(?=.*/)(?!/?$)',
  //   '^\\.(?!/?$)',
  //   '^\\./?$',
  //   '[.]',
  //   '.s?css$',
  // ],
};

export default config;
