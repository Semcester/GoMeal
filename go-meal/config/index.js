const all = {
  env: process.env.APP_ENVIRONMENT || "development",
};

const currentEnv = require(`./${all.env}.js`);

export default {
  ...currentEnv,
};
