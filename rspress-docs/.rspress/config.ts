import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: '.',
  title: 'ClickMax Design System',
  description: 'Modern Design System built with React 19, Tailwind CSS 4, and Radix UI',
  icon: '/favicon.ico',
  logo: {
    light: '/logo.svg',
    dark: '/logo.svg',
  },

  themeConfig: {
    // Navegação principal
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/primitives/button' },
      { text: 'Tokens', link: '/tokens/colors' },
      { text: 'Examples', link: '/examples/forms' },
      {
        text: 'GitHub',
        link: 'https://github.com/guigonzalez/ClickMax-DS-Prototype',
      },
    ],

    // Sidebar (navegação lateral)
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Architecture', link: '/guide/architecture' },
          ],
        },
        {
          text: 'Contributing',
          items: [
            { text: 'Contributing Guide', link: '/guide/contributing' },
            { text: 'Changelog', link: '/guide/changelog' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Primitives',
          collapsible: true,
          items: [
            { text: 'Button', link: '/components/primitives/button' },
            { text: 'Input', link: '/components/primitives/input' },
            { text: 'Badge', link: '/components/primitives/badge' },
            { text: 'Icon', link: '/components/primitives/icon' },
          ],
        },
        {
          text: 'Forms',
          collapsible: true,
          items: [
            { text: 'Checkbox', link: '/components/forms/checkbox' },
            { text: 'Radio', link: '/components/forms/radio' },
            { text: 'Switch', link: '/components/forms/switch' },
            { text: 'Textarea', link: '/components/forms/textarea' },
          ],
        },
        {
          text: 'Layout',
          collapsible: true,
          items: [
            { text: 'Card', link: '/components/layout/card' },
          ],
        },
      ],
      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Colors', link: '/tokens/colors' },
            { text: 'Typography', link: '/tokens/typography' },
            { text: 'Spacing', link: '/tokens/spacing' },
            { text: 'Effects', link: '/tokens/effects' },
          ],
        },
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Forms', link: '/examples/forms' },
            { text: 'Layouts', link: '/examples/layouts' },
          ],
        },
      ],
    },

    // Footer
    footer: {
      message: 'Built with Rspress and ❤️ by ClickMax',
    },

    // Social links
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/guigonzalez/ClickMax-DS-Prototype',
      },
    ],

    // Dark mode
    darkMode: true,

    // Busca
    search: true,
  },

  // Build config
  builderConfig: {
    output: {
      distPath: {
        root: '../dist-docs',
      },
    },
  },

  // Markdown config
  markdown: {
    // Habilita syntax highlighting
    defaultWrapCode: true,
    // Mostra números de linha
    showLineNumbers: true,
  },
});
