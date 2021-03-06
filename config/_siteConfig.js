/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'Sport & Collection',
  tagline: '500 Ferrari contre le cancer',
  featureImage: '/uploads/plateaux-500-ferrari-featured-2.png',
  logo: '/logo-sportetcollection-2021-75x345.png', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  mainMenu: [
    {
      name: 'L\'Association',
      link: '/about'
    },
    {
      name: 'Public',
      link: '/public'
    },
    {
      name: 'Concurrents',
      link: '/concurrents'
    },
    {
      name: 'Medias',
      link: '/medias'
    },
    {
      name: 'Animations',
      link: '/animations'
    },
    {
      name: 'Contacts',
      link: '/contacts'
    },
  ],
  hero: {
    theme: 'light' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: true,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'sport-et-collection'
  },

  // Newsletter Subscribe
  newsletter: {
    on: true,
    heading: 'Abonnez-Vous à notre Newsletter',
    btnText: 'Inscription',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://sportetcollection.us5.list-manage.com/subscribe/post?u=0729b95252d8e011f213bd17b&amp;id=be2b82f7c5'
    },
    custom: {
      on: false,
      formAction: ''
    }
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: false,
    date: {
      display: false
    },
    perRow: 3,
    perPage: 6
  }
}

export const CMS = theCMS
