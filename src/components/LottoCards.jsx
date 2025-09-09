import React, { useState, useRef, useEffect } from "react";

const LottoCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const lottoGames = [
    {
      amount: "₱103,957,780",
      drawDate: "Sept 1 | 9 PM",
      image: "/lotto/685-ultra-lotto.png"
    },
    {
      amount: "₱49,502,021",
      drawDate: "Sept 2 | 9 PM",
      image: "/lotto/642-lotto.png"
    },
    {
      amount: "₱15,812,013",
      drawDate: "Sept 2 | 9 PM",
      image: "/lotto/645-lotto.png"
    },
    {
      amount: "₱8,912,101",
      drawDate: "Sept 1 | 9 PM",
      image: "/lotto/649-lotto.png"
    },
    {
      amount: "₱63,729,339",
      drawDate: "Sept 2 | 9 PM",
      image: "/lotto/grand-lotto.png"
    }
  ];

  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 5;
    
    const width = window.innerWidth;
    if (width < 640) return 2; // mobile
    if (width < 1024) return 3; // medium
    return 5; // large
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < lottoGames.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleCards = lottoGames.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="bg-white rounded-lg shadow p-4 relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            style={{ top: '50%' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {currentIndex < lottoGames.length - cardsToShow && (
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            style={{ top: '50%' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div 
          ref={carouselRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-transform duration-300"
        >
          {visibleCards.map((game, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3 flex justify-center">
                <img 
                  src={game.image} 
                  alt="Lotto Game"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="text-lg font-bold text-white bg-red-500 rounded-xl mb-2 px-2 py-1 text-center w-full">
                {game.amount}
              </div>

              <div className="text-sm text-gray-700 mb-1 text-center font-semibold">{game.drawDate}</div>
              <div className="text-xs text-gray-500 text-center">Draw Date | Time</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: lottoGames.length - cardsToShow + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LottoCards;