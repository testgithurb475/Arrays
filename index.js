var toDoList = [];

toDoList.push('Task 1');
toDoList.push('Task 2');
toDoList.push('Task 3');

toDoList.unshift('Task 4');
toDoList.unshift('Task 5');

console.log('Current toDoList:', toDoList);

var completedTask = toDoList.pop();
console.log('Completed task (removed with pop):', completedTask);

completedTask = toDoList.shift();
console.log('Completed task (removed with shift):', completedTask);

console.log('Updated toDoList:', toDoList);
