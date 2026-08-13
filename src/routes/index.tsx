import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Process } from "@/components/portfolio/Process";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Leadership } from "@/components/portfolio/Leadership";
import { Toolbox } from "@/components/portfolio/Toolbox";
import { Currently } from "@/components/portfolio/Currently";
import { Contact, Footer } from "@/components/portfolio/Contact";

const TITLE = "Aadrika Deokathe — Product, Technology & Builder";
const DESC =
  "Aadrika Deokathe is a product and technology builder, founder and final-year Computer Engineering student exploring the intersection of technology, data and business.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Product & Technology · Founder · Computer Engineering Student",
          email: `mailto:${profile.email}`,
          url: "/",
          sameAs: [profile.github, profile.linkedin],
          alumniOf: { "@type": "CollegeOrUniversity", name: "NMIMS Indore" },
          address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Experience />
        <Work />
        <Leadership />
        <Toolbox />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
