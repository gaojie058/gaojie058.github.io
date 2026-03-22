export const siteConfig = {
	author: 'Jie (Sophia) Gao',
	title: 'Jie (Sophia) Gao',
	description: 'Malone Postdoc Fellow at Johns Hopkins University. Research in Human-AI Collaboration, HCI, and Software Engineering.',
	lang: 'en-US',
	ogLocale: 'en_US',
	date: {
		locale: 'en-US',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		} as Intl.DateTimeFormatOptions
	}
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{ title: 'Home', path: '/' },
	{ title: 'Publications', path: '/#publications' },
	{ title: 'Software', path: '/#software' },
	{ title: 'About', path: '/life' },
]

export const profileConfig = {
	name: 'Jie (Sophia) Gao',
	title: 'Malone Postdoc Fellow',
	institution: 'Johns Hopkins University',
	email: 'jgao77@jh.edu',
	portrait: '/images/photos/portrait.jpg',
	cvLink: '/pdfs/CV_public.pdf',
	social: {
		scholar: 'https://scholar.google.com/citations?user=U7KDGDsAAAAJ&hl=en',
		twitter: 'https://twitter.com/jiegaosophia',
		linkedin: 'https://www.linkedin.com/in/jiegaosophia',
	}
}
