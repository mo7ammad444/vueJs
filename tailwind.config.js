/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'text-mahak-pink': '#FF6090',
        'text-mahak-gray': '#90A4AE',
        'text-mahak-yello': '#FBC02D',
        'text-mahak-purple': '#7A18AB',
        'text-mahak-blue': '#4F8EF5',
        'text-mahak-green': '#2EB77C',
        'winners-pink': '#FFB4B4',
        'result-blue': '#BBF6FF',
        'toplink-pink': '#FFE9E9',
        'yas': '#FBF9FF',
        'b-yas': '#EFDEF8',
        '707070': '#707070',
        'btn-send': '#CBD4D9',
        'btn-input': '#EEEEEE',
        'a1a1a1': '#A1A1A1',
        'cu-purple': '#CA67FF',
        'border-profile': '#F2E4F9',
      },
      width: {
        'w-100': '100%',
        'w94vw': '94vw',
      },

      top: {
        't-top-31': '31px',
        'right-34': '34%',
      },
      letterSpacing: {
        widest_2x: '.5em',
      },
      fontFamily: {
        // 'sans': ['Estedad'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
