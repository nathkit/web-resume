/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      etc: {
        primary: "#038793",
        secondary: "#9E8C6C",
        textdark: "#000000",
        textlight: "#e6f5f6",
        white: "#fff"
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']
      },
      fontSize: {
        headline1d: [
          "4.5rem",
          {
            fontFamily: 'playfair',
            lineHeight: "7rem",
            fontWeight: "900",
            letterSpacing: "-2.172px"
          }
        ],
        headline2d: [
          "4.125rem",
          {
            fontFamily: 'playfair',
            lineHeight: "5.125rem",
            fontWeight: "900",
            letterSpacing: "-1.138px"
          }
        ],
        headline3: [
          "2.25rem",
          {
            fontFamily: 'playfair',
            lineHeight: "2.875rem",
            fontWeight: "900",
          }
        ],
        headline1t: [
          "3rem",
          {
            fontFamily: 'playfair',
            lineHeight: "4.75rem",
            fontWeight: "900",
            letterSpacing: "-2.172px"
          }
        ],
        headline2t: [
          "3.5rem",
          {
            fontFamily: 'playfair',
            lineHeight: "4.125rem",
            fontWeight: "900",
            letterSpacing: "-1.138px"
          }
        ],
        headline1m: [
          "2.25rem",
          {
            fontFamily: 'playfair',
            lineHeight: "2.5rem",
            fontWeight: "900",
            letterSpacing: "-2.172px"
          }
        ],
      }
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     screens: {
//       'mobile': '375px',
//       // => @media (min-width: 375px) { ... }
//       'tablet': '768px',
//       // => @media (min-width: 768px) { ... }

//       'laptop': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'desktop': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//   }
// }