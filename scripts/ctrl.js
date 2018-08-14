"use strict"
function TodoController(){
 const vm = this;
 vm.todo =[{
     task: "Walk the Dog",
     classes: {completed: true}
 },
 {
     task: "take out the trash",
     classes:{completed:false}
 },
 {
     task: "Wash dishes",
     classes:{completed:true}
 },

 {
    task: "Wash clothes",
    classes: {completed: false},
 }


]
vm.completeTask= (index)=>{
    vm.todo[index].classes = {completed: true};
}
vm.deleteTask = (index) => {
    vm.todo.splice(index,1);
    
};


vm.addTask = (task) => {
       
            vm.todo.push({
                task:task,
                classes:{completed:false}
            });
           
        };

    };
angular
 .module("todoApp")
 .controller("TodoController", TodoController);