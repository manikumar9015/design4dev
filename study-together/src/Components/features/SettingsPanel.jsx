import { useState } from 'react';
import { Settings, Bell, Clock, Music, Monitor } from 'lucide-react';
import Card from '../ui/Card';

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    soundEnabled: true,
    focusTime: 25,
    breakTime: 5
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Settings</h3>
          <Settings size={20} />
        </div>

        <div className="space-y-4">
          {/* Timer Settings */}
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Clock size={16} />
              Timer Settings
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-sm">Focus Duration (minutes)</span>
              <input
                type="number"
                value={settings.focusTime}
                onChange={(e) => updateSetting('focusTime', e.target.value)}
                className="w-16 p-1 border rounded  placeholder:text-black text-black"
                min="1"
                max="60"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Break Duration (minutes)</span>
              <input
                type="number"
                value={settings.breakTime}
                onChange={(e) => updateSetting('breakTime', e.target.value)}
                className="w-16 p-1 border rounded placeholder:text-black text-black"
                min="1"
                max="30"
              />
            </div>
          </div>

          {/* Notification Settings */}
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Bell size={16} />
              Notifications
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => updateSetting('notifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gradient-to-br from-pink-500 to-orange-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-br from-pink-500 to-orange-400"></div>
              </label>
            </div>
          </div>
          

          {/* Sound Settings */}
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Music size={16} />
              Sound
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable Sound Effects</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) => updateSetting('soundEnabled', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gradient-to-br from-pink-500 to-orange-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-br from-pink-500 to-orange-400"></div>
              </label>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Monitor size={16} />
              Display
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => updateSetting('darkMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gradient-to-br from-pink-500 to-orange-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-br from-pink-500 to-orange-400"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SettingsPanel;