import React from 'react';
import { Spade, Heart, Diamond, Club } from 'lucide-react';

interface LearningModuleContentProps {
  moduleId: string;
  themeClasses: {
    text: string;
    textSecondary: string;
    surface: string;
    border: string;
  };
}

export const LearningModuleContent: React.FC<LearningModuleContentProps> = ({ moduleId, themeClasses }) => {
  const renderContent = () => {
    switch (moduleId) {
      case 'basics-intro':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Welcome to Blackjack!</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Blackjack is a card game where the goal is to get a hand value as close to 21 as possible without going over,
                while beating the dealer's hand.
              </p>
              <ul className={`${themeClasses.textSecondary} space-y-2`}>
                <li>• Cards 2-10 are worth their face value</li>
                <li>• Face cards (J, Q, K) are worth 10</li>
                <li>• Aces are worth 1 or 11 (whichever is better)</li>
                <li>• The dealer must hit on 16 and stand on 17</li>
              </ul>
            </div>
          </div>
        );

      case 'card-values':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Understanding Card Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center shadow-sm">
                <Spade className="h-8 w-8 text-black mx-auto mb-2" />
                <div className="text-2xl font-bold text-black mb-1">A</div>
                <div className="text-sm text-gray-600">1 or 11</div>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center shadow-sm">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" fill="currentColor" />
                <div className="text-2xl font-bold text-red-600 mb-1">K</div>
                <div className="text-sm text-gray-600">10</div>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center shadow-sm">
                <Diamond className="h-8 w-8 text-red-600 mx-auto mb-2" fill="currentColor" />
                <div className="text-2xl font-bold text-red-600 mb-1">7</div>
                <div className="text-sm text-gray-600">7</div>
              </div>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center shadow-sm">
                <Club className="h-8 w-8 text-black mx-auto mb-2" />
                <div className="text-2xl font-bold text-black mb-1">2</div>
                <div className="text-sm text-gray-600">2</div>
              </div>
            </div>
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6 mt-6`}>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Calculating Hand Totals</h4>
              <p className={`${themeClasses.textSecondary} mb-3`}>
                Simply add up all card values. Aces count as 11 unless that would bust your hand, then they count as 1.
              </p>
              <div className="space-y-2">
                <p className={themeClasses.textSecondary}>Example: K + 7 = 17</p>
                <p className={themeClasses.textSecondary}>Example: A + 9 = 20 (soft)</p>
                <p className={themeClasses.textSecondary}>Example: A + 6 + 5 = 12 (Ace now counts as 1)</p>
              </div>
            </div>
          </div>
        );

      case 'dealer-rules':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>How the Dealer Plays</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                The dealer follows strict rules with no decisions to make:
              </p>
              <ul className={`${themeClasses.textSecondary} space-y-3`}>
                <li><strong className={themeClasses.text}>Must hit on 16 or less:</strong> The dealer has no choice and must take another card</li>
                <li><strong className={themeClasses.text}>Must stand on 17 or more:</strong> The dealer cannot take more cards</li>
                <li><strong className={themeClasses.text}>One card hidden:</strong> During play, one dealer card is face-down until all players finish</li>
              </ul>
            </div>
          </div>
        );

      case 'basic-strategy-intro':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>What is Basic Strategy?</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Basic strategy is a mathematically optimal way to play every hand in blackjack. It's based on millions of computer simulations
                and tells you the best decision for every possible combination of your hand and the dealer's up card.
              </p>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Using basic strategy is the mathematically optimal way to play blackjack, helping you make the best decision in every situation.
              </p>
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Key Point: Basic strategy is not about card counting - it's simply the mathematically correct play for each situation.
                </p>
              </div>
            </div>
          </div>
        );

      case 'hard-hands':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Playing Hard Hands</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                A hard hand is any hand that doesn't contain an Ace (or contains an Ace counted as 1). These are the most common hands you'll encounter.
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Key Rules for Hard Hands:</h4>
              <ul className={`${themeClasses.textSecondary} space-y-2`}>
                <li>• Always hit on 8 or less</li>
                <li>• Always stand on 17 or more</li>
                <li>• Hit on 12-16 vs dealer 7 or higher</li>
                <li>• Stand on 12-16 vs dealer 2-6</li>
                <li>• Double on 10-11 vs dealer 2-9</li>
              </ul>
            </div>
          </div>
        );

      case 'soft-hands':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Playing Soft Hands</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                A soft hand contains an Ace counted as 11. Soft hands are powerful because you can't bust by taking one more card.
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Key Rules for Soft Hands:</h4>
              <ul className={`${themeClasses.textSecondary} space-y-2`}>
                <li>• Always hit soft 17 or less</li>
                <li>• Always stand on soft 19 or more</li>
                <li>• Double soft 13-18 vs dealer 5-6</li>
                <li>• Soft 18 is tricky: Hit vs 9-A, stand vs 2-8</li>
              </ul>
            </div>
          </div>
        );

      case 'pairs':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Splitting Pairs</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                When you're dealt a pair, you have the option to split them into two separate hands.
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Splitting Strategy:</h4>
              <ul className={`${themeClasses.textSecondary} space-y-2`}>
                <li>• Always split Aces and 8s</li>
                <li>• Never split 10s, 5s, or 4s</li>
                <li>• Split 2s, 3s, 6s, 7s, 9s vs weak dealer cards (2-6)</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Remember: Splitting Aces and 8s is the most important splitting rule to memorize!
                </p>
              </div>
            </div>
          </div>
        );

      case 'counting-intro':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Introduction to Card Counting</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Card counting is a strategy used to determine when the player has an advantage. It's not about memorizing every card,
                but keeping a running tally of high vs low cards that have been played.
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>How It Works:</h4>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                When more high cards (10s and Aces) remain in the deck, the player has an advantage. When more low cards remain,
                the dealer has an advantage. By tracking this, you can understand when conditions are favorable or unfavorable.
              </p>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium">
                  Note: This is an educational training tool. Card counting is a skill that demonstrates mathematical principles and requires practice.
                </p>
              </div>
            </div>
          </div>
        );

      case 'hi-lo-system':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>The Hi-Lo Counting System</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Hi-Lo is the most popular and easy-to-learn card counting system. Each card is assigned a value:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-800 mb-2">+1</div>
                  <div className="text-sm text-green-700">2, 3, 4, 5, 6</div>
                  <div className="text-xs text-green-600 mt-2">Low Cards</div>
                </div>
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800 mb-2">0</div>
                  <div className="text-sm text-gray-700">7, 8, 9</div>
                  <div className="text-xs text-gray-600 mt-2">Neutral</div>
                </div>
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-800 mb-2">-1</div>
                  <div className="text-sm text-red-700">10, J, Q, K, A</div>
                  <div className="text-xs text-red-600 mt-2">High Cards</div>
                </div>
              </div>
              <p className={`${themeClasses.textSecondary}`}>
                Keep a running count by adding or subtracting these values as cards are dealt. A positive count means more high cards remain,
                giving you an advantage.
              </p>
            </div>
          </div>
        );

      case 'true-count':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>True Count Conversion</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                The running count needs to be adjusted based on how many decks remain unplayed. This adjusted count is called the "true count."
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Formula:</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-900 font-mono text-center text-lg">
                  True Count = Running Count ÷ Decks Remaining
                </p>
              </div>
              <p className={`${themeClasses.textSecondary} mb-4`}>Example: If your running count is +6 and there are 3 decks left, your true count is +2.</p>
              <p className={`${themeClasses.textSecondary}`}>
                The true count is more accurate for strategic decisions because it accounts for deck penetration.
              </p>
            </div>
          </div>
        );

      case 'deviations':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Strategy Deviations</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                When the count is very high or low, certain basic strategy plays should be adjusted. These are called "deviations" or "index plays."
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Common Deviations:</h4>
              <ul className={`${themeClasses.textSecondary} space-y-2`}>
                <li>• Insurance at +3 true count or higher</li>
                <li>• Stand on 16 vs 10 at 0 or higher</li>
                <li>• Stand on 12 vs 3 at +2 or higher</li>
                <li>• Double 11 vs Ace at +1 or higher</li>
              </ul>
            </div>
          </div>
        );

      case 'bankroll-management':
        return (
          <div className="space-y-6">
            <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Bankroll Management</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Proper bankroll management is crucial for long-term success in any game involving variance.
              </p>
              <h4 className={`text-lg font-semibold ${themeClasses.text} mb-3`}>Key Principles:</h4>
              <ul className={`${themeClasses.textSecondary} space-y-2`}>
                <li>• Set a budget before you play</li>
                <li>• Practice consistently to build your skills</li>
                <li>• Focus on accuracy before trying to increase speed</li>
                <li>• Take breaks to avoid fatigue and poor decisions</li>
                <li>• Track your results to analyze your performance</li>
              </ul>
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  Important: This is an educational training tool for learning blackjack strategy and mathematics.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${themeClasses.surface} border ${themeClasses.border} rounded-lg p-6`}>
            <p className={themeClasses.textSecondary}>Module content coming soon...</p>
          </div>
        );
    }
  };

  return <div className="prose max-w-none mb-8">{renderContent()}</div>;
};
