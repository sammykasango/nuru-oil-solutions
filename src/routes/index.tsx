import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import {
  WhyChooseUs,
  QualityStory,
  Applications,
  IndustrialFeature,
  WellnessFeature,
} from "@/components/site/Story";
import {
  Wholesale,
  DistributorCTA,
  Testimonials,
  Faq,
} from "@/components/site/Business";
import {
  Contact,
  FinalCTA,
  Footer,
  BackToTop,
} from "@/components/site/Contact";

const TITLE = "Nuru Oils — Premium Industrial & Wellness Oils";
const DESCRIPTION =
  "Nuru Oils blends industrial-grade lubricants with pure wellness oils — precision formulated, lab tested, and available wholesale to distributors worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nuru Oils",
          description: DESCRIPTION,
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <WhyChooseUs />
        <QualityStory />
        <IndustrialFeature />
        <WellnessFeature />
        <Applications />
        <Wholesale />
        <DistributorCTA />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
