import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Notification: React.FC = () => {
  const createNotification = (type: string) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  return (
    <div>
      <h1>React Notifications Example</h1>
      <button onClick={createNotification('info')}>Info</button>
      <button onClick={createNotification('success')}>Success</button>
      <button onClick={createNotification('warning')}>Warning</button>
      <button onClick={createNotification('error')}>Error</button>
      <NotificationContainer/>
    </div>
  );
};

export default Notification;
