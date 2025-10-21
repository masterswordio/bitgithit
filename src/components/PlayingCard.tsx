import React from 'react';
import { Card } from '../contexts/GameContext';
import { Heart, Diamond, Club, Spade } from 'lucide-react';

interface PlayingCardProps {
  card: Card;
  hidden?: boolean;
}

export const PlayingCard: React.FC<PlayingCardProps> = ({ card, hidden = false }) => {
  const getSuitIcon = () => {
    switch (card.suit) {
      case 'hearts':
        return <Heart className="h-6 w-6" fill="currentColor" />;
      case 'diamonds':
        return <Diamond className="h-6 w-6" fill="currentColor" />;
      case 'clubs':
        return <Club className="h-6 w-6" fill="currentColor" />;
      case 'spades':
        return <Spade className="h-6 w-6" fill="currentColor" />;
    }
  };

  const getSuitColor = () => {
    return card.suit === 'hearts' || card.suit === 'diamonds' ? 'text-red-600' : 'text-black';
  };

  if (hidden) {
    return (
      <div className="w-24 h-36 bg-blue-900 border-2 border-blue-700 rounded-lg flex items-center justify-center">
        <div className="text-blue-300 text-xs">HIDDEN</div>
      </div>
    );
  }

  return (
    <div className="w-24 h-36 bg-white border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
      <div className={`text-2xl font-bold ${getSuitColor()}`}>
        {card.rank}
      </div>
      <div className={getSuitColor()}>
        {getSuitIcon()}
      </div>
    </div>
  );
};