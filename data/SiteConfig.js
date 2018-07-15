module.exports = {
  siteTitle: "2much2learn", // Site title.
  siteTitleShort: "2much2learn", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "There's always 2 much 2 learn", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://2much2learn.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: true, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "There's always 2 much 2 learn.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-957431-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname. https-vagr9k-github-io-gatsby-material-starter
  postDefaultCategoryID: "Java", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Madan Narra", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Sydney, Australia", // User location to display in the author segment.
  userAvatar: "https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-1/p240x240/12715567_10153336287806969_7534192969957997083_n.jpg?_nc_cat=0&oh=293159748a196a73bee9d46b07cc5914&oe=5BD005CC", // User avatar to display in the author segment.
  userDescription:
    "Belives learning never ends and thinks there's always 2 much 2 learn. Architect by role and Full Stack Developer at Core with primary focus on Java, Microservices, AWS etc...", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/narramadan",
      iconClassName: "fa fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/narramadan/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:narra.madan@outlook.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018" // Copyright string for the footer of the website and RSS feed.
};
