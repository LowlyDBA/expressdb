// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides',
		ariaLabel: 'Guides Menu',
		items: [
		{ text: 'What is SQL Server Express?', link: '/docs/what-is-sql-server-express/'},
		{ text: 'Express vs. Standard vs. Enterprise', link: '/docs/sql-server-express-feature-comparison/'},
		{ text: 'SQL Express vs. LocalDB', link: '/docs/sql-server-express-vs-localdb/'},
		{ text: 'Which Express Version to Use', link: '/docs/which-sql-server-express-version-to-use/'},
		{ text: 'Which Management Studio to Use', link: '/docs/which-sql-server-management-studio-version/'},
		] 
	  },
      { text: 'Limitations',
		ariaLabel: 'Guides Menu',
		items: [
		{ text: 'Size Restrictions', link: ''},
		{ text: 'Hardware Restrictions', link: '/docs/sql-server-express-hardware-limitations/'},
		{ text: 'Missing Database Mail', link: '/docs/sql-server-express-database-size-limit/'}
		]
	  },
	  { text: 'Best Practices', link: 'https://google.com' },
	  { text: 'Automation', link: 'https://google.com' },
	  { text: 'Free Tools', link: 'https://google.com' },
	  { text: 'About', link: 'https://google.com' }
    ],
	sidebar: 'auto'
  }
}
