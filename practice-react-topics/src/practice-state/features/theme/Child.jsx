export default function Child({theme}) {
  return (
    <ul className="list-group pb-2">
      <li className={`${theme} list-group-item`}>This is the child component</li>
    </ul>
  );
}
