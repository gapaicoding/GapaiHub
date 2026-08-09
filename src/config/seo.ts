const PRODUCTION_SITE_URL = "https://gapaihub.vercel.app";

function normalizeSiteUrl(value: string | undefined): string {
  const candidate = value?.trim() || PRODUCTION_SITE_URL;

  try {
    return new URL(candidate).origin;
  } catch {
    console.warn(
      `[SEO] VITE_SITE_URL tidak valid: "${candidate}". Menggunakan ${PRODUCTION_SITE_URL}.`,
    );

    return PRODUCTION_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(
  import.meta.env["VITE_SITE_URL"],
);

export const ALLOW_INDEXING =
  import.meta.env["VITE_ALLOW_INDEXING"] === "true";

export const SITE_NAME = "Gapai Mentorship";

export const DEFAULT_TITLE =
  "Gapai Mentorship | Ekosistem Pendidikan Anak";

export const DEFAULT_DESCRIPTION =
  "Temukan program yang sesuai kebutuhan anak melalui empat brand spesialis Gapai Mentorship: Brilia, Joytalk English, Kidspro ID, dan ELS School.";

export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";

export type SeoPageInput = {
  title?: string;
  description?: string;
  path?: string;
  imagePath?: string;
  type?: "website" | "article";
};

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, `${SITE_URL}/`).toString();
}

export function buildSeoHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  imagePath = DEFAULT_OG_IMAGE_PATH,
  type = "website",
}: SeoPageInput = {}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(imagePath);

  const robotsContent = ALLOW_INDEXING
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "noindex, nofollow, noarchive";

  return {
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "robots",
        content: robotsContent,
      },
      {
        name: "googlebot",
        content: robotsContent,
      },
      {
        property: "og:site_name",
        content: SITE_NAME,
      },
      {
        property: "og:locale",
        content: "id_ID",
      },
      {
        property: "og:type",
        content: type,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:url",
        content: canonicalUrl,
      },
      {
        property: "og:image",
        content: imageUrl,
      },
      {
        property: "og:image:secure_url",
        content: imageUrl,
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: `${SITE_NAME} — ekosistem pendidikan anak`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: imageUrl,
      },
      {
        name: "twitter:image:alt",
        content: `${SITE_NAME} — ekosistem pendidikan anak`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  };
}