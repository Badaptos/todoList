//ADD A NEW ITEM
document.querySelector('.todoButton').addEventListener('click', function(){
  var todoList = document.querySelector('#todoList'),
  userInput = document.querySelector('#todoValue'), // MOVED .VALUE METHOD FROM USERINPUT VARIABLE AND JUST USE IT WHERE VALUE IS NEEDED. THIS ALLOWS FOR RESETTING INPUT VALUE

  //CREATE ELEMENTS
  inputText = document.createTextNode(userInput.value),
  newTodo = document.createElement('li'),
  buttonWrapper = document.createElement('div'),
  trashButton = document.createElement('button'),
  checkButton = document.createElement('button'),
  trashIcon = document.createElement('i'),
  checkIcon = document.createElement('i');

//check for user input
  if(userInput.value === ''){
    return false;
  }

//ADD CLASS NAMES TO ELEMENTS FOR STYLING
  buttonWrapper.className = 'actionButtons';
  trashIcon.className = 'fa fa-trash';
  checkIcon.className = 'fa fa-check';
  trashButton.className = 'delete';
  checkButton.className = 'completed';

//Append Elements
  checkButton.appendChild(checkIcon); //add checkmark icon to button
  trashButton.appendChild(trashIcon); //add tash icon to button
  buttonWrapper.appendChild(trashButton); //add trash button to button wrapper
  buttonWrapper.appendChild(checkButton); // add check button to button wrapper
  newTodo.appendChild(inputText); // ADDS THE USER INPUT AS TEXT INTO LI ELEMENT
  newTodo.appendChild(buttonWrapper);
  todoList.insertBefore(newTodo, todoList.firstChild); //ADDS LI to UL. New LI will be added at the top.

  //triggers slide out navigation for new element. transition doesnt work but animation does.
  newTodo.classList.toggle('slide');

  //CLEAR INPUT FIELD
  userInput.value = '';

  // PUT EACH LI ELEMENT INTO AN ARRAY
  arr.unshift(newTodo);
});

var arr = [];

if(document.querySelector('button .delete')){
  document.querySelector('button .delete').addEventListener('click', function(){
    console.log('working');
  });
}
