
const TodoList = [{name:'make dinner',dueDate:'2024-12-08'}];

renderTodo();

function renderTodo(){

        let todoListHTML ='';

        for(let i = 0;i < TodoList.length; i++){

            const todoObject = TodoList[i];
            const {name,dueDate} = todoObject;
            const html =
             `<div>${name}</div>
              <div>${dueDate}</div>
              
              <button onclick="

              TodoList.splice(${i},1);
              renderTodo();
              " class="delete">Delete</button>`;

            todoListHTML += html;
        }
        document.querySelector('.result').innerHTML = todoListHTML;
}


function addTodo(){

   const inputEl = document.querySelector('.inputEl');
   const name = inputEl.value;

   const Date = document.querySelector('.date');
   const dueDate = Date.value;

   TodoList.push({name,dueDate});
   
   inputEl.value ='';


   renderTodo();



}