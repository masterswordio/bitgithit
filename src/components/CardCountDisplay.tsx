import React from 'react';
import { Calculator, TrendingUp, Eye } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';

export const CardCountDisplay: React.FC = () => {
  const { gameState } = useGame();
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();

  const getCountColor = (count: number) => {
    if (count > 2) return 'text-green-500';
    if (count < -2) return 'text-red-500';
    return 'text-blue-600';
  };

  const getAdvantage = (trueCount: number) => {
    const advantage = (trueCount * 0.5).toFixed(1);
    return advantage;
  };

  return (
    <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
      <h3 className={`${themeClasses.text} text-lg font-semibold mb-4 flex items-center`}>
        <Calculator className="h-5 w-5 mr-2 text-green-500" />
        Card Count (Hi-Lo)
      </h3>
      
      <div className="space-y-4">
        <div className={`${themeClasses.surface} rounded-lg p-4`}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className={`${themeClasses.textSecondary} text-sm`}>Running Count</div>
              <div className={`text-2xl font-bold ${getCountColor(gameState.runningCount)}`}>
                {gameState.runningCount > 0 ? '+' : ''}{gameState.runningCount}
              </div>
            </div>
            <div>
              <div className={`${themeClasses.textSecondary} text-sm`}>True Count</div>
              <div className={`text-2xl font-bold ${getCountColor(gameState.trueCount)}`}>
                {gameState.trueCount > 0 ? '+' : ''}{gameState.trueCount}
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses.surface} rounded-lg p-4`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`${themeClasses.textSecondary} text-sm`}>Player Advantage</span>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </div>
          <div className={`text-lg font-semibold ${getCountColor(gameState.trueCount)}`}>
            {getAdvantage(gameState.trueCount)}%
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className={`${themeClasses.textSecondary}`}>Cards Remaining</span>
            <span className={`${themeClasses.text}`}>{gameState.cardsRemaining}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(gameState.cardsRemaining / 312) * 100}%` }}
            />
          </div>
        </div>

        <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-3`}>
          <div className="flex items-center space-x-2 mb-1">
            <Eye className="h-4 w-4 text-blue-400" />
            <span className={`text-blue-500 text-sm font-medium`}>Strategy Guidance</span>
          </div>
          <p className={`text-blue-500 text-xs`}>
            {gameState.trueCount >= 2 ? 'Favorable conditions' :
             gameState.trueCount <= -2 ? 'Unfavorable conditions' :
             'Neutral conditions'}
          </p>
        </div>
      </div>
    </div>
  );
};