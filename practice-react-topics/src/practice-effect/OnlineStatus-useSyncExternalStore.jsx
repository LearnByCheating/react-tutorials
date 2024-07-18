import { useSyncExternalStore } from 'react';

export default function OnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
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

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
