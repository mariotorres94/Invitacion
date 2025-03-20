/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'tangerine': ['Tangerine', 'serif'],
      'tangerine-bold': ['Tangerine', 'serif'],
      'petit-formal': ['Petit Formal Script', 'cursive'],
      'cormorant': ['Cormorant Garamond', 'serif'],
      'josefin': ['Josefin Slab', 'serif'],
      'josefin-bold': ['Josefin Slab Bold', 'serif'],
      'josefin-semibold': ['Josefin Slab SemiBold', 'serif'],
      'josefin-slab-regular': ['Josefin Slab Regular', 'serif'],
      'styleScript': ['Style Script', 'serif'],
      'poppins': ['Poppins', 'serif'],
      'poppins-extralight-italic': ['Poppins ExtraLightItalic', 'serif'],
      'poppins-regular': ['Poppins Regular', 'serif'],
      'poppins-light': ['Poppins Light', 'serif'],
      'strait': ['Strait', 'serif'],
      'cormorant-upright': ['Cormorant Upright', 'serif'],
      'josefin-sans-regular': ['Josefin Sans Regular', 'serif'],
      'josefin-sans-light': ['Josefin Sans Light', 'serif'],
    },
  },
  plugins: [],
}

