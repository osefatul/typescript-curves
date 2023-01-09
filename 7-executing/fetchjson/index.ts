import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const todoId = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(todoId, title, completed)
});

function logTodo(todoId:number, title:string, completed:boolean){
  console.log(`
    The todo with Id: ${todoId},
    Has a title of: ${title},
    Is it completed: ${completed}
  `)
}
