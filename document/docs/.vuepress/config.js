const { description } = require('../../package')

module.exports = {
  title: 'LINE LIFF Copilot',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Documantation',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  // .md ファイルの変更を検知して自動的に再読み込みする設定
  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true })
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        if (env.VUEPRESS_DEV_SERVER) {
          const token = tokens[idx]
          const rawCode = token.content.trim()
          const code = rawCode.startsWith(':::') ? rawCode : `\`\`\`${token.info}\n${rawCode}\n\`\`\``

          return `<ClientOnly><CustomComponent :code="\`${code}\`" /></ClientOnly>`
        }

        return self.renderToken(tokens, idx, options)
      }
    }
  }
}
