/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seaGreen: '#084141',
        darkGreen: '#163436',
        greenBlack: '#03232E',
        grey1: '#050E24',
        grey2: '#93AAC5',
        vulcan: '#0D121B',
        blackPearl: '#0C0F15',
        gullGray: '#93AAB3',
        apple: '#880000',
        vidaLoca: '#4B0000',
        chambray: '#305285',
        lividBrown: '#502832',
        blueDianne: '#244F52',
        casablanca: '#F7A74F',
        pickled: '#283B50',
        cloudBurst: '#243952',
        mirage: '#15202F',
        grey3: '#7D859A',
        green: '#6F0000',
      },
    },
  },
  plugins: [],
}
