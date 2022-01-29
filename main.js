'use strict';

const list = {
    'create a new practice task': 'In Progress',
    'make a bed': 'Todo',
    'write a post': 'Done',
}


function changeStatus(taskName, taskStatus) {
    if (taskName in list) list[taskName] = taskStatus;
};


function addTask(taskName) {
    if (!(taskName in list)) list[taskName] = 'Todo';
};


function deleteTask(taskName) {
    if (taskName in list) delete list[taskName];
};


function showList() {
    let todo = '';
    let inProgress = '';
    let done = '';

    for (let key in list) {
        if (list[key] === 'Todo') todo += `'${key}' \n`;
        if (list[key] === 'In Progress') inProgress += `'${key}' \n`;
        if (list[key] === 'Done') done += `'${key}' \n`;
    }
    console.log(`Todo:\n${todo || '-\n'}In Progress:\n${inProgress || '-\n'}Done:\n${done || '-\n'}`);
}

addTask('walk a dog');
changeStatus('walk a dog', 'In Progress');
changeStatus('walk a dog', 'Done');
addTask('cook dinner');
changeStatus('cook dinner', 'Done');
deleteTask('walk a dog');
showList();