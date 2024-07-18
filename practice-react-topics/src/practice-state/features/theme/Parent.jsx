import Child from './Child.jsx';

export default function Parent({theme}) {
  return (
    <div>
      <hr />
      <h2>This is the parent component</h2>
      <button className={`${theme} btn btn-dark my-2`}>Click Me</button>
      <Child theme={theme} />
    </div>
  );
}