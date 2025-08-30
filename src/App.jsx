import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CollectionGrid from "./components/CollectionGrid";
import Editorial from "./components/Editorial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(120,120,120,0.14),rgba(0,0,0,0))]" />
      <Navbar />
      <main>
        <Hero />
        <CollectionGrid />
        <Editorial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
