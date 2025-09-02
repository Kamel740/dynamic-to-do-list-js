document.addEventListener('DOMContentLoaded',function(){

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText ===""){
            alert('there is no task in the imput filed');
        }
        else{
           const  taskElement = document.createElement('li');
            taskElement.textContent = taskText;

            const remove_button = document.createElement('button')
            remove_button.textContent = 'Remove';
            remove_button.className = 'remove-btn';

            remove_button.onclick = ()=>{
                taskElement.remove();
            };
            taskElement.appendChild(remove_button);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }

    }
    addButton.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',function(event){
        if(event.key == 'Enter')
            addTask();
    });
    //addTask();


});