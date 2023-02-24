
let addToDobutton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputfield = document.getElementById("inputfield")


 addToDobutton.addEventListener("click", function () {

         let paragraph = document.createElement("p")
         paragraph.innerHTML = inputfield.value
         toDoContainer.appendChild(paragraph)
         inputfield.value = ""
         paragraph.addEventListener("dblclick", function () {
             toDoContainer.removeChild(paragraph)
         })
     }) 
