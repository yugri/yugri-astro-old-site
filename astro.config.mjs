// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://yugri.github.io',
	base: '/',
	output: 'static',
	integrations: [
		mdx(), sitemap(),
		mermaid({
			// Optional: Set a default theme
			theme: 'forest',
			// Optional: Enable automatic theme switching based on your site's data-theme
			autoTheme: true,
			// Optional: Additional mermaid configuration
			mermaidConfig: {
			  flowchart: {
				curve: 'basis',
			  },
			},
		  }
		),
	],
});
