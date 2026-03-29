// import productCatalog from "./product.json";

// export interface ProductCustomization {
//   option: string;
//   details: string[];
//   standards: string[];
//   applications: string[];
// }

// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   image: string;
//   description: string;
//   specs: string[];
//   applications: string[];
//   technicalSpecs: { parameter: string; specification: string; unit: string }[];
//   thumbnails: string[];
//   brand: string;
//   sourceCategory: string;
//   standards: string[];
//   customizations: ProductCustomization[];
// }

// type RawProduct = (typeof productCatalog.products)[number];

// const imageThemes = [
//   ["0f172a", "38bdf8"],
//   ["1e293b", "14b8a6"],
//   ["111827", "f59e0b"],
//   ["1f2937", "60a5fa"],
// ];

// function makePlaceholderImage(name: string, index = 0) {
//   const [bg, fg] = imageThemes[index % imageThemes.length];
//   return `https://placehold.co/800x800/${bg}/${fg}?text=${encodeURIComponent(name)}`;
// }

// function parseTechSpec(item: string) {
//   const [rawParameter, ...rest] = item.split(":");
//   const parameter = rawParameter?.trim() || item.trim();
//   const specification = rest.join(":").trim();
//   return {
//     parameter,
//     specification: specification || parameter,
//     unit: "",
//   };
// }

// function deriveCategory(name: string) {
//   return /current transformer/i.test(name)
//     ? "Current Transformers"
//     : "Other Electrical Products";
// }

// function deriveDescription(product: RawProduct) {
//   const applicationSummary = product.applications.slice(0, 2).join(", ");
//   const specSummary = product.technicalSpecifications.slice(0, 2).join(" | ");
//   return `${product.name} engineered for ${applicationSummary}. ${specSummary}.`;
// }

// function mapProduct(product: RawProduct, index: number): Product {
//   const image = makePlaceholderImage(product.name, index);

//   return {
//     id: product.id,
//     name: product.name,
//     category: deriveCategory(product.name),
//     image,
//     description: deriveDescription(product),
//     specs: product.technicalSpecifications.slice(0, 4),
//     applications: product.applications,
//     technicalSpecs: product.technicalSpecifications.map(parseTechSpec),
//     thumbnails: [
//       makePlaceholderImage(`${product.name} View 1`, index + 1),
//       makePlaceholderImage(`${product.name} View 2`, index + 2),
//       makePlaceholderImage(`${product.name} View 3`, index + 3),
//     ],
//     brand: product.brand,
//     sourceCategory: product.category,
//     standards: product.standards,
//     customizations: product.customizations,
//   };
// }

// export const categories = ["All", "Current Transformers", "Other Electrical Products"];

// export const products: Product[] = productCatalog.products.map(mapProduct);

// export function getProductById(id: string): Product | undefined {
//   return products.find((product) => product.id === id);
// }

// export function getProductsByCategory(category: string): Product[] {
//   if (category === "All") return products;
//   return products.filter((product) => product.category === category);
// }

// export function getRelatedProducts(id: string, count = 3): Product[] {
//   const product = getProductById(id);
//   if (!product) return products.slice(0, count);

//   const sameCategory = products.filter(
//     (item) => item.category === product.category && item.id !== id,
//   );
//   const others = products.filter(
//     (item) => item.category !== product.category && item.id !== id,
//   );

//   return [...sameCategory, ...others].slice(0, count);
// }
