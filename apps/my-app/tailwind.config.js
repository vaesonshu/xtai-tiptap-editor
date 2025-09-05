module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tiptap-editor-component/dist/**/*.{js,ts,jsx,tsx}', // 👈 扫描你包里的类名
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
