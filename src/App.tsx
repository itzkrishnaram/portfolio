import type React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Honors from "./components/Honors"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <main className="space-y-12">
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Honors />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

