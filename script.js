let ourForm = document.getElementById("ourForm");
let newInput = document.getElementById("newInput");
let to_do_list = document.getElementById("todo-list")

ourForm.addEventListener('submit',(e) => {
    e.preventDefault();
    newContent(newInput.value);  
})

function newContent(x){
    to_do_list.insertAdjacentHTML('beforeend',+ '<li> $(x) </li>' + '<br>');
}
