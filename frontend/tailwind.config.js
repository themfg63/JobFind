/** @type {import{'tailwindcss'}.Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#2d2d2d',
        },
        'bright-sun': {
          '50': '#effaff',
          '100': '#def4ff',
          '200': '#b6ebff',
          '300': '#75deff',
          '400': '#2ccfff',
          '500': '#00bfff',
          '600': '#0095d4',
          '700': '#0076ab',
          '800': '#00638d',
          '900': '#065374',
          '950': '#04344d',
        }
      }
    },
  },
  puligns: []
}