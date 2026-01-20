import Hero from "@/components/hero";
import About from "@/components/About";
import AlmsServices from "@/components/AlmsServices";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <About />
      <AlmsServices />
      <Partners />
      <Portfolio />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
