declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"news": {
"2022-01-01-ac-chi2022.md": {
	id: "2022-01-01-ac-chi2022.md";
  slug: "2022-01-01-ac-chi2022";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2022-04-01-chi2022.md": {
	id: "2022-04-01-chi2022.md";
  slug: "2022-04-01-chi2022";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2022-06-01-visiting-phd-nus.md": {
	id: "2022-06-01-visiting-phd-nus.md";
  slug: "2022-06-01-visiting-phd-nus";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-01-01-ac-chi2023.md": {
	id: "2023-01-01-ac-chi2023.md";
  slug: "2023-01-01-ac-chi2023";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-01-02-visiting-phd-nd.md": {
	id: "2023-01-02-visiting-phd-nd.md";
  slug: "2023-01-02-visiting-phd-nd";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-06-01-cscw2023-demo.md": {
	id: "2023-06-01-cscw2023-demo.md";
  slug: "2023-06-01-cscw2023-demo";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-06-02-tochi.md": {
	id: "2023-06-02-tochi.md";
  slug: "2023-06-02-tochi";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-06-03-uist2023.md": {
	id: "2023-06-03-uist2023.md";
  slug: "2023-06-03-uist2023";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-06-04-icsme2023.md": {
	id: "2023-06-04-icsme2023.md";
  slug: "2023-06-04-icsme2023";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-08-01-ubicomp2023.md": {
	id: "2023-08-01-ubicomp2023.md";
  slug: "2023-08-01-ubicomp2023";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-10-01-cscw2023.md": {
	id: "2023-10-01-cscw2023.md";
  slug: "2023-10-01-cscw2023";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-11-01-collabcoder-nus.md": {
	id: "2023-11-01-collabcoder-nus.md";
  slug: "2023-11-01-collabcoder-nus";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-12-01-emnlp2023.md": {
	id: "2023-12-01-emnlp2023.md";
  slug: "2023-12-01-emnlp2023";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-12-02-smart-postdoc.md": {
	id: "2023-12-02-smart-postdoc.md";
  slug: "2023-12-02-smart-postdoc";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2023-12-03-workshop-chi2024.md": {
	id: "2023-12-03-workshop-chi2024.md";
  slug: "2023-12-03-workshop-chi2024";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-01-01-defense.md": {
	id: "2024-01-01-defense.md";
  slug: "2024-01-01-defense";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-01-02-papers-chi2024.md": {
	id: "2024-01-02-papers-chi2024.md";
  slug: "2024-01-02-papers-chi2024";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-03-01-collabcoder-web.md": {
	id: "2024-03-01-collabcoder-web.md";
  slug: "2024-03-01-collabcoder-web";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-03-02-lbr-chi2024.md": {
	id: "2024-03-02-lbr-chi2024.md";
  slug: "2024-03-02-lbr-chi2024";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-05-01-chi2024.md": {
	id: "2024-05-01-chi2024.md";
  slug: "2024-05-01-chi2024";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-09-01-ac-chi2025.md": {
	id: "2024-09-01-ac-chi2025.md";
  slug: "2024-09-01-ac-chi2025";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2024-12-01-malone.md": {
	id: "2024-12-01-malone.md";
  slug: "2024-12-01-malone";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-03-01-postdoc-jhu.md": {
	id: "2025-03-01-postdoc-jhu.md";
  slug: "2025-03-01-postdoc-jhu";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-04-01-mindcoder.md": {
	id: "2025-04-01-mindcoder.md";
  slug: "2025-04-01-mindcoder";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-05-01-chi.md": {
	id: "2025-05-01-chi.md";
  slug: "2025-05-01-chi";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-10-01-ac.md": {
	id: "2025-10-01-ac.md";
  slug: "2025-10-01-ac";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-10-01-vlhcc.md": {
	id: "2025-10-01-vlhcc.md";
  slug: "2025-10-01-vlhcc";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-11-01-emnlp.md": {
	id: "2025-11-01-emnlp.md";
  slug: "2025-11-01-emnlp";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
"2025-12-01-codemap.md": {
	id: "2025-12-01-codemap.md";
  slug: "2025-12-01-codemap";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] };
};
"publication": {
"2022-pub-1.md": {
	id: "2022-pub-1.md";
  slug: "2022-pub-1";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2023-pub-1.md": {
	id: "2023-pub-1.md";
  slug: "2023-pub-1";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2023-pub-2.md": {
	id: "2023-pub-2.md";
  slug: "2023-pub-2";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2023-pub-3.md": {
	id: "2023-pub-3.md";
  slug: "2023-pub-3";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2023-pub-4.md": {
	id: "2023-pub-4.md";
  slug: "2023-pub-4";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2024-pub-1.md": {
	id: "2024-pub-1.md";
  slug: "2024-pub-1";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2024-pub-2.md": {
	id: "2024-pub-2.md";
  slug: "2024-pub-2";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2024-pub-3.md": {
	id: "2024-pub-3.md";
  slug: "2024-pub-3";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2024-pub-4.md": {
	id: "2024-pub-4.md";
  slug: "2024-pub-4";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2025-pub-1.md": {
	id: "2025-pub-1.md";
  slug: "2025-pub-1";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2025-pub-2.md": {
	id: "2025-pub-2.md";
  slug: "2025-pub-2";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
"2026-pub-1.md": {
	id: "2026-pub-1.md";
  slug: "2026-pub-1";
  body: string;
  collection: "publication";
  data: InferEntrySchema<"publication">
} & { render(): Render[".md"] };
};
"software": {
"codemap.md": {
	id: "codemap.md";
  slug: "codemap";
  body: string;
  collection: "software";
  data: InferEntrySchema<"software">
} & { render(): Render[".md"] };
"collabcoder.md": {
	id: "collabcoder.md";
  slug: "collabcoder";
  body: string;
  collection: "software";
  data: InferEntrySchema<"software">
} & { render(): Render[".md"] };
"mindcoder.md": {
	id: "mindcoder.md";
  slug: "mindcoder";
  body: string;
  collection: "software";
  data: InferEntrySchema<"software">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
