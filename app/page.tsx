'use client';

import { useState } from 'react';

export default function Home() {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [celebrationActive, setCelebrationActive] = useState(false);

  const handleOpenGift = () => {
    // dispatch event so the persistent audio player will play and hide its control
    try {
      document.dispatchEvent(new CustomEvent('play-starlight'));
    } catch {}
    setIsOpening(true);
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        setShowBirthday(true);
        setCelebrationActive(true);
      }, 1500);
    }, 1000);
  };

  if (!showBirthday) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white flex items-center justify-center overflow-hidden relative transition-all duration-1000">
        {/* Audio player moved to root layout for persistence across pages */}

        <div className="absolute inset-0 pointer-events-none">
          {[
            { emoji: '🎂', top: '10%', left: '5%' },
            { emoji: '🎉', top: '15%', left: '25%' },
            { emoji: '🎈', top: '12%', left: '45%' },
            { emoji: '✨', top: '18%', left: '65%' },
            { emoji: '💜', top: '14%', left: '85%' },
          ].map((deco, i) => (
            <div
              key={i}
              className="absolute text-4xl md:text-5xl opacity-40 transition-all duration-1000"
              style={{
                top: deco.top,
                left: deco.left,
                animation: `float ${4 + i}s ease-in-out infinite`,
              }}
            >
              {deco.emoji}
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4">
          {/* Gift Box Animation */}
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <button
              onClick={handleOpenGift}
              disabled={isOpening}
              className={`relative w-full h-full transition-all duration-1000 transform-gpu cursor-pointer ${
                isOpening ? 'scale-0' : 'scale-100 hover:scale-105'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl transition-all ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
                {/* Ribbon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-full bg-gradient-to-r from-purple-300 to-purple-500 opacity-80"></div>
                  <div className="absolute w-full h-10 bg-gradient-to-b from-purple-300 to-purple-500 opacity-80"></div>
                </div>

                {/* Bow */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-10 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full shadow-lg"></div>
                </div>

                {/* Icons */}
                <div className="absolute top-6 right-6 text-3xl animate-spin">✨</div>
                <div className="absolute bottom-6 left-6 text-3xl animate-pulse">💝</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl md:text-6xl animate-bounce">🎁</span>
                </div>
              </div>
            </button>

            {isOpened && (
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      animation: `float-up 2s ease-out forwards`,
                      left: `${50 + (Math.random() - 0.5) * 100}%`,
                      top: '100%',
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {['🎉', '✨', '💜', '🌸', '💖', '⭐'][i % 6]}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Text and button */}
          {!isOpening && (
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Ada Hadiahkuu
                </span>
              </h1>
              <p className="text-base md:text-lg text-purple-600 mb-8">(｡◠‿◠｡)</p>

              <button
                onClick={handleOpenGift}
                className="px-6 md:px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
              >
                Buka Cepatttt!!!
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-up {
            to {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white overflow-hidden transition-all duration-1000">
      {/* Floating decorations background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          { emoji: '🎈', top: '8%', left: '3%', delay: '0s', duration: '6s' },
          { emoji: '✨', top: '18%', right: '8%', delay: '1s', duration: '8s' },
          { emoji: '💜', top: '35%', left: '5%', delay: '2s', duration: '7s' },
          { emoji: '🎀', top: '50%', right: '3%', delay: '0.5s', duration: '9s' },
          { emoji: '🌸', top: '68%', left: '12%', delay: '1.5s', duration: '8s' },
          { emoji: '😈', top: '25%', left: '88%', delay: '2.5s', duration: '7s' },
          { emoji: '👑', top: '55%', right: '15%', delay: '0.3s', duration: '8.5s' },
          { emoji: '🎂', top: '80%', right: '10%', delay: '1.8s', duration: '6.5s' },
        ].map((deco, i) => (
          <div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-20 transition-all duration-1000"
            style={{
              top: deco.top,
              left: deco.left,
              right: deco.right,
              animation: `float ${deco.duration} ease-in-out infinite`,
              animationDelay: deco.delay,
            }}
          >
            {deco.emoji}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center space-y-8">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 transition-all duration-1000">
              Selamat Ulang Tahun Likaaa
            </h1>
          </div>

          <div className="flex justify-center gap-3 md:gap-4 flex-wrap text-3xl md:text-4xl px-2">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>
              🎂
            </span>
            <span className="animate-bounce" style={{ animationDelay: '0.15s' }}>
              🎉
            </span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>
              🎈
            </span>
            <span className="animate-bounce" style={{ animationDelay: '0.45s' }}>
              ✨
            </span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>
              💜
            </span>
          </div>

          {/* Message */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg transition-all duration-1000">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Terima kasih sudah jadi teman yang baik dan selalu membuat terhibur dengan berbagai yappinganmu, meskipun selalu ada gebrakan anehnya. Semoga hari ini penuh dengan senyuman dan momen indah, serta semoga tidak patteriang dan pagelliang mi.🤗💜
            </p>
          </div>

          {/* Confetti effect */}
          {celebrationActive && (
            <div className="fixed inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-xl md:text-2xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-20px',
                    animation: `fall ${2 + Math.random()}s linear forwards`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    opacity: 0.8,
                  }}
                >
                  {['🎉', '✨', '💜', '🎊', '🎈', '💝'][Math.floor(Math.random() * 6)]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
