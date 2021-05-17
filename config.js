const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://your-missing-piece.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/ethereum.svg',
    logoLink: '',
    title: "",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Make Your Missing Piece', link: 'https://www.instagram.com/makeyourmissing/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://your-missing-piece.github.io'>missing </a><div class='greenCircle'></div><a href='https://your-missing-piece.github.io'>piece</a>",
  },
  siteMetadata: {
    title: 'Your Missing Piece',
    description: 'Learning essential life skills',
    ogImage: null,
    docsLocation: 'https://github.com/Your-Missing-Piece/your-missing-piece.github.io/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Your Missing Piece',
      short_name: 'MissingPiece',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
