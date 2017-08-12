//ADD A NEW ITEM
document.querySelector('.todoButton').addEventListener('click', createTodo);
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  createTodo();
});
// var todos = document.querySelector('.todoWrapper');
var currentList = document.querySelector('#todos')
var completedTodos = document.querySelector('#completedTodos'); //CREATE VAR FOR COMPELTED TODOS ELEMENT
completedTodos.style.display = 'none'; //SET


function createTodo(){
  document.querySelector('.actionPrompt').style.display = 'none';
  var todoList = document.querySelector('#todoList'), //CONTAINER ELEMENT
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

  trashButton.appendChild(trashIcon); //add trash icon to button
  buttonWrapper.appendChild(trashButton); //add trash button to button wrapper

  trashButton.addEventListener('click', deleteTodo); //ADDS EVENT LISTENER TO DELETE BUTTON


  checkButton.appendChild(checkIcon); //add checkmark icon to button
  buttonWrapper.appendChild(checkButton); // add check button to button wrapper
  checkButton.addEventListener('click', completeTodo); //ADDS THE EVENT LISTENER FOR THE COMPLETED BUTTON

  newTodo.appendChild(inputText); // ADDS THE USER INPUT AS TEXT INTO LI ELEMENT
  newTodo.appendChild(buttonWrapper);
  todoList.insertBefore(newTodo, todoList.firstChild); //ADDS LI to UL. New LI will be added at the top.

  //triggers slide out navigation for new element. transition doesnt work but animation does.
  newTodo.classList.add('slideOut');

  //CLEAR INPUT FIELD
  userInput.value = '';

  // todos.unshift(newTodo);
}//END CREATE TODO FUNCTION
function completeTodo(){
  var completedItem = this.parentNode.parentNode;
  var completedParent = completedItem.parentNode;
  var itemContent = completedItem.innerHTML;
  var completedList = document.getElementById('completedList');
  var newItem = document.createElement('li');


  completedList.insertBefore(newItem, completedList.firstChild);
  newItem.innerHTML = itemContent;
  completedParent.removeChild(completedItem);
  newItem.childNodes[1].childNodes[0].addEventListener('click', deleteTodo);

  if(completedTodos.style.display = 'block'){
    return true;
  }
  completedTodos.style.display = 'block';
  console.log('success');
}
function deleteTodo(){
  var item = this.parentNode.parentNode; //USING PARENT NODE TO SCALE UP THE DOM TREE TO GET THE LI
  var parent = item.parentNode; //SCALING UP ONCE THE DOM TREE FROM ITEM TO GET THE UL
  parent.removeChild(item); //REMOVES THE CHILD OF PARENT NODE (UL) WHICH IS THE ITEM (LI)

  if(completedList.innerHTML === ''){
    completedTodos.style.display = 'none';
  } else{
    return false;
  }

  if(parent.innerHTML === ''){
    document.querySelector('.actionPrompt').style.display = 'block';
  }
}
//if delete button is pressed
//list item will be deleted
