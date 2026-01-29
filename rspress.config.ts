import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'rspress-docs',
  title: 'ClickMax Design System',
  description: 'Modern Design System built with React 19, Tailwind CSS 4, and Radix UI',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/foundation/button' },
      { text: 'Tokens', link: '/tokens/colors' },
      { text: 'Examples', link: '/examples/forms' },
      { text: 'Project', link: '/project/status' },
      {
        text: 'GitHub',
        link: 'https://github.com/guigonzalez/ClickMax-DS-Prototype',
      },
    ],

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
          text: 'Development',
          items: [
            { text: 'Contributing Guide', link: '/guide/contributing' },
            { text: 'Changelog', link: '/guide/changelog' },
            { text: 'Migration Guide', link: '/guide/migration' },
          ],
        },
      ],
      '/project/': [
        {
          text: 'Project Information',
          items: [
            { text: 'Project Status', link: '/project/status' },
            { text: 'Accessibility', link: '/project/accessibility' },
          ],
        },
        {
          text: 'Reorganization',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/project/reorganization/overview' },
            { text: 'Plan', link: '/project/reorganization/plan' },
            { text: 'Summary', link: '/project/reorganization/summary' },
            { text: 'Complete', link: '/project/reorganization/complete' },
          ],
        },
        {
          text: 'Improvements',
          items: [
            { text: 'Quick Wins', link: '/project/quick-wins' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Foundation',
          collapsible: true,
          items: [
            { text: 'Button', link: '/components/foundation/button' },
            { text: 'Badge', link: '/components/foundation/badge' },
            { text: 'Icon', link: '/components/foundation/icon' },
          ],
        },
        {
          text: 'Typography',
          collapsible: true,
          items: [
            { text: 'Heading', link: '/components/typography/heading' },
            { text: 'Text', link: '/components/typography/text' },
          ],
        },
        {
          text: 'Forms',
          collapsible: true,
          items: [
            { text: 'Input', link: '/components/forms/input' },
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
        {
          text: 'Reference',
          items: [
            { text: 'Colors Changelog', link: '/tokens/colors-changelog' },
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

    footer: {
      message: 'Built with Rspress v2 and ❤️ by ClickMax',
    },

    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/guigonzalez/ClickMax-DS-Prototype',
      },
    ],
  },

  markdown: {
    showLineNumbers: true,
  },
});
