/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '*'
  ],
  theme: {
    extend: {
      colors: {
        blue: "#37FFF4", 
        l_blue:"#00E5D8",
        grey:"#979797",
        offWhite:"#F3F3F3",
        l_black:"#191A23",
        d_blue:"#28465F",
        greyblack:"#292A32"

      },
    },
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
