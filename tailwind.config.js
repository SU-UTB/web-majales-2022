const production = !process.env.ROLLUP_WATCH
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      dark_blu: '#3724B6',
      light_blu: '#1A64F5',
      pinky: '#FF3358',
      su_orange: '#FFA723',
      dark_blu_txt: '#391F68'
    },
    fontFamily: {
      'body': ['"Cabinet Grotesk"']
    }
  },
  plugins: [
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: false // disable purge in dev
  },
};