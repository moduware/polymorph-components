module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "Morph Components", // Site title.
  siteTitleAlt: "A collection of polymorph elements with their documentation and usage examples. Using Google Polymer creating elements as close to the native webcomponents.", // Alternative site title for SEO.
  siteLogo: "/logos/poly-logo-3.png", // Logo used for SEO and manifest.
  siteUrl: "http://morph.moduware.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A collection of UI web components that looks native to both IOS and Android platform.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825", // FB Application ID for using app insights
  googleAnalyticsID: "UA-82300-1 ", // GA tracking ID.
  disqusShortname: "https-moduware-github-io-docs-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userTwitter: "moduwareinc", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Melbourne, AUS", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "All about us!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/moduware",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/moduwareinc",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Messenger",
      url: "https://www.messenger.com/t/ModuwareInc",
      iconClassName: "fa fa-message"
    },
    {
      label: "Email",
      url: "mailto:info@moduware.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/moduware",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#d12f3d", // Used for setting manifest and progress theme colors.
  backgroundColor: "#d12f3d", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
