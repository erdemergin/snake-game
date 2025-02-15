import React, { useState, useMemo } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Cake as SnakeIcon, Globe2, ChevronDown } from 'lucide-react';
import { type Snake, snakes } from './data/snakes';

function App() {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showContinentDropdown, setShowContinentDropdown] = useState(false);

  const filteredSnakes = useMemo(() => {
    if (!selectedContinent) return snakes;
    return snakes.filter(snake => 
      snake.continent.includes(selectedContinent)
    );
  }, [selectedContinent]);

  const current = filteredSnakes[currentIndex];

  const uniqueContinents = Array.from(
    new Set(snakes.flatMap(s => s.continent))
  ).sort();

  const handleGuess = (guess: boolean) => {
    setIsCorrect(guess === current.isVenomous);
    setShowResult(true);
  };

  const next = () => {
    setShowResult(false);
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * filteredSnakes.length);
    } while (nextIndex === currentIndex && filteredSnakes.length > 1);
    setCurrentIndex(nextIndex);
  };

  if (!current) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">No snakes match your filter</h2>
          <p className="text-gray-400">Please adjust your selection</p>
          <div className="relative inline-block">
            <button
              onClick={() => setShowContinentDropdown(!showContinentDropdown)}
              className="w-48 px-4 py-2 bg-gray-800 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span className="truncate">
                {selectedContinent || 'Select Continent'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showContinentDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showContinentDropdown && (
              <div className="absolute z-10 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2">
                <button
                  onClick={() => {
                    setSelectedContinent(null);
                    setShowContinentDropdown(false);
                  }}
                  className={`w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                    !selectedContinent ? 'bg-blue-600' : ''
                  }`}
                >
                  All Continents
                </button>
                {uniqueContinents.map((continent) => (
                  <button
                    key={continent}
                    onClick={() => {
                      setSelectedContinent(continent);
                      setShowContinentDropdown(false);
                    }}
                    className={`w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                      selectedContinent === continent ? 'bg-blue-600' : ''
                    }`}
                  >
                    <Globe2 className="w-5 h-5" />
                    <span>{continent}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setShowContinentDropdown(!showContinentDropdown)}
              className="w-48 px-4 py-2 bg-gray-800 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors"
            >
              <span className="truncate">
                {selectedContinent || 'All Continents'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showContinentDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showContinentDropdown && (
              <div className="absolute z-10 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2">
                <button
                  onClick={() => {
                    setSelectedContinent(null);
                    setShowContinentDropdown(false);
                  }}
                  className={`w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                    !selectedContinent ? 'bg-blue-600' : ''
                  }`}
                >
                  All Continents
                </button>
                {uniqueContinents.map((continent) => (
                  <button
                    key={continent}
                    onClick={() => {
                      setSelectedContinent(continent);
                      setShowContinentDropdown(false);
                    }}
                    className={`w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-700 transition-colors ${
                      selectedContinent === continent ? 'bg-blue-600' : ''
                    }`}
                  >
                    <Globe2 className="w-5 h-5" />
                    <span>{continent}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {!showResult ? (
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Is this snake venomous?
            </h1>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={current.imageUrl}
                alt={current.name}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <SnakeIcon className="w-5 h-5" />
                <span>{current.name}</span>
              </div>
              <div className="w-px h-6 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                <span>{current.continent.join(', ')}</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleGuess(true)}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => handleGuess(false)}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition-colors"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg ${isCorrect ? 'bg-green-600' : 'bg-red-600'} flex items-center gap-4`}>
              {isCorrect ? (
                <CheckCircle2 className="w-8 h-8" />
              ) : (
                <AlertCircle className="w-8 h-8" />
              )}
              <div>
                <h2 className="text-xl font-bold">
                  {isCorrect ? 'Correct!' : 'Wrong!'}
                </h2>
                <p>
                  {current.name} is {current.isVenomous ? '' : 'not '}venomous.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <SnakeIcon className="w-5 h-5" />
                <h3 className="text-xl font-semibold">{current.name}</h3>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mb-3">
                <Globe2 className="w-5 h-5" />
                <span>{current.continent.join(', ')}</span>
              </div>
              <p className="text-gray-300 mb-4">{current.description}</p>
              <button
                onClick={next}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors"
              >
                Next Snake
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 text-center text-gray-400 text-sm px-4 py-6 border-t border-gray-800">
          <p className="max-w-2xl mx-auto">
            Disclaimer: This snake identification quiz is for educational and entertainment purposes only. 
            Always consult local wildlife authorities, herpetologists, or medical professionals for accurate 
            snake identification and safety information. Never attempt to handle or approach snakes in the wild.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;