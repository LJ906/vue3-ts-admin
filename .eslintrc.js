module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    'space-before-function-paren': [0, 'always'], // 函数名和参数 括号之间没空格
    // 'space-before-function-paren': ['error', 'never'], // 函数名和参数 括号之间没空格
    // 'space-in-parens': [0, 'never'], //小括号里面要不要有空格
    'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
    'vue/comma-dangle': 'error',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
