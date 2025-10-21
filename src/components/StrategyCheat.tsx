import React from 'react';
import { Target, AlertCircle } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';

export const StrategyCheat: React.FC = () => {
  const { gameState } = useGame();
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();

  const getRecommendation = () => {
    const playerHand = gameState.playerHands[gameState.currentHandIndex];
    const dealerUpcard = gameState.dealerHand.cards[0];
    
    if (!playerHand || !dealerUpcard || gameState.gamePhase !== 'playing') {
      return {
        action: 'DEAL CARDS',
        reason: 'Start a new hand to get strategy recommendations.',
        confidence: 'N/A',
        color: 'text-blue-500'
      };
    }

    const playerValue = playerHand.value;
    const dealerValue = dealerUpcard.value === 11 ? 1 : dealerUpcard.value; // Treat dealer Ace as 1 for upcard
    const isPlayerSoft = playerHand.isSoft && playerValue <= 21;
    const isPair = playerHand.cards.length === 2 && playerHand.cards[0].rank === playerHand.cards[1].rank;

    // Basic Strategy Logic
    if (isPair && gameState.canSplit) {
      const pairRank = playerHand.cards[0].rank;
      if (pairRank === 'A' || pairRank === '8') {
        return {
          action: 'SPLIT',
          reason: `Always split ${pairRank}s. This is a fundamental rule.`,
          confidence: 'High',
          color: 'text-purple-500'
        };
      }
      if (pairRank === '10' || pairRank === 'J' || pairRank === 'Q' || pairRank === 'K') {
        return {
          action: 'STAND',
          reason: 'Never split 10-value cards. 20 is an excellent hand.',
          confidence: 'High',
          color: 'text-green-500'
        };
      }
    }

    if (isPlayerSoft) {
      if (playerValue >= 19) {
        return {
          action: 'STAND',
          reason: `Soft ${playerValue} is a strong hand.`,
          confidence: 'High',
          color: 'text-green-500'
        };
      }
      if (playerValue === 18 && dealerValue >= 9) {
        return {
          action: 'HIT',
          reason: 'Soft 18 vs 9/10/A should be hit to improve.',
          confidence: 'High',
          color: 'text-orange-500'
        };
      }
      if (playerValue <= 17 && dealerValue >= 4 && dealerValue <= 6 && gameState.canDouble) {
        return {
          action: 'DOUBLE',
          reason: `Double soft ${playerValue} vs weak dealer card.`,
          confidence: 'High',
          color: 'text-blue-500'
        };
      }
    } else {
      // Hard hands
      if (playerValue >= 17) {
        return {
          action: 'STAND',
          reason: `Hard ${playerValue} is strong enough to stand.`,
          confidence: 'High',
          color: 'text-green-500'
        };
      }
      if (playerValue === 11 && gameState.canDouble) {
        return {
          action: 'DOUBLE',
          reason: 'Always double 11 when possible.',
          confidence: 'High',
          color: 'text-blue-500'
        };
      }
      if (playerValue === 10 && dealerValue <= 9 && gameState.canDouble) {
        return {
          action: 'DOUBLE',
          reason: 'Double 10 vs 2-9.',
          confidence: 'High',
          color: 'text-blue-500'
        };
      }
      if (playerValue >= 12 && playerValue <= 16) {
        if (dealerValue >= 2 && dealerValue <= 6) {
          return {
            action: 'STAND',
            reason: `Stand ${playerValue} vs weak dealer card (${dealerUpcard.rank}).`,
            confidence: 'Medium',
            color: 'text-green-500'
          };
        } else {
          return {
            action: 'HIT',
            reason: `Hit ${playerValue} vs strong dealer card (${dealerUpcard.rank}).`,
            confidence: 'Medium',
            color: 'text-orange-500'
          };
        }
      }
    }

    return {
      action: 'HIT',
      reason: `With ${playerValue}, you should hit to improve your hand.`,
      confidence: 'Medium',
      color: 'text-orange-500'
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
      <h3 className={`${themeClasses.text} text-lg font-semibold mb-4 flex items-center`}>
        <Target className="h-5 w-5 mr-2 text-green-500" />
        Strategy Recommendation
      </h3>
      
      <div className="space-y-4">
        <div className={`${themeClasses.surface} rounded-lg p-4`}>
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <span className={`${themeClasses.text} font-medium`}>Optimal Play</span>
          </div>
          <div className={`text-2xl font-bold ${recommendation.color} mb-2`}>
            {recommendation.action}
          </div>
          <p className={`${themeClasses.textSecondary} text-sm`}>{recommendation.reason}</p>
          <div className="mt-2">
            <span className={`text-xs ${themeClasses.surface} text-green-700 px-2 py-1 rounded`}>
              Confidence: {recommendation.confidence}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className={`${themeClasses.text} font-medium text-sm`}>Action Legend</h4>
          <div className={`text-xs ${themeClasses.textSecondary}`}>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div className="bg-orange-500/20 p-1 rounded text-orange-700">Hit</div>
              <div className="bg-green-500/20 p-1 rounded text-green-700">Stand</div>
              <div className="bg-blue-500/20 p-1 rounded text-blue-700">Double</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};