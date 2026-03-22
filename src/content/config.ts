import { defineCollection, z } from 'astro:content'

const publication = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		selected: z.boolean().default(false),
		topic: z.string().default('other'),
		pub: z.string(),
		pub_date: z.string().optional(),
		abstract: z.string().optional(),
		cover: z.string().optional(),
		authors: z.array(z.string()),
		links: z.record(z.string()).optional(),
	})
})

const news = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		date: z.coerce.date(),
	})
})

const software = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		order: z.number().default(99),
		category: z.string().default('other'),
		description: z.string(),
		cover: z.string().optional(),
		badge: z.string().optional(),
		badge_url: z.string().optional(),
		year_display: z.string().optional(),
		links: z.record(z.string()).optional(),
	})
})

export const collections = { publication, news, software }
