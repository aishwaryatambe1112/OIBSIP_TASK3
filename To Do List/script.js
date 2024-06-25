document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const categoryInput = document.getElementById('category-input');
    const priorityInput = document.getElementById('priority-input');
    const dueDateInput = document.getElementById('due-date-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskUl = document.getElementById('task-ul');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        const categoryText = categoryInput.value;
        const priorityText = priorityInput.value;
        const dueDateText = dueDateInput.value;

        if (taskText === '') {
            alert('Task cannot be empty');
            return;
        }

        const taskLi = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task');
        taskSpan.textContent = taskText;

        const categorySpan = document.createElement('span');
        categorySpan.classList.add('category');
        categorySpan.textContent = categoryText;

        const prioritySpan = document.createElement('span');
        prioritySpan.classList.add('priority');
        prioritySpan.textContent = priorityText;

        const dueDateSpan = document.createElement('span');
        dueDateSpan.classList.add('due-date');
        dueDateSpan.textContent = dueDateText;

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskLi.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskUl.removeChild(taskLi);
        });

        taskLi.appendChild(taskSpan);
        taskLi.appendChild(categorySpan);
        taskLi.appendChild(prioritySpan);
        taskLi.appendChild(dueDateSpan);
        taskLi.appendChild(completeButton);
        taskLi.appendChild(deleteButton);

        taskUl.appendChild(taskLi);

        taskInput.value = '';
        categoryInput.value = '';
        priorityInput.value = 'low';
        dueDateInput.value = '';
    });
});