// INFO: This file does not work as a .ts on Windows as of 2025-06-20
// INFO: To run this file, you need to create a .js file with the same name and copy-paste the commented code below

// /**
//  * @type {import('lint-staged').Configuration}
//  */
// const config = {
// 	// Lint and fix Next.js files
// 	"apps/web/**/*.{ts,tsx,js,jsx}": () => "bun run --cwd=apps/web lint --fix",

// 	// Lint and fix TypeScript and JavaScript files
// 	"**/*.{ts,tsx,js,jsx}": ["oxlint --fix", "eslint --fix --no-warn-ignored", "prettier --write --list-different"],

// 	// Format JSON and YAML files
// 	"**/*.{json,md,yml,yaml}": ["prettier --write --list-different"],
// };

// export default config;

import { Configuration } from "lint-staged";

const config: Configuration = {
  // Lint and fix Next.js files
  "**/*.{ts,tsx,js,jsx}": () => "npm run lint:fix",
  // Lint and fix TypeScript and JavaScript files
  //   "**/*.{ts,tsx,js,jsx}": ["oxlint --fix", "eslint --fix --no-warn-ignored", "prettier --write --list-different"],
  //   // Format JSON and YAML files
  //   "**/*.{json,md,yml,yaml}": ["prettier --write --list-different"],
};
