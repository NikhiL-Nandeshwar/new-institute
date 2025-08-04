import About from "@/components/custom/about";
import Contact from "@/components/custom/contact";
import Courses from "@/components/custom/courses";
import Hero from "@/components/custom/hero";
import Results from "@/components/custom/results";
import Reviews from "@/components/custom/reviews";
import Teachers from "@/components/custom/teachers";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Results/>
      <About />
      <Courses />
      <Teachers />
      <Reviews />
      <Contact />
    </main>
  );
}
