module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/assets/styles/_variables.scss";
          `
            }
        }
    },
    pwa: {
        name: 'CZhangy.io', // <---- this is PWA name
      }
};