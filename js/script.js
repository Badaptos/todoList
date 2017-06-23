var addTodo = document.querySelector('.todoButton');

addTodo.addEventListener('click', function(){
  var
  todoList = document.querySelector('#todoList');
  userInput = document.querySelector('#todoValue'); // MOVED .VALUE METHOD FROM USERINPUT VARIABLE AND JUST USE IT WHERE VALUE IS NEEDED. THIS ALLOWS FOR RESETTING INPUT VALUE
  inputText = document.createTextNode(userInput.value);
  newTodo = document.createElement('li');
  buttonWrapper = document.createElement('div');
  trashButton = document.createElement('button');
  checkButton = document.createElement('button')
  trashIcon = document.createElement('i');
  checkIcon = document.createElement('i');

//check for user input
  if(userInput.value === ''){
    return false;
  }

//ADD CLASS NAMES TO ELEMENTS FOR STYLING
  buttonWrapper.className = 'actionButtons';
  trashIcon.className = 'fa fa-trash';
  checkIcon.className = 'fa fa-check';

//Append Elements
  checkButton.appendChild(checkIcon); //add checkmark icon to button
  trashButton.appendChild(trashIcon); //add tash icon to button
  buttonWrapper.appendChild(trashButton); //add trash button to button wrapper
  buttonWrapper.appendChild(checkButton); // add check button to button wrapper


  newTodo.appendChild(inputText); // ADDS THE USER INPUT AS TEXT INTO LI ELEMENT
  newTodo.appendChild(buttonWrapper);
  todoList.insertBefore(newTodo, todoList.firstChild); //ADDS LI to UL. New LI will be added at the top.

  //CLEAR INPUT FIELD
  userInput.value = '';
});
