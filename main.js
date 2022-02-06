'use strict';

const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
    'create a new practice task': STATUS.IN_PROGRESS,
    'make a bed': STATUS.TO_DO,
    'write a post': STATUS.DONE,
}


function changeStatus(name, status) {
    if (name in list) list[name] = status;
};


function addTask(name) {
    if (!(name in list)) list[name] = DEFAULT_STATUS;
};


function deleteTask(name) {
    if (name in list) delete list[name];
};


function showList() {

    const tasks = {
        [STATUS.TO_DO]: '',
        [STATUS.IN_PROGRESS]: '',
        [STATUS.DONE]: '',
    }

    for (let key in list) {
        tasks[list[key]] += key + '\n';
    }
    console.log(`${STATUS.TO_DO}:\n${tasks[STATUS.TO_DO] || '-\n'}${STATUS.IN_PROGRESS}:\n${tasks[STATUS.IN_PROGRESS] || '-\n'}${STATUS.DONE}:\n${tasks[STATUS.DONE] || '-\n'}`);
}

addTask('walk a dog');
changeStatus('walk a dog', 'In Progress');
changeStatus('walk a dog', 'Done');
addTask('cook dinner');
changeStatus('cook dinner', 'Done');
deleteTask('walk a dog');
showList();