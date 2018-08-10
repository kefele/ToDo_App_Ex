"use strict"
function TodoController(){
 const vm = this;
 vm.todo = ["Wash Dishes", "Wash Clothes", "Take Out Trash", "Study"];

}
angular
 .module("todoApp")
 .controller("TodoController", TodoController);