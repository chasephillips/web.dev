const livePaths = require('../../_filters/live-paths');
const allPaths = require('../../_data/paths');

// =============================================================================
// HOME OVERVIEW
//
// This is the context object for the homepage.
// It helps layout cards featured on the homepage, and their ordering.
//
// =============================================================================

module.exports = function () {
  const paths = [
    allPaths['vitals'],
    allPaths['progressive-web-apps'],
    allPaths['accessible'],
    allPaths['fast'],
    allPaths['reliable'],
    allPaths['secure'],
  ].filter(livePaths);

  const lang = 'en';
  const locale = 'en_US';

  return {
    lang,
    locale,
    home: {
      paths,
    },
  };
};
