let ourForm = document.getElementById("ourForm");
let newInput = document.getElementById("newInput");
let to_do_list = document.getElementById("todo-list")

ourForm.addEventListener('submit',(e) => {
    e.preventDefault();
    newContent(newInput.value);  
})

function newContent(x){
    let ourHtml = `<li> <button>delete</button> </li>`
    to_do_list.insertAdjacentHTML('beforeend',+ ourHtml);
}
