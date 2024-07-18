function App() {

  let count = 0;
  console.log('Initial count:', count);
  function handleClick() {
    count = count + 1;
    console.log('New count:', count);
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <h1>Counter</h1>
        <button onClick={handleClick} className='btn btn-secondary'>
          count is {count}
        </button>
    </div>
  );
}

export default App;