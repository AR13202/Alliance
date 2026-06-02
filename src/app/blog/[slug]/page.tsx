import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blog";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, MessageSquare } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://www.allianceengineeringco.com/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  };
}

// ─── Markdown Rendering Engine ───────────────────────────────────────────────

function parseInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let currentText = text;
  let keyIdx = 0;

  while (currentText) {
    const boldMatch = currentText.match(/\*\*([^*]+)\*\*/);
    const linkMatch = currentText.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const codeMatch = currentText.match(/`([^`]+)`/);
    
    const matches = [
      boldMatch ? { type: "bold", index: boldMatch.index!, length: boldMatch[0].length, content: boldMatch[1] } : null,
      linkMatch ? { type: "link", index: linkMatch.index!, length: linkMatch[0].length, content: linkMatch[1], href: linkMatch[2] } : null,
      codeMatch ? { type: "code", index: codeMatch.index!, length: codeMatch[0].length, content: codeMatch[1] } : null,
    ].filter((m): m is any => m !== null);
    
    if (matches.length === 0) {
      parts.push(currentText);
      break;
    }
    
    matches.sort((a, b) => a.index - b.index);
    const earliest = matches[0];
    
    if (earliest.index > 0) {
      parts.push(currentText.slice(0, earliest.index));
    }
    
    if (earliest.type === "bold") {
      parts.push(<strong key={keyIdx++} className="font-bold text-[#1b1c1c]">{earliest.content}</strong>);
    } else if (earliest.type === "link") {
      const isMailto = earliest.href.startsWith("mailto:");
      parts.push(
        <a 
          key={keyIdx++} 
          href={earliest.href}
          className="text-primary font-bold hover:underline decoration-primary/30"
          target={isMailto ? undefined : "_blank"}
          rel={isMailto ? undefined : "noopener noreferrer"}
        >
          {earliest.content}
        </a>
      );
    } else if (earliest.type === "code") {
      parts.push(<code key={keyIdx++} className="px-1.5 py-0.5 bg-surface-container rounded text-primary font-mono text-xs">{earliest.content}</code>);
    }
    
    currentText = currentText.slice(earliest.index + earliest.length);
  }
  
  return parts.length > 0 ? parts : text;
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((block, index) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl sm:text-3xl font-extrabold text-primary font-headline mt-12 mb-6 tracking-tight border-b border-outline-variant/20 pb-3">
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl sm:text-2xl font-bold text-tertiary font-headline mt-8 mb-4 tracking-tight">
          {trimmed.slice(4)}
        </h3>
      );
    }
    
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const items = trimmed.split(/\n[\*\-]\s+/);
      return (
        <ul key={index} className="list-disc pl-6 space-y-3 my-6 text-secondary leading-relaxed font-body">
          {items.map((item, i) => {
            const text = item.replace(/^[\*\-]\s+/, "");
            return <li key={i}>{parseInlineMarkdown(text)}</li>;
          })}
        </ul>
      );
    }
    
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = trimmed.split(/\n\d+\.\s+/);
      return (
        <ol key={index} className="list-decimal pl-6 space-y-3 my-6 text-secondary leading-relaxed font-body">
          {items.map((item, i) => {
            const text = item.replace(/^\d+\.\s+/, "");
            return <li key={i}>{parseInlineMarkdown(text)}</li>;
          })}
        </ol>
      );
    }
    
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote key={index} className="border-l-4 border-primary bg-surface-container-low px-6 py-5 rounded-r-lg my-8 text-secondary italic text-base sm:text-lg leading-relaxed shadow-sm">
          {parseInlineMarkdown(trimmed.replace(/^>\s+/, ""))}
        </blockquote>
      );
    }
    
    if (trimmed.startsWith("|")) {
      const lines = trimmed.split("\n");
      const headers = lines[0].split("|").map(h => h.trim()).filter(Boolean);
      const rows = lines.slice(2).map(line => line.split("|").map(c => c.trim()).filter(Boolean));
      return (
        <div key={index} className="overflow-x-auto my-8 border border-outline-variant/20 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-outline-variant/20 text-sm">
            <thead className="bg-surface-container-low">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-6 py-4 text-left font-black text-primary uppercase tracking-wider text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 bg-white">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-surface-container-lowest transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-6 py-4 text-secondary font-medium">
                      {parseInlineMarkdown(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (trimmed.startsWith("$$") && trimmed.endsWith("$$")) {
      return (
        <div key={index} className="my-8 py-6 px-8 bg-surface-container-low rounded-xl border border-outline-variant/15 text-center font-mono text-primary font-bold text-lg sm:text-xl shadow-inner">
          {trimmed.slice(2, -2)}
        </div>
      );
    }
    
    return (
      <p key={index} className="text-secondary text-base sm:text-lg leading-relaxed mb-6 font-body">
        {parseInlineMarkdown(trimmed)}
      </p>
    );
  });
}

// ─── Component Entry ─────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const related = getRelatedBlogPosts(slug, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Alliance Engineering Company",
      "url": "https://www.allianceengineeringco.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alliance Engineering Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.allianceengineeringco.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.allianceengineeringco.com/blog/${slug}`
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-24 md:pt-32 flex-grow">
        {/* Dynamic Article JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Article Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase hover:opacity-75 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Content Column */}
            <article className="lg:col-span-8 bg-white border border-outline-variant/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
              {/* Header */}
              <header className="mb-8 border-b border-outline-variant/20 pb-8">
                <span className="bg-primary text-white text-[10px] font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-4 inline-block">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary font-headline tracking-tight leading-tight mb-6">
                  {post.title}
                </h1>
                
                {/* Meta details */}
                <div className="flex flex-wrap gap-6 text-secondary text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 opacity-75 text-primary" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 opacity-75 text-primary" />
                    {post.readingTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 opacity-75 text-primary" />
                    {post.author}
                  </span>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 bg-surface-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rendered markdown body */}
              <div className="prose max-w-none">
                {renderMarkdown(post.content)}
              </div>

              {/* Social Share Footer */}
              <footer className="pt-8 border-t border-outline-variant/20 mt-12 flex flex-wrap items-center justify-between gap-4">
                <p className="text-secondary text-sm font-bold flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-primary" /> Share this Technical Article
                </p>
                <div className="flex gap-3">
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.allianceengineeringco.com/blog/${slug}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-outline-variant/20 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all text-secondary"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=https://www.allianceengineeringco.com/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-outline-variant/20 hover:bg-black hover:text-white hover:border-black transition-all text-secondary"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </footer>
            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Related Posts Card */}
              {related.length > 0 && (
                <div className="bg-white border border-outline-variant/10 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-black text-primary uppercase tracking-wider mb-6 font-headline flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {related.map((rel) => (
                      <div key={rel.slug} className="group border-b border-outline-variant/10 pb-4 last:border-0 last:pb-0">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">{rel.category}</span>
                        <h4 className="font-bold text-tertiary group-hover:text-primary transition-colors leading-snug mb-2 font-headline">
                          <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                        </h4>
                        <p className="text-secondary text-xs line-clamp-2 leading-relaxed mb-4">{rel.excerpt}</p>
                        <Link href={`/blog/${rel.slug}`} className="text-xs font-bold text-primary hover:underline block uppercase tracking-wider">
                          Read Article →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation / CTA Card */}
              <div className="bg-gradient-to-br from-primary to-[#181747] text-white rounded-2xl p-8 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white blur-xl"></div>
                </div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-xl font-bold font-headline">Custom Panel Solutions</h3>
                  <p className="text-indigo-150 text-sm leading-relaxed">
                    Have non-standard system specifications? Alliance Engineering manufactures custom built-to-spec dry-type transformers, current transformers, and dimmers at our Chandigarh facility.
                  </p>
                  <div className="pt-2">
                    <Link 
                      href="/contact"
                      className="w-full text-center block bg-white text-primary font-headline font-bold py-3.5 rounded-md hover:bg-indigo-50 transition-colors shadow-lg shadow-black/10 text-sm uppercase tracking-wider"
                    >
                      Request a Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
