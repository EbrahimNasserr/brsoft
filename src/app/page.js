import About from "@/components/About";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Products from "@/components/Products/Products";
import LenisScroll from "@/components/LenisScroll";
import Services from "@/components/Services";
import Smooth from "@/components/Smooth/Smooth";

export default function Home() {

  return (
    <main>
      <LenisScroll />
      <Hero />
      <Counter />
      <Products />
      <Services />
      <About />
      <Smooth />
    </main>
  );
}
