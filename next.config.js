const withImages = require('next-images');
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/cv': { page: '/cv' },
      '/projects': { page: '/projects' },
    };
  },
  distDir: 'build',
});
