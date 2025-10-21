import React, { useState } from 'react';
import { User, Settings, Save, Trophy, Calendar } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export const Profile: React.FC = () => {
  const { user, updateProfile } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    preferences: { ...user.preferences }
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Member Since</span>
                <span className="text-gray-800">
                  {new Date(user.memberSince).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Level</span>
                <span className="text-green-600 font-semibold">{user.level}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total XP</span>
                <span className="text-gray-800">{user.experience.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Account Settings
              </h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-green-600 hover:text-green-500 transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-300 text-gray-800 rounded-lg px-4 py-2"
                  />
                ) : (
                  <p className="text-gray-800">{user.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-300 text-gray-800 rounded-lg px-4 py-2"
                  />
                ) : (
                  <p className="text-gray-800">{user.email}</p>
                )}
              </div>

              {isEditing && (
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Training Preferences
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-gray-800 font-medium">Show Strategy Hints</label>
                  <p className="text-gray-600 text-sm">Display optimal moves during gameplay</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.preferences.showStrategyHints}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, showStrategyHints: e.target.checked }
                  })}
                  className="w-5 h-5 text-green-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-gray-800 font-medium">Enable Card Counting</label>
                  <p className="text-gray-600 text-sm">Show running and true count displays</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.preferences.enableCardCounting}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, enableCardCounting: e.target.checked }
                  })}
                  className="w-5 h-5 text-green-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-gray-800 font-medium">Auto-Advance</label>
                  <p className="text-gray-600 text-sm">Automatically proceed to next hand</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.preferences.autoAdvance}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, autoAdvance: e.target.checked }
                  })}
                  className="w-5 h-5 text-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">Difficulty Level</label>
                <select
                  value={formData.preferences.difficulty}
                  onChange={(e) => setFormData({
                    ...formData,
                    preferences: { ...formData.preferences, difficulty: e.target.value as any }
                  })}
                  className="w-full bg-white border border-gray-300 text-gray-800 rounded-lg px-4 py-2"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Trophy className="h-5 w-5 mr-2" />
              Recent Achievements
            </h3>
            
            {user.achievements.length > 0 ? (
              <div className="space-y-3">
                {user.achievements.slice(-3).map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <Trophy className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="text-gray-800 font-medium">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-4">No achievements yet. Keep training!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};