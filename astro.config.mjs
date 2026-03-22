import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://gaojie058.github.io',
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap(),
		mdx(),
	],
	markdown: {
		remarkRehype: {
			footnoteLabelProperties: { className: [''] }
		}
	},
	prefetch: true,
	output: 'static',
})
