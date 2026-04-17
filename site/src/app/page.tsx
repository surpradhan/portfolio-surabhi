import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
import Now from "@/components/Now";
import Connect from "@/components/Connect";

const Rule = () => (
  <div className="h-px mx-6 sm:mx-12 lg:mx-24 bg-border/60" />
);

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Rule />
        <Stats />
        <Rule />
        <About />
        <Rule />
        <Work />
        <Rule />
        <Writing />
        <Rule />
        <Now />
        <Rule />
        <Connect />
      </main>
      <footer className="px-6 sm:px-12 lg:px-24 py-8 border-t border-border/40">
        <p className="text-xs font-mono text-foreground/15 tracking-[0.2em]">
          © {new Date().getFullYear()} SURABHI PRADHAN
        </p>
      </footer>
    </>
  );
}
