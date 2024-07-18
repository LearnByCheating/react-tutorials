import { GreetingProvider } from './GreetingContext';
import Greeting from './Greeting';

// Step 3: Use the Provider to Wrap the Component tree
export default function App() {
  return (
    <GreetingProvider>
      <Greeting />
    </GreetingProvider>
  );
}
