Installation: <code>bundle install</code> Run: <code>bundle exec jekyll serve</code>

Reference: https://github.com/luost26/academic-homepage

## Search engine setup

The site emits everything Google needs: `robots.txt`, an auto-generated
`/sitemap.xml` (jekyll-sitemap), per-page description / canonical / robots tags,
and a schema.org `Person` record on the home page. All of it is wired through
`_includes/seo.html` and configured under the `seo:` key in `_config.yml`.

One step has to be done by hand, once:

1. Open https://search.google.com/search-console and add a property of type
   **URL prefix** with the value `https://gaojie058.github.io/`.
2. Choose the **HTML tag** verification method. Google shows a tag like
   `<meta name="google-site-verification" content="AbCd123..." />`.
3. Copy only the `content` value into `seo.google_site_verification` in
   `_config.yml`, then commit and push. Wait for the Pages deploy to finish.
4. Back in Search Console, click **Verify**.
5. Once verified, go to **Sitemaps** and submit `sitemap.xml`.
6. Optionally use **URL Inspection** on `https://gaojie058.github.io/` and click
   **Request Indexing** to skip the queue for the home page.

Keep the verification token in place afterwards. Removing it un-verifies the
property and Search Console stops reporting.

### Adding a page

New pages inherit the site description automatically. Give a page its own
front matter when it deserves its own search result:

```yaml
description: One sentence, roughly 150 characters, shown under the title in Google.
keywords: comma, separated, terms
noindex: true    # keep the page out of search results
sitemap: false   # keep the page out of sitemap.xml
```

### Ranking on the name

`seo.same_as` in `_config.yml` lists external profiles that belong to the same
person. Google uses it to merge the home page, Google Scholar, LinkedIn, GitHub
and the rest into one identity, which is the main lever for ranking on the name
rather than a namesake. Add ORCID, DBLP, Semantic Scholar and institutional
profile pages there as they appear.
