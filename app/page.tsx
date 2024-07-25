import { AboutSection } from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/navBar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import ProjectSection from "@/components/ProjectSection";
import { AnimatedBeamDemo } from "@/components/Skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar/>
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-background p-20 md:shadow-xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="Container mt-24 mx-auto px-12 py-4 ">
      <HeroSection/>
      <AboutSection/>
      <AnimatedBeamDemo/>
      <ProjectSection/>
      </div>
      </div>
      <Footer/>
    </main>
  );
}
