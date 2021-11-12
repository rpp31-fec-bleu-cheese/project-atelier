// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};

// {
//   "jest": {
//     "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"]
//   }
// }
module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  testEnvironment: 'jsdom'
}
