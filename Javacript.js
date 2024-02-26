1. Function declaration vs function expression

function dec(){
  console.log("fun declaraion");
 } // function declaration
 
 var expression = function(){
  console.log("fun expression");
 } //fun expression
 
 function express is an anonymous function saved in to a variable.
 It has variable scope hence if it is used before declaration,it ll throw error
 it can pass to another function.
 -------------------------------------------------------------------------------------
 
 2. promises why do we use it
 
 to simplyfy nested callback function.promises will wait for completing the inner callbacks and execute outwards
 
 var p1 = ne Promise(function(resolve, reject){
    resolve($.ajax('a.json'));
 })
 
 p1.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
 -------------------------------------------------------------------------------------
 
 3. setTimeout with 0 delay
 
 setTimeout(function(){
    console.log(0);
 })

 console.log(1);
 console.log(2);
 
 OutPut: 1 2 0 
 
 0 delay will make the execution async and ll wait for completing the current execution stack.  
  -------------------------------------------------------------------------------------
  
 4 . What is closures
 
 JavaScript variables can belong to the local or global scope.
 Global variables can be made local (private) with closures.
 
 A closure is a function having access to the parent scope, even after the parent function has closed.
 
 var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

 
 https://www.w3schools.com/js/js_function_closures.asp
 
   -------------------------------------------------------------------------------------

   test change

  test change 2
 
 
 
 
