export default function TodoList() {
  const todos = [ 
    { id: 1, task: 'Learn HTML', completed: true },
    { id: 2, task: 'Learn JavaScript', completed: false },
    { id: 3, task: 'Learn Node.js', completed: false },
    { id: 4, task: 'Learn React', completed: false },
  ];
  const incompleteTodos = todos.filter((todo) => todo.completed === false);

  return ( 
    <div className="border-bottom pt-2 pb-3 mb-3">
      <h4>Todo List</h4> 
      <ul>
        { incompleteTodos.map((todo) => { 
          return (
            <li key={todo.id}>{todo.task}</li>
          );
        })}
      </ul>
    </div>
  );
}