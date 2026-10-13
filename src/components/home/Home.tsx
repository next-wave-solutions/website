import { About } from "@/components/home/About";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Solutions } from "@/components/home/Solutions";
import { Technology } from "@/components/home/Technology";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionEffectsRoot } from "@/components/motion/MotionEffectsRoot";
import { MotionRevealRoot } from "@/components/motion/MotionRevealRoot";

export function Home() {
  return (
    <>
      <MotionRevealRoot />
      <MotionEffectsRoot />
      <Header tone="hero" />
      <main id="conteudo">
        <Hero />
        <Solutions />
        <Process />
        <Technology />
        <Projects />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

