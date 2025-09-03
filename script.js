document.addEventListener('DOMContentLoaded',function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function saveTasks(){
        const taskItmes = document.querySelectorAll('#task-list li');
        var tasksArray = [];

        taskItmes.forEach(element=>{
           tasksArray.push(element.firstChild.textContent.trim());
        });
        localStorage.setItem('tasks',JSON.stringify(tasksArray));
    }

    const taskString = localStorage.getItem('tasks');
    if(taskString){
        const taskArray = JSON.parse(taskString);

        taskArray.forEach(Item => {
            const li_Item = document.createElement('li');
            li_Item.textContent = Item;

            const btn = document.createElement('button');
            btn.textContent = 'Remove';
            btn.classList.add('remove-btn');

            li_Item.appendChild(btn);
            taskList.appendChild(li_Item);
        });

    }


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
            remove_button.classList.add('remove-btn');

            remove_button.onclick = ()=>{
                taskElement.remove();
            };
            taskElement.appendChild(remove_button);
            taskList.appendChild(taskElement);
            taskInput.value = '';
            saveTasks();
        }

    }
    addButton.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',function(event){
        if(event.key == 'Enter')
            addTask();
    });
    //addTask();


});