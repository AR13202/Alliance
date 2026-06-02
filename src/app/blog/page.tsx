import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Electrical Resources & Engineering Blog | Alliance Engineering",
  description: "Technical guides, standard comparisons, and expert articles on current transformers, control transformers & industrial power systems for panel builders and engineers.",
  openGraph: {
    type: "website",
    title: "Electrical Resources & Engineering Blog | Alliance Engineering",
    description: "Technical guides, standard comparisons, and expert articles on current transformers, control transformers & industrial power systems for panel builders and engineers.",
    url: "https://www.allianceengineeringco.com/blog",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Technical Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Resources & Engineering Blog | Alliance Engineering",
    description: "Technical guides, standard comparisons, and expert articles on current transformers, control transformers & industrial power systems for panel builders and engineers.",
    images: ["/logo.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-24 md:pt-32 flex-grow">
        {/* Blog Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-[#181747] text-white py-16 md:py-24 px-6 md:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="max-w-3xl">
              <span className="text-indigo-200 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                Engineering Resources & Insights
              </span>
              <h1 id="blog-header" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline mb-6">
                The Alliance Knowledge Base
              </h1>
              <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
                Deep-dives into electrical panel design, current transformer sizing, compliance standard comparisons, and engineering best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Listing Grid */}
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/9] w-full bg-surface-container overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full z-10">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Meta Row */}
                  <div className="flex flex-wrap gap-4 text-secondary text-xs mb-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 opacity-65" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 opacity-65" />
                      {post.readingTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 opacity-65" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-primary font-headline mb-4 leading-tight group-hover:text-primary-container transition-colors">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low text-secondary text-[10px] font-bold uppercase tracking-wider rounded-md">
                        <Tag className="w-2.5 h-2.5 opacity-65" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-outline-variant/20 mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="bg-surface-container-low py-16 px-6 md:px-8 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary font-headline">Need Custom Engineering Specifications?</h2>
            <p className="text-secondary max-w-xl mx-auto leading-relaxed">
              Our engineering team works directly with panel builders and PSUs to design current and control transformers built to exact project needs.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-primary text-white font-headline font-bold rounded-md hover:bg-primary-container shadow-lg shadow-primary/10 transition-all hover:translate-y-[-2px]"
              >
                Consult Our Engineering Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
