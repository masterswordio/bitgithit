import React from 'react';
import { Target, Calculator, Award } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

export const Stats: React.FC = () => {
  const { user } = useUser();
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();

  const formatPercentage = (value: number) => `${(value * 100).toFixed(1)}%`;
  const formatNumber = (value: number) => value.toLocaleString();

  return (
    <div className={`${themeClasses.bg} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className={`text-3xl font-bold ${themeClasses.text} mb-8`}>Performance Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`${themeClasses.cardBg} border ${themeClasses.border} rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${themeClasses.textSecondary} text-sm font-medium`}>Games Played</p>
                <p className={`text-2xl font-bold ${themeClasses.text}`}>{formatNumber(user.stats.gamesPlayed)}</p>
              </div>
              <Target className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className={`${themeClasses.cardBg} border ${themeClasses.border} rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${themeClasses.textSecondary} text-sm font-medium`}>Win Rate</p>
                <p className={`text-2xl font-bold ${themeClasses.text}`}>{formatPercentage(user.stats.winRate)}</p>
              </div>
              <Award className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className={`${themeClasses.cardBg} border ${themeClasses.border} rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${themeClasses.textSecondary} text-sm font-medium`}>Strategy Accuracy</p>
                <p className={`text-2xl font-bold ${themeClasses.text}`}>{formatPercentage(user.stats.strategyAccuracy)}</p>
              </div>
              <Award className="h-8 w-8 text-orange-500" />
            </div>
          </div>

          <div className={`${themeClasses.cardBg} border ${themeClasses.border} rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`${themeClasses.textSecondary} text-sm font-medium`}>Counting Accuracy</p>
                <p className={`text-2xl font-bold ${themeClasses.text}`}>{formatPercentage(user.stats.countingAccuracy)}</p>
              </div>
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
            <h2 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>Recent Sessions</h2>
            <div className="space-y-4">
              {user.stats.recentSessions.slice(0, 5).map((session, index) => (
                <div key={index} className={`flex items-center justify-between p-4 ${themeClasses.surface} rounded-lg`}>
                  <div>
                    <p className={`${themeClasses.text} font-medium`}>
                      {session.result === 'win' ? 'Win' : session.result === 'loss' ? 'Loss' : 'Push'}
                    </p>
                    <p className={`${themeClasses.textSecondary} text-sm`}>{session.handsPlayed} hands</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      session.result === 'win' ? 'text-green-500' :
                      session.result === 'loss' ? 'text-red-500' : themeClasses.textSecondary
                    }`}>
                      {session.result === 'win' ? 'W' : session.result === 'loss' ? 'L' : 'P'}
                    </p>
                    <p className={`${themeClasses.textSecondary} text-sm`}>
                      {new Date(session.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
            <h2 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>Quiz Performance</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={themeClasses.text}>Basic Strategy</span>
                  <span className={`${themeClasses.text} font-semibold`}>
                    {user.quizStats.basicStrategy.correct}/{user.quizStats.basicStrategy.total}
                  </span>
                </div>
                <div className={`w-full ${themeClasses.surface} rounded-full h-2`}>
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${user.quizStats.basicStrategy.total > 0 ?
                        (user.quizStats.basicStrategy.correct / user.quizStats.basicStrategy.total * 100) : 0}%`
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={themeClasses.text}>Card Counting</span>
                  <span className={`${themeClasses.text} font-semibold`}>
                    {user.quizStats.cardCounting.correct}/{user.quizStats.cardCounting.total}
                  </span>
                </div>
                <div className={`w-full ${themeClasses.surface} rounded-full h-2`}>
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${user.quizStats.cardCounting.total > 0 ?
                        (user.quizStats.cardCounting.correct / user.quizStats.cardCounting.total * 100) : 0}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
          <h2 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {user.achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 ${themeClasses.surface} rounded-lg`}>
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className={`${themeClasses.text} font-medium`}>{achievement.title}</h3>
                  <p className={`${themeClasses.textSecondary} text-sm`}>{achievement.description}</p>
                  <p className={`${themeClasses.textSecondary} text-xs mt-1`}>
                    {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {user.achievements.length === 0 && (
              <div className={`col-span-3 text-center ${themeClasses.textSecondary} py-8`}>
                <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No achievements yet. Keep playing to unlock your first achievement!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
