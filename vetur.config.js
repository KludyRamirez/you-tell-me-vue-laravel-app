// vetur.config.js
module.exports = {
  // **optional**: default: `[{ root: './' }]`
  // support monorepos
  projects: [
    "./client", // Shorthand for specifying only the root.
    {
      // **required**
      // Where is your project?
      // It is relative to `vetur.config.js`.
      root: "./client",
      // **optional**: default: `'package.json'`
      // Where is `package.json` in the project?
      package: "./client/package.json",
      // **optional**
      // Where is TypeScript config file in the project?
      // tsconfig: './tsconfig.json',
      // **optional**: default: `'./.vscode/vetur/snippets'`
      // Where is vetur custom snippets folders?
      // snippetFolder: './.vscode/vetur/snippets',
      // **optional**: default: `[]`
      // Register globally Vue component glob.
      // If you set it, you can get completion by that components.
      // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
      // **optional**: default: `['**/*.vue']`
      // Register globally Vue component glob.
      // If you set it, you can get completion by that components.
      // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
      // globalComponents: [
      //   './src/components/**/*.vue'
      // ]
    },
  ],
};
