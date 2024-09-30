import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <Hero />
      <About />
      <main>
        <section id="projects" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Projects
          </h2>
          {/* card layouts in grid format */}
        </section>

        <section id="contact" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Contact Me
          </h2>
          {/* form with downloadable resume */}
        </section>
      </main>
    </div>
  );
  
}

export default App;
