/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
    
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'content': '#26282c',
        'contentd': '#d9d7d3',
        'back': '#f7f8fa',
        'back4': '#fafafa',
        'backd4': '#050505',
        'back2': '#b2abab',
        'back3': '#34caa5',
        'back5': '#e5eaef',
        'back5d': '#1a1510',
        'strokes': '#dadddd',
        'search': '#a3a3a3',
        'strike': '#edf2f7',
        'striked': '#120d08',
        'colors': '#9ca4ab',
        'see': '#34caa5',
        'price': '#0d062d',
        'weird': '#737373',
        'sales': '#3a3f51',
        'card': '#898989',
        'slip': "#606060",
        'sees': '#ed544e',
        'charts': '#22242c'
      },
      spacing: {
        '0.1': '0.1px',
        '58': '58px',

        '488': '488px',
        '542': '542px',
        '452': '452px',
        '216': '216px',
        '25': '100px',
        '29': '116px',
        '30': '120px',
        '95': '95px',
        '34.75': '34.75px',
        '972': '874.5px',
        '900': '836.5px',
        '104': '428px',
        '766': '766px',
        '600': '580px',
        '461': '461px', // for hero section
        '876': '54.75rem',
        '810': '810px',
        '38': '152px',
        '682': '682px',
        '548': '34.25rem',
        '7.5': '30px',
        '1360': '1360px',
        '1320': '1320px',
        '1080': '1080px',
        '22': '88px',
        '4.5': '18px',
        '5.5': '22px',
        '6.5': '26px',
        '13': '52px',
        '349': '349px',
        '215': '225px',
        '38': '38px',
        '27': '108px',
        '806': '806px',
        '374': '374px',
        '70': '70px',
      },
      borderRadius: {
        'huge': '100px',
        'hugest': '1000px',
        'normal3': '40px',
        'normal': '20px',
        'normal2': '28px',
        'norms': '14px'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pjs: ['"Plus Jakarta Sans"', "sans-serif"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}

