/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "mono" : ['Courier']
    },
    extend: {
      colors: {
        'neon-yellow': "#E0E722",
        "neon-green" : "#39FF14",
        "neon-orange" : "#FF8200",
      },
      spacing: {
        "25vh": "25vh",
        "25vw": "25vw"
      },
      fontFamily: {
        'sans': ['Courier'],
      },
      boxShadow: {
        "full-box":"0px 0px 10px 10px",
        'full-shadow' : '0px 0px 20px 20px rgb(224,231,34)',
      }
    },
    },
  plugins: [],
}