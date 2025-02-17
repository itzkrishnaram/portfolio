import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Honors from "@/components/Honors"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12 md:space-y-16">
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Honors />
      <Contact />
    </div>
  )
}

