import * as React from "react";

const FILTERS = ["All", "Case Studies", "Blog", "Process"] as const;
type Filter = (typeof FILTERS)[number];

const img = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/600?grayscale`;

export default function InsightsGrid() {
  const [active, setActive] = React.useState<Filter>("All");
  const show = (cat: Filter) => active === "All" || active === cat;

  return (
    <>
      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-y border-outline-variant -mx-gutter px-gutter mb-section-padding-v">
        <div className="flex items-center gap-stack-lg h-16 overflow-x-auto no-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-label-mono text-label-mono whitespace-nowrap transition-colors pb-1 ${
                active === f
                  ? "text-primary-fixed border-b border-primary-fixed"
                  : "text-on-surface-variant hover:text-primary-fixed"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-card-gap">
        {/* Featured — Case Study */}
        {show("Case Studies") && (
          <article className="md:col-span-8 group bg-surface-card border border-outline-variant overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 overflow-hidden aspect-video md:aspect-auto">
              <img
                src={img("ecommerce")}
                alt="Rebuilding a Broken E-commerce Site"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="md:w-1/2 p-stack-md flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-stack-md">
                  <span className="font-label-mono text-label-mono text-primary-fixed border border-primary-fixed px-2 py-1">
                    Case Study
                  </span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    12 Min Read
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-sm md:text-headline-lg text-primary mb-stack-md leading-tight">
                  Rebuilding a Broken E-commerce Site
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  We took a legacy platform with 4s load times and transformed it
                  into a lightning-fast headless experience. Here is exactly how
                  we handled the migration without losing SEO rank.
                </p>
              </div>
              <a className="inline-flex items-center gap-2 font-button text-primary-fixed mt-stack-lg group/link" href="#">
                Read Full Breakdown
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        )}

        {/* Sidebar — Blog */}
        {show("Blog") && (
          <article className="md:col-span-4 group bg-surface-card border border-outline-variant overflow-hidden flex flex-col">
            <div className="aspect-video overflow-hidden">
              <img
                src={img("fail")}
                alt="Why Most Small Business Websites Fail"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="p-stack-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-mono text-label-mono text-secondary border border-outline-variant px-2 py-1">
                    Blog
                  </span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    05.20.24
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  Why Most Small Business Websites Fail
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  It's rarely about the aesthetic. We analyze why technical debt
                  and poor UX strategy kill conversion rates before the first
                  scroll.
                </p>
              </div>
              <a className="inline-flex items-center gap-2 font-button text-primary-fixed mt-stack-md group/link" href="#">
                View Post
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        )}

        {/* Row 3 — three equal cards */}
        {show("Process") && (
          <SmallCard
            seed="shipfast"
            tag="Process"
            title="The 'Ship Fast' Mentality"
          />
        )}
        {show("Blog") && (
          <SmallCard
            seed="nextjs"
            tag="Tech Deep Dive"
            title="Scaling Next.js for Enterprise"
          />
        )}
        {show("Blog") && (
          <SmallCard
            seed="brutalism"
            tag="Design"
            title="Brutalism in Modern UI"
          />
        )}
      </div>
    </>
  );
}

function SmallCard({
  seed,
  tag,
  title,
}: {
  seed: string;
  tag: string;
  title: string;
}) {
  return (
    <article className="md:col-span-4 group bg-surface-card border border-outline-variant overflow-hidden flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img(seed)}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="p-stack-md">
        <span className="font-label-mono text-label-mono text-on-surface-variant mb-2 block uppercase">
          {tag}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
          {title}
        </h3>
        <a className="font-button text-button text-primary uppercase flex items-center gap-2" href="#">
          Read More
          <span className="material-symbols-outlined text-[18px]">north_east</span>
        </a>
      </div>
    </article>
  );
}
