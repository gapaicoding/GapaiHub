import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(currentDirectory, "..");
const publicDirectory = resolve(projectRoot, "public");

const mode = process.argv[2] || "production";
const fileEnvironment = loadEnv(mode, projectRoot, "");

function getEnvironmentValue(name) {
  return process.env[name] ?? fileEnvironment[name];
}

function normalizeSiteUrl(value) {
  const fallbackUrl = "http://localhost:3000";
  const candidate = value?.trim() || fallbackUrl;

  try {
    const url = new URL(candidate);

    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("Protocol harus menggunakan HTTP atau HTTPS.");
    }

    return url.origin;
  } catch {
    console.warn(`[SEO] VITE_SITE_URL tidak valid: "${candidate}". Menggunakan ${fallbackUrl}.`);

    return fallbackUrl;
  }
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const siteUrl = normalizeSiteUrl(getEnvironmentValue("VITE_SITE_URL"));

const allowIndexing = getEnvironmentValue("VITE_ALLOW_INDEXING") === "true";

const routes = [
  {
    path: "/",
    priority: "1.0",
    changeFrequency: "weekly",
  },
  {
    path: "/tentang-kami",
    priority: "0.8",
    changeFrequency: "monthly",
  },
  {
    path: "/program",
    priority: "0.9",
    changeFrequency: "weekly",
  },
  {
    path: "/program/brilia",
    priority: "0.8",
    changeFrequency: "monthly",
  },
  {
    path: "/program/joytalk-english",
    priority: "0.8",
    changeFrequency: "monthly",
  },
  {
    path: "/program/kidspro-id",
    priority: "0.8",
    changeFrequency: "monthly",
  },
  {
    path: "/program/els-school",
    priority: "0.8",
    changeFrequency: "monthly",
  },
  {
    path: "/blog",
    priority: "0.6",
    changeFrequency: "weekly",
  },
  {
    path: "/kontak",
    priority: "0.7",
    changeFrequency: "monthly",
  },
  {
    path: "/kebijakan-privasi",
    priority: "0.3",
    changeFrequency: "yearly",
  },
  {
    path: "/syarat-ketentuan",
    priority: "0.3",
    changeFrequency: "yearly",
  },
];

const sitemapEntries = routes
  .map(({ path, priority, changeFrequency }) => {
    const location = new URL(path, `${siteUrl}/`).toString();

    return [
      "  <url>",
      `    <loc>${escapeXml(location)}</loc>`,
      `    <changefreq>${changeFrequency}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapEntries,
  "</urlset>",
  "",
].join("\n");

const robots = allowIndexing
  ? ["User-agent: *", "Allow: /", "", `Sitemap: ${siteUrl}/sitemap.xml`, ""].join("\n")
  : [
      "User-agent: *",
      "Disallow: /",
      "",
      "# Website masih dalam tahap pengembangan atau review.",
      "# Aktifkan indexing melalui VITE_ALLOW_INDEXING=true.",
      "",
    ].join("\n");

await mkdir(publicDirectory, {
  recursive: true,
});

await Promise.all([
  writeFile(resolve(publicDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(resolve(publicDirectory, "robots.txt"), robots, "utf8"),
]);

console.log(`[SEO] Environment : ${mode}`);
console.log(`[SEO] Base URL    : ${siteUrl}`);
console.log(`[SEO] Indexing    : ${allowIndexing ? "enabled" : "disabled"}`);
console.log("[SEO] sitemap.xml dan robots.txt berhasil dibuat.");
