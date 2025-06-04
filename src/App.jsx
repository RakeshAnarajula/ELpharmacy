import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Feature';
import Convenience from './components/Convenience';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Features />
          <Convenience />
        </>
      )}
    </div>
  );
}

export default App;
