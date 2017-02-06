module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },
  rules: {
    'arrow-parens': [0],
    'class-methods-use-this': [0],
    'comma-dangle': ['error', 'never'],
    'global-require': [0],
    'import/no-dynamic-require': [0],
    'import/prefer-default-export': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'max-len': [0],
    'no-plusplus': [0],
    'radix': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'react/jsx-no-bind': [0],
    'react/no-danger': [0],
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
    'react/style-prop-object': [0]
  }
};
