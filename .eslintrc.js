module.exports = {
  "extends": "airbnb",
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_id"
        ]
      }
    ],
    "arrow-parens": 0,
    "no-console": 0,
    "no-else-return": 0,
    "no-tabs": 0,
    "comma-dangle": 0,
    "global-require": 0,
    "indent": 1,
    "no-unederscore-dangle": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "import/first": 0,
  }
}