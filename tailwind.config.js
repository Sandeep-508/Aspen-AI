/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "sans-serif"]
      },
      fontSize: {
        "xs": ["12px", "19px"],
        "2xl": ["24px", "28px"],
        "3xl": ["32px", "44px"],
        "4xl": ["48px", "57px"],
        "5xl": ["56px", "67px"],
        "6xl": ["60px", "75px"],
      },
      colors: {
        'charcoal': '#343434',
        'obsidian': '#020202',
        "dark-green": "#023E48",
        'off-white': '#FEFEFE',
        "skin-color": "#F9F9F9",
        'shadow': '#0000001F',
        'pearl': '#F7F9FA',
        'custom-teal': '#023E4808',
        "Evening Sea": "#023E481F",
        'whisper': '#EFEFEF',
        'frost': '#FFFFFF0D',
        'mist': '#FEFEFE1F',
        'deep-ocean': '#0F4851',
        'cloud-gray': '#D1DCDE',
        'lagoon': '#1B515A',
        'gossamer': '#FFFFFF33',
        'silver': '#D9D9D9',
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl": "1400px",
        "3xl": "1536px",
        "4xl": "1920px",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        btnShadow: "rgba(2, 62, 72, 1) 0px 10px 10px -5px",
      }
    },
  },
  plugins: [],
}