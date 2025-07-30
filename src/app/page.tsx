import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Courses from "@/components/custom/courses";
import Hero from "@/components/custom/hero";
import Reviews from "@/components/custom/reviews";
import Teachers from "@/components/custom/teachers";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Reviews />
      <Contact />
    </main>
  );
}
