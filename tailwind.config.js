const production = !process.env.ROLLUP_WATCH
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      dark_blue: '#052230',
      turq_light: '#D0FFFF',
      turq_satur: '#3ADCDC',
      
    },
    fontFamily: {
      'body': ['"Bw Modelica"']
    }
  },
  plugins: [
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true // disable purge in dev
  },
};