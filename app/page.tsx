import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
