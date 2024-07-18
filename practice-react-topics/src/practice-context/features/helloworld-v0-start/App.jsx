// Imports go here

// Step 1: Create a Context

// Step 2: Create a Provider Component

// Step 3: Use the Provider to Wrap the Component tree
export default function App() {
  return (
    <Greeting />
  );
}

// Step 4: Access context in Consumer Components
function Greeting() {
  // useContext goes here
  return (
    <div className="card p-3">
      <h1>Parent component: <small>Hello {/* put username here */}</small></h1>
      <div>
      Change Name: <input
        placeholder="Enter your name"
      />
      </div>
      <Child />
    </div>
  );
}

function Child() {
  // useContext goes here
  return (
    <h2 className="card mt-2 p-3">Child component: <small>Hello {/* put username here */}</small></h2>
  );
}