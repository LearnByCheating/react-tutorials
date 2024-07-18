import { useState, useEffect } from 'react';

export default function OnlineStatus() {
  // Apparently useSyncExternalStore should be used for navigator.online
  const initialStatus = window.navigator.onLine;
  const [isOnline, setIsOnline] = useState(initialStatus);
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

  return (
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Online Status</h4>   
      {isOnline ? 
        <p><img src="/src/assets/wifi.svg" /> Online</p>
        : 
        <p><img src="/src/assets/wifi-off.svg" /> Offline</p>}
    </div>
  );
}
