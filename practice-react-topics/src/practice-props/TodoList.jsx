export default function TodoList() {
  const todos = [ 
    { id: 1, task: 'Learn HTML' },
    { id: 2, task: 'Learn JavaScript' },
    { id: 3, task: 'Learn Node.js' },
    { id: 4, task: 'Learn React' },
  ];
  return ( 
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4> 
      <ul>
        { todos.map((todo) => { 
          return (
            <li key={todo.id}>{todo.task}</li>
          );
        })}
      </ul>
    </div>
  );
}