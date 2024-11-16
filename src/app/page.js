import About from "@/components/About";
import Counter from "@/components/Counter";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LenisScroll from "@/components/LenisScroll";
import Services from "@/components/Services";

export default function Home() {

  return (
    <main>
      <LenisScroll />
      <Hero />
      <Counter />
      <About />
      <Services />
      <Features />
    </main>
  );
}
