import About from "@/sections/About";
import ActionPlan from "@/sections/ActionPlan";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";
import Problem from "@/sections/Problem";
import VisionAndMission from "@/sections/VisionAndMission";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <VisionAndMission />
      <Problem />
      <ActionPlan />
      <Contact />
      <Footer />
    </main>
  );
}
