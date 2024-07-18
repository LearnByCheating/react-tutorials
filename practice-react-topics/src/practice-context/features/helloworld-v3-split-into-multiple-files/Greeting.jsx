// Step 4.2: Access context in Consumer Components - using a custom hook
import { useUsername } from './GreetingContext';
import Child from './Child';

export default function Greeting() {
  const { username, setUsername } = useUsername();
  return (
    <div className="card p-3">
      <h1>Parent component: <small>Hello {username}</small></h1>
      <div>
      Change Name: <input
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <Child />
    </div>
  );
}