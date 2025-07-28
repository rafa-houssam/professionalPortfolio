'use client'
import { useState, useEffect, useRef } from 'react';
import { Home, ArrowLeft, Search, Sparkles, Zap, Heart } from 'lucide-react';

export default function NotFoundPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [floatingShapes, setFloatingShapes] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize floating shapes
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 60 + 20,
      speed: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'][Math.floor(Math.random() * 5)]
    }));
    setFloatingShapes(shapes);

    // Animate floating shapes
    const animateShapes = () => {
      setFloatingShapes(prev => prev.map(shape => ({
        ...shape,
        x: shape.x + Math.cos(shape.angle) * shape.speed,
        y: shape.y + Math.sin(shape.angle) * shape.speed,
        angle: shape.angle + 0.01
      })));
    };

    const interval = setInterval(animateShapes, 50);

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Periodic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleGoHome = () => {
    // In a real Next.js app, you'd use next/router
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      {floatingShapes.map(shape => (
        <div
          key={shape.id}
          className="absolute rounded-full opacity-10 animate-bounce"
          style={{
            left: `${shape.x % window.innerWidth}px`,
            top: `${shape.y % window.innerHeight}px`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            animationDelay: `${shape.id * 0.1}s`,
            animationDuration: `${3 + shape.id * 0.2}s`
          }}
        ></div>
      ))}

      {/* Mouse follower effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out z-10"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Glitch effect container */}
        <div className={`transition-all duration-200 ${glitchActive ? 'animate-pulse filter blur-sm' : ''}`}>
          
          {/* Giant 404 with holographic effect */}
          <div className="relative mb-8">
            <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 leading-none tracking-tighter select-none">
              404
            </h1>
            {/* Holographic reflection */}
            <h1 className="absolute top-2 left-2 text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 leading-none tracking-tighter opacity-30 select-none">
              404
            </h1>
            {/* Glow effect */}
            <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-purple-500 leading-none tracking-tighter blur-3xl opacity-20 select-none">
              404
            </div>
          </div>

          {/* Animated subtitle */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-bounce">
              Oops! You've discovered the void
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for has vanished into the digital abyss, but don't worry – 
              even the best explorers sometimes take a wrong turn in cyberspace.
            </p>
          </div>

          {/* Interactive elements */}
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            
            {/* Home button with hover effects */}
            <button
              onClick={handleGoHome}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95"
            >
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Take Me Home</span>
              </div>
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
            </button>

            {/* Go back button */}
            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 bg-gray-800 border-2 border-gray-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Go Back</span>
              </div>
            </button>

            {/* Search suggestion */}
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Search Instead</span>
              </div>
            </button>
          </div>
        </div>

        {/* Fun stats/elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Still Awesome</h3>
            <p className="text-gray-400 text-sm">This 404 page is probably better than the page you were looking for anyway</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">You found this error page faster than most people find what they're looking for</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-center mb-3">
              <Heart className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Made with Love</h3>
            <p className="text-gray-400 text-sm">Even our error pages are crafted with attention to detail and a touch of magic</p>
          </div>
        </div>

        {/* Footer message */}
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          "Not all who wander are lost, but this page definitely is. Let's get you back on track!"
        </p>
      </div>

      {/* Ambient animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
    </div>
  );
}