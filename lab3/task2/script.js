const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('newTaskInput');
const taskList = document.getElementById('taskList');

const defaultTasks = [
    { text: 'First item', done: true },
    { text: 'Second item', done: false },
    { text: 'Third item', done: false }
];

function createTaskItem(text, done = false) {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (done) li.classList.add('checked');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-check';
    checkbox.checked = done;

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<span style="color: #dc3545;">🗑️</span>';
    deleteBtn.style.color = '#ff4444';
    deleteBtn.style.fontSize = '18px';

    checkbox.addEventListener('change', () => {
        li.classList.toggle('checked', checkbox.checked);
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
        updatePlaceholder();
    });

    li.append(checkbox, span, deleteBtn);
    return li;
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        alert('Введите задачу');
        return;
    }

    const item = createTaskItem(text);
    taskList.appendChild(item);
    taskInput.value = '';
    updatePlaceholder();
}

function updatePlaceholder() {
    const items = taskList.querySelectorAll('.task-item');
    let ph = taskList.querySelector('.placeholder-message');

    if (items.length === 0) {
        if (!ph) {
            ph = document.createElement('li');
            ph.className = 'placeholder-message';
            ph.textContent = 'Список пуст — добавьте задачу';
            taskList.appendChild(ph);
        }
    } else if (ph) {
        ph.remove();
    }
}

function loadDefaults() {
    taskList.innerHTML = '';
    defaultTasks.forEach(t => {
        taskList.appendChild(createTaskItem(t.text, t.done));
    });
    updatePlaceholder();
}

taskForm.addEventListener('submit', e => {
    e.preventDefault();
    addTask();
});

loadDefaults();