// INFO: This file does not work as a .ts, because nodejs does not support typescript current LTS version - 22.x.x (2023-06-20)
// This has been fixed in the next LTS version - 24.x.x - already supported in version 23.

/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*": ["npm run lint:fix"],
};

export default config;
