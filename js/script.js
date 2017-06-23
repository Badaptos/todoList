var addTodo = document.querySelector('.todoButton');

addTodo.addEventListener('click', function(){
  var
  todoList = document.querySelector('#todoList');
  userInput = document.querySelector('#todoValue').value;
  inputText = document.createTextNode(userInput);
  newTodo = document.createElement('li');
  buttonWrapper = document.createElement('div').classList.add('actionButtons');
  buttons = document.createElement('button');
  // trashIcon = document.createElement('i').classList.add('fa fa-trash');
  // checkIcon = document.createElement('i').classList.add('fa fa-check');
  // CREATE ALL ELEMENTS WHICH WILL BE NESTED WITHIN THE LI ELEMENT
  newTodo.appendChild(inputText);
  todoList.appendChild(newTodo);

});
