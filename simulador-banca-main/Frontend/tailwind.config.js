const colors = require('tailwindcss/colors');

module.exports = {
  enabled: true, // Agrega la propiedad enabled

  plugins: [
    require('flowbite/plugin'),
  ],
  
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor', 
        darkGreen: '#325259',
        green: '#04D9B2',
        neutralGreen: '#038C73',
        lightGreen: '#80F2DD',
        lightGray: '#F2F2F2',
        black: colors.black,
        white: colors.white,
        Greenlight: '#E3F2EF',
        gray: '8B8B8B',
        darkGray: '#325259',
        DarkSlate: '#038C73',
        beige: '#F2F5F8',
        green: '#038C73',
        lightgreen: '#E3F2EF',
        verde: '#7DC09E',
        lightWhite: '#8B8B8B',
        red: '#E02424',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.js',
      // ... otras rutas de contenido
    ],
    options: {
      // Agrega excepciones para propiedades específicas
      
    },
  },
};

