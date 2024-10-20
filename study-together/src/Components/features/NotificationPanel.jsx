import { useState } from 'react';
import { Bell, X } from 'lucide-react';
import Card from '../ui/Card';

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      message: 'Great job! You completed a 25-minute focus session.',
      time: '2 min ago'
    },
    {
      id: 2,
      type: 'info',
      message: 'Time for a 5-minute break.',
      time: '27 min ago'
    },
    {
      id: 3,
      type: 'warning',
      message: 'Your plant needs attention! Focus time decreasing.',
      time: '1 hour ago'
    }
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(note => note.id !== id));
  };

  const getNotificationStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'info':
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell size={20} />
            <h3 className="font-medium">Notifications</h3>
          </div>
          {notifications.length > 0 && (
            <button
              onClick={() => setNotifications([])}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500">No new notifications</p>
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg border ${getNotificationStyles(
                  notification.type
                )} relative`}
              >
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <X size={14} />
                </button>
                <p className="text-sm pr-6">{notification.message}</p>
                <span className="text-xs text-gray-500 mt-1 block">
                  {notification.time}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default NotificationPanel;