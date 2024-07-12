declare module 'react-notifications' {
    import * as React from 'react';
  
    interface NotificationContainerProps {
      enterTimeout?: number;
      leaveTimeout?: number;
    }
  
    interface NotificationManagerOptions {
      timeOut?: number;
      extendedTimeOut?: number;
      onClick?: () => void;
      onClose?: () => void;
    }
  
    interface NotificationManager {
      info(message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
      success(message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
      warning(message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
      error(message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean): void;
    }
  
    export class NotificationContainer extends React.Component<NotificationContainerProps> {}
    export const NotificationManager: NotificationManager;
  }
  