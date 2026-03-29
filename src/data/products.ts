import productCatalog from "./product.json";

export interface ProductMedia {
  images: {
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    label: string;
  }[];
  datasheet: { label: string; url: string };
  brochure: { label: string; url: string };
}

export interface ProductHighlight {
  label: string;
  value: string;
}

export interface ProductApplication {
  label: string;
  verified: boolean;
}

export interface ProductCustomization {
  option: string;
  description: string;
  details: string[];
  standards: string[];
  applications: string[];
}

export interface ProductSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Product {
  id: string;
  slug: string;
  serialNumber: string;
  modelId: string;
  standard: string;
  status: string;
  name: string;
  shortDescription: string;
  description: string;
  categories: string[];
  brand: string;
  media: ProductMedia;
  highlights: ProductHighlight[];
  specs: { parameter: string; specification: string; unit: string }[];
  technicalSpecs: { parameter: string; specification: string; unit: string }[];
  applications: ProductApplication[];
  applicationNote: string;
  standards: string[];
  customizations: ProductCustomization[];
  relatedProducts: string[];
  seo: ProductSeo;
  // Legacy compat fields consumed by existing UI components
  image: string;
  thumbnails: string[];
  sourceCategory: string;
  category: string;
}

type RawProduct = (typeof productCatalog.products)[number];

const imageThemes = [
  ["0f172a", "38bdf8"],
  ["1e293b", "14b8a6"],
  ["111827", "f59e0b"],
  ["1f2937", "60a5fa"],
];

function makePlaceholderImage(name: string, index = 0) {
  const [bg, fg] = imageThemes[index % imageThemes.length];
  return `https://placehold.co/800x800/${bg}/${fg}?text=${encodeURIComponent(name)}`;
}

/**
 * Resolve the primary image for a product.
 * Uses the media.images array from JSON if available,
 * falling back to a placeholder when images are not yet uploaded.
 */
function resolvePrimaryImage(product: RawProduct, index: number): string {
  const images = product.media?.images ?? [];
  const primary = images.find((img) => img.isPrimary) ?? images[0];
  if (primary?.url) return primary.url;
  return makePlaceholderImage(product.name, index);
}

/**
 * Resolve thumbnail images (all non-primary images, or placeholders).
 */
function resolveThumbnails(product: RawProduct, index: number): string[] {
  const images = product.media?.images ?? [];
  if (images.length > 0) {
    return images.map((img) => img.url);
  }
  return [
    makePlaceholderImage(`${product.name} View 1`, index + 1),
    makePlaceholderImage(`${product.name} View 2`, index + 2),
    makePlaceholderImage(`${product.name} View 3`, index + 3),
  ];
}

/**
 * technicalSpecifications in the new JSON is already structured as
 * { parameter, specification, unit }. Map it directly, normalising
 * null units to empty string for TypeScript compatibility.
 */
function mapTechSpecs(
  specs: RawProduct["technicalSpecifications"],
): { parameter: string; specification: string; unit: string }[] {
  return specs.map((s) => ({
    parameter: s.parameter,
    specification: s.specification,
    unit: s.unit ?? "",
  }));
}

/**
 * applications in the new JSON is an array of { label, verified }.
 * Map it directly.
 */
function mapApplications(
  apps: RawProduct["applications"],
): ProductApplication[] {
  return apps.map((a) => ({
    label: a.label,
    verified: a.verified,
  }));
}

/**
 * Primary display category: first entry in the categories array that
 * isn't "Manufactured Products" or "ALECS Brand Products", so the UI
 * shows the most specific category. Falls back to first category.
 */
function resolvePrimaryCategory(categories: string[]): string {
  const generic = new Set(["Manufactured Products", "ALECS Brand Products"]);
  return categories.find((c) => !generic.has(c)) ?? categories[0] ?? "Other";
}

function mapProduct(product: RawProduct, index: number): Product {
  const image = resolvePrimaryImage(product, index);
  const thumbnails = resolveThumbnails(product, index);
  const technicalSpecs = mapTechSpecs(product.technicalSpecifications);
  const applications = mapApplications(product.applications);
  const primaryCategory = resolvePrimaryCategory(product.categories);

  return {
    // Core identity
    id: product.id,
    slug: product.slug,
    serialNumber: product.serialNumber,
    modelId: product.modelId,
    standard: product.standard,
    status: product.status,

    // Content
    name: product.name,
    shortDescription: product.shortDescription,
    description: product.description,
    brand: product.brand,

    // Categories
    categories: product.categories,
    category: primaryCategory,           // primary category for filtering UI
    sourceCategory: product.categories[0], // top-level catalog category

    // Media
    media: product.media,
    image,                               // resolved primary image URL
    thumbnails,                          // all image URLs

    // Specs
    highlights: product.highlights,
    specs: technicalSpecs.slice(0, 4),   // short list for cards
    technicalSpecs,                      // full table for product page

    // Applications
    applications,
    applicationNote: product.applicationNote,

    // Standards & customizations
    standards: product.standards,
    customizations: product.customizations,

    // Related & SEO
    relatedProducts: product.relatedProducts,
    seo: product.seo,
  };
}

// ─── Derived category list from JSON ────────────────────────────────────────

const genericCategories = new Set([
  "Manufactured Products",
  "ALECS Brand Products",
]);

const specificCategories = Array.from(
  new Set(
    productCatalog.products.flatMap((p) =>
      p.categories.filter((c) => !genericCategories.has(c)),
    ),
  ),
);

export const categories = ["All", ...specificCategories];

// ─── Mapped products ─────────────────────────────────────────────────────────

export const products: Product[] = productCatalog.products.map(mapProduct);

// ─── Lookup helpers ───────────────────────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((product) => product.categories.includes(category));
}

/**
 * Returns related products using the explicit relatedProducts ID list from
 * JSON first, then falls back to same-category products if needed.
 */
export function getRelatedProducts(id: string, count = 3): Product[] {
  const product = getProductById(id);
  if (!product) return products.slice(0, count);

  // Use the curated list from JSON
  const fromJson = product.relatedProducts
    .map((relId) => getProductById(relId))
    .filter((p): p is Product => p !== undefined);

  if (fromJson.length >= count) return fromJson.slice(0, count);

  // Top up with same-category products if the list is short
  const usedIds = new Set([id, ...fromJson.map((p) => p.id)]);
  const topUp = products.filter(
    (p) =>
      !usedIds.has(p.id) &&
      p.categories.some((c) => product.categories.includes(c)),
  );

  return [...fromJson, ...topUp].slice(0, count);
}