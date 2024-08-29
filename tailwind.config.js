module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screen:{
        'xs': '480px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
