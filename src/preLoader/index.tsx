import { useEffect, useState } from "react";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulates the page asset loading sequence
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1800); // Gives enough time for the premium entrance animation
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#121212] select-none">
      {/* Premium Loader Graphic */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Outer Pulsing Wave */}
        <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping opacity-75" />
        
        {/* Middle Rotating Segment Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-t-orange-500 border-r-transparent border-b-zinc-800 border-l-transparent animate-spin" style={{ animationDuration: '1.2s' }} />
        
        {/* Inner Core Accent */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 opacity-20 animate-pulse" />
        
        {/* Center Aesthetic Sparkle/Cross Symbol (Clinically Premium look) */}
        <div className="absolute w-1 h-4 bg-orange-500 rounded-full"></div>
        <div className="absolute h-1 w-4 bg-orange-500 rounded-full"></div>
      </div>

      {/* Brand Presentation / Text Animation */}
      <div className="text-center">
        <h3 className="text-xl font-bold tracking-widest text-white uppercase sm:text-2xl">
          DENTA<span className="text-orange-500">.</span>
        </h3>
        
        {/* Loading Bar Progression Tracker */}
        <div className="w-32 h-[2px] bg-zinc-800 rounded-full mt-3 mx-auto overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full w-full origin-left animate-[loading-bar_1.5s_ease-in-out_infinite]" />
        </div>
        
        <p className="mt-2 text-xs font-medium tracking-wider text-zinc-500 uppercase">
          Studio Loading
        </p>
      </div>
    </div>
  );
};