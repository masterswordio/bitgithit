import React, { useState } from 'react';
import { BookOpen, Target, Calculator, TrendingUp, CheckCircle, Lock, Star, Trophy, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLearning } from '../contexts/LearningContext';
import { LearningModule } from '../contexts/LearningContext';
import { LearningModuleContent } from '../components/LearningModuleContent';

type LearnSection = 'map' | 'module';

export const Learn: React.FC = () => {
  const { getThemeClasses } = useTheme();
  const { modules, currentModule, setCurrentModule, totalXP, completedModules, getCompletionPercentage, updateModuleProgress } = useLearning();
  const [activeSection, setActiveSection] = useState<LearnSection>('map');
  const themeClasses = getThemeClasses();

  const getModuleIcon = (module: LearningModule) => {
    switch (module.type) {
      case 'lesson': return BookOpen;
      case 'quiz': return Target;
      case 'practice': return Play;
      default: return BookOpen;
    }
  };

  const handleModuleClick = (module: LearningModule) => {
    if (module.unlocked) {
      setCurrentModule(module.id);
      setActiveSection('module');
    }
  };

  const handleCompleteModule = () => {
    if (currentModule) {
      updateModuleProgress(currentModule, true, 100);
      setActiveSection('map');
      setCurrentModule(null);
    }
  };

  const renderLearningMap = () => {
    const categories = [
      { id: 'basics', title: 'Basics', color: 'from-green-400 to-green-600', icon: BookOpen },
      { id: 'strategy', title: 'Strategy', color: 'from-blue-400 to-blue-600', icon: Target },
      { id: 'counting', title: 'Counting', color: 'from-purple-400 to-purple-600', icon: Calculator },
      { id: 'advanced', title: 'Advanced', color: 'from-orange-400 to-orange-600', icon: TrendingUp }
    ];

    return (
      <div className="space-y-8">
        {/* Progress Overview */}
        <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>Your Progress</h2>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className={`text-2xl font-bold text-green-500`}>{getCompletionPercentage()}%</div>
                <div className={`text-sm ${themeClasses.textSecondary}`}>Complete</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold text-blue-500`}>{totalXP}</div>
                <div className={`text-sm ${themeClasses.textSecondary}`}>XP</div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getCompletionPercentage()}%` }}
            />
          </div>
        </div>

        {/* Learning Path */}
        {categories.map((category) => {
          const categoryModules = modules.filter(m => m.category === category.id);
          const completedInCategory = categoryModules.filter(m => m.completed).length;
          
          return (
            <div key={category.id} className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-6 shadow-lg`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${themeClasses.text}`}>{category.title}</h3>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      {completedInCategory}/{categoryModules.length} completed
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-semibold ${themeClasses.text}`}>
                    {Math.round((completedInCategory / categoryModules.length) * 100)}%
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryModules.map((module) => {
                  const ModuleIcon = getModuleIcon(module);
                  
                  return (
                    <button
                      key={module.id}
                      onClick={() => handleModuleClick(module)}
                      disabled={!module.unlocked}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        module.completed
                          ? `border-green-300 ${themeClasses.surface} ${themeClasses.surfaceHover}`
                          : module.unlocked
                          ? `${themeClasses.border} bg-white hover:shadow-md ${themeClasses.surfaceHover}`
                          : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          module.completed ? 'bg-green-500' : module.unlocked ? 'bg-blue-500' : 'bg-gray-400'
                        }`}>
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-white" />
                          ) : module.unlocked ? (
                            <ModuleIcon className="h-5 w-5 text-white" />
                          ) : (
                            <Lock className="h-5 w-5 text-white" />
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium text-yellow-600">{module.xpReward}</span>
                        </div>
                      </div>
                      
                      <h4 className={`font-semibold mb-2 ${module.unlocked ? themeClasses.text : 'text-gray-500'}`}>
                        {module.title}
                      </h4>
                      <p className={`text-sm ${module.unlocked ? themeClasses.textSecondary : 'text-gray-400'}`}>
                        {module.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          module.type === 'lesson' ? 'bg-blue-100 text-blue-700' :
                          module.type === 'quiz' ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {module.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          module.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                          module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {module.difficulty}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderModuleContent = () => {
    const module = modules.find(m => m.id === currentModule);
    if (!module) return null;

    return (
      <div className={`${themeClasses.cardBg} backdrop-blur-sm border ${themeClasses.border} rounded-xl p-8 shadow-lg`}>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setActiveSection('map')}
            className={`text-sm ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors`}
          >
            ← Back to Learning Map
          </button>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-yellow-600 font-medium">{module.xpReward} XP</span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${themeClasses.text} mb-2`}>{module.title}</h1>
          <p className={`text-lg ${themeClasses.textSecondary}`}>{module.description}</p>
        </div>

        <LearningModuleContent moduleId={module.id} themeClasses={themeClasses} />

        <div className="flex justify-center">
          <button
            onClick={handleCompleteModule}
            className={`flex items-center space-x-2 ${themeClasses.accent} ${themeClasses.accentHover} text-white px-8 py-3 rounded-lg font-semibold transition-all`}
          >
            <Trophy className="h-5 w-5" />
            <span>Complete Module</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`max-w-7xl mx-auto px-6 py-8 ${themeClasses.bg} min-h-screen`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-3xl font-bold ${themeClasses.text}`}>
          {activeSection === 'map' ? 'Learning Path' : 'Module'}
        </h1>
      </div>
      
      {activeSection === 'map' ? renderLearningMap() : renderModuleContent()}
    </div>
  );
};