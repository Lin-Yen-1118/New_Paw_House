module.exports = {
  arrowParens: 'always', // 箭頭函数，只有一個參數的时候，也需要括號
  bracketSameLine: false, //尾標籤> 會單獨成一行
  bracketSpacing: true, // 大括號内的首尾需要空格
  htmlWhitespaceSensitivity: 'css', // 根據顯示樣式决定 html 要不要折行
  insertPragma: false, // 不需要自動在文件開頭插入 @prettier
  jsxSingleQuote: false, // jsx 不使用單引號，而使用雙引號
  printWidth: 80, // 一行最多 80 字符
  proseWrap: 'preserve', //是否換行  "always"-如果超過打印寬度，請換行； "never"-不要換行；"preserve"-按原樣顯示
  quoteProps: 'as-needed',  // 對象的 key 僅在必要時用引號
  requirePragma: false, // 不需要寫文件開頭的 @prettier
  semi: true, // 行尾需要有分號
  singleQuote: false, // 使用單引號
  tabWidth: 2, // 使用 2 個空格缩進
  trailingComma: 'es5', //尾隨逗號
  useTabs: false, // 不使用缩進符，而使用空格
  vueIndentScriptAndStyle: false, //是否縮進 Vue 文件中的代碼<script>和<style>標籤
};
