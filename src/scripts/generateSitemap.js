import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const locales = ["uk"];
const baseUrl = "https://fumitrade.com.ua";

const staticRoutes = ["", "about-us", "services", "contact", "knowledge-base"];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream(resolve(process.cwd(), "public/sitemap.xml"));

  sitemapStream.pipe(writeStream);

  for (const locale of locales) {
    for (const route of staticRoutes) {
      const path = `/${locale}${route ? `/${route}` : ""}`;

      sitemapStream.write({ url: path, changefreq: "weekly", priority: 0.8 });
    }
  }

  sitemapStream.end();

  await streamToPromise(sitemapStream);

  console.log(" \x1b[1m\x1b[92m✓\x1b[0m File sitemap.xml created in '/public' directory");
  console.log("");
}

generateSitemap().catch(console.error);