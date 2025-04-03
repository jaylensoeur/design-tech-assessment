/*
  We need to turn PR comments off
  this was failing the build and release
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // Determines next version from commit messages
    "@semantic-release/release-notes-generator", // Generates changelog notes
    "@semantic-release/npm", // Publishes package to npm
    ["@semantic-release/github", { successComment: false }],
  ],
};
