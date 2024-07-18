// Step 4.2: Access context in Consumer Components - using a custom hook
import { useUsername } from './GreetingContext';

export default function Child() {
  const { username } = useUsername();
  return (
    <h2 className="card mt-2 p-3">Child component: <small>Hello {username}</small></h2>
  );
}