import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const initialStatus = window.navigator.onLine;
  const [isOnline, setIsOnline] = useState(initialStatus);
  if (window.navigator.onLine) {
    console.log("online");
  } else {
    console.log("offline");
  }
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}
