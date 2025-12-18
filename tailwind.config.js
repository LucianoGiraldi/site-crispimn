/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05243C', // Azul marinho
        'primary-dark': '#132D43', // Azul escuro apoio
        'primary-steel': '#364858', // Azul aço/apoio
        silver: '#A0A4A3', // Prata/cinza
        'light-gray': '#E0E3E5', // Cinza claro (fundos)
        gold: '#E7B03C', // Dourado (CTA/destaques)
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px', // Cantos levemente arredondados
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)', // Sombras discretas
        'gold-glow': '0 0 15px rgba(231, 176, 60, 0.6)', // Glow para CTAs
      },
    },
  },
  plugins: [],
}
