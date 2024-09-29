import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <main>
        <section id="about" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800">About Me</h2>
          <p className="text-center mt-4 text-lg text-gray-600">
            I’m a student web developer with a passion for building responsive, user-friendly applications.
            {/*implement card carousel of my life journey*/}
          </p>
        </section>

        <section id="projects" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800">Projects</h2>
          {/* card layouts in grid format */}
        </section>

        <section id="contact" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800">Contact Me</h2>
          {/* form with downloadable resume */}
        </section>
      </main>
    </div>
  );
}

export default App;
