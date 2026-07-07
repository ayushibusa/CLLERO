import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogData } from "@/lib/data";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, UserCheck } from "lucide-react";

interface ArticleDetailProps {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailProps) {
  const { slug } = params;
  const article = blogData.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Blog", href: "/blog" },
    { name: article.title }
  ];

  // Related articles (excluding current)
  const relatedArticles = blogData.filter((art) => art.slug !== slug).slice(0, 2);

  return (
    <div className="py-6">
      <PageHero
        title={article.title}
        description={`Written by ${article.author} on ${article.date} | Category: ${article.category}`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-left relative z-10">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Blog Directory
        </Link>

        {/* Feature Image */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-12 shadow-md">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rich text Content */}
        <article className="prose prose-cyan max-w-none text-text-body text-xs leading-relaxed space-y-6">
          <p className="font-semibold text-sm text-text-heading leading-relaxed">
            {article.excerpt}
          </p>
          <div className="border-l-4 border-primary pl-6 my-8 italic text-text-heading text-sm bg-primary/5 py-4 pr-4 rounded-r-xl">
            "{article.content}"
          </div>
          <p>
            CLLERO helps fitness operators automate operations, improve check-in paths, and stabilize recurring payment pipelines. If you are struggling with membership churn or managing calendars across multiple software applications, get in touch with our launch specialists to evaluate your platform requirements.
          </p>
        </article>

        {/* Author Bio Card */}
        <GlassCard className="border border-white/50 bg-white/60 p-6 flex flex-col sm:flex-row gap-6 items-center mt-16 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
            <UserCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-bold text-text-heading text-sm">Written by the {article.author}</h4>
            <p className="text-[10px] text-text-body leading-relaxed">
              We compile industry data, conversion trends, and software management tactics to help fitness entrepreneurs build highly profitable and sustainable gym locations.
            </p>
          </div>
        </GlassCard>

        {/* Related Articles */}
        <div className="mt-20 border-t border-primary/10 pt-16">
          <h3 className="text-xl font-bold text-text-heading mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedArticles.map((art) => (
              <GlassCard key={art.slug} hoverEffect className="p-0 overflow-hidden flex flex-col h-full border border-white/50 bg-white/60 group">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-bold text-text-heading text-sm mb-2 group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-[10px] text-text-body mb-4 line-clamp-2">{art.excerpt}</p>
                  <Link href={`/blog/${art.slug}`} className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
