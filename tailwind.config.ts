export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom-out': 'zoomOut 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

