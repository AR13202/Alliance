import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.allianceengineeringco.com";

  // Static pages with specific configuration from SEO recommendation
  const staticPages = [
    { route: "", priority: 1.0, changeFrequency: "monthly" as const },
    { route: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { route: "/client", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Dynamic products sitemap entries with customized priorities
  const productEntries = products.map((product) => {
    let priority = 0.7;
    if (product.id === "current-transformers" || product.id === "control-transformers") {
      priority = 0.9;
    } else if (
      product.id === "industrial-battery-chargers" ||
      product.id === "automatic-voltage-stabilizers"
    ) {
      priority = 0.8;
    }

    return {
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    };
  });

  // Blog posts sitemap entries dynamically generated
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productEntries, ...blogEntries];
}
