import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, Cake, Star } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    
    // Generate floating hearts
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`
    }));
    setFloatingHearts(hearts);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Hearts */}
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: '6s'
            }}
          >
            <Heart className="text-pink-200 opacity-20 w-6 h-6" fill="currentColor" />
          </div>
        ))}
        
        {/* Sparkles */}
        <div className="absolute top-20 left-10 animate-twinkle">
          <Sparkles className="text-yellow-200 w-8 h-8" />
        </div>
        <div className="absolute top-32 right-20 animate-twinkle animation-delay-1000">
          <Star className="text-pink-200 w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute bottom-40 left-16 animate-twinkle animation-delay-2000">
          <Sparkles className="text-purple-200 w-6 h-6" />
        </div>
        <div className="absolute top-1/2 right-10 animate-twinkle animation-delay-1500">
          <Star className="text-yellow-200 w-5 h-5" fill="currentColor" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className={`transform transition-all duration-2000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Cake className="text-pink-200 w-12 h-12 mr-4 animate-bounce" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent">
                Happy Birthday
              </h1>
              <Gift className="text-purple-200 w-12 h-12 ml-4 animate-bounce animation-delay-500" />
            </div>
            
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-6xl font-script text-pink-100 mb-4">
                My Beautiful
              </h2>
              <div className="inline-block relative">
                <Heart className="absolute -top-2 -left-4 text-pink-300 w-8 h-8 animate-pulse" fill="currentColor" />
                <h2 className="text-5xl md:text-7xl font-bold text-white relative">
                  Girlfriend
                </h2>
                <Heart className="absolute -top-2 -right-4 text-pink-300 w-8 h-8 animate-pulse animation-delay-500" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Birthday Message */}
          <div className={`transform transition-all duration-2000 delay-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <p className="text-xl md:text-2xl text-pink-100 leading-relaxed mb-6">
                On this special day, I want you to know that you light up my world like no one else can. 
                Your smile is my favorite sight, your laugh is my favorite sound, and your happiness is my greatest wish.
              </p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                <Heart className="mx-4 text-pink-300 w-6 h-6" fill="currentColor" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              </div>
              
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-8">
                May this new year of your life be filled with endless joy, beautiful moments, 
                and all the love your heart can hold. You deserve every wonderful thing this world has to offer.
              </p>
              
              <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                I Love You More Than Words Can Say! 💕
              </div>
              
              <div className="text-lg text-pink-200">
                Forever yours, always and forever ✨
              </div>
            </div>
          </div>

          {/* Interactive Hearts */}
          <div className={`transform transition-all duration-2000 delay-2000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center space-x-4 mt-8">
              <button className="group p-4 bg-pink-500/20 rounded-full backdrop-blur-sm hover:bg-pink-500/30 transition-all duration-300 transform hover:scale-110">
                <Heart className="w-8 h-8 text-pink-200 group-hover:text-pink-100 transition-colors" fill="currentColor" />
              </button>
              <button className="group p-4 bg-purple-500/20 rounded-full backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110">
                <Sparkles className="w-8 h-8 text-purple-200 group-hover:text-purple-100 transition-colors" />
              </button>
              <button className="group p-4 bg-pink-500/20 rounded-full backdrop-blur-sm hover:bg-pink-500/30 transition-all duration-300 transform hover:scale-110">
                <Gift className="w-8 h-8 text-pink-200 group-hover:text-pink-100 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}

export default App;