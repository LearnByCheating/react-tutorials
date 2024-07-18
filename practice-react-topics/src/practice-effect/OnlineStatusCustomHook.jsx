import { useOnlineStatus } from './useOnlineStatus.jsx';

export default function CustomHook() {
  const isOnline = useOnlineStatus(true);

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
