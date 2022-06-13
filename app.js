const inputBox = document.querySelector(".inputfield input");
const AddBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        AddBtn.classList.add("active");
    }else{
        AddBtn.classList.remove("active");
    }
}
showTasks();

AddBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalstorage = localStorage.getItem("New Todo");
    if(getLocalstorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalstorage)
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalstorage =localStorage.getItem("New Todo");
    if(getLocalstorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalstorage)
    }
    const pendingNumb = document.querySelector(".pendingNumb")
    pendingNumb.textContent = listArr.length;
if(listArr.length > 0){
     deleteAllBtn.classList.add("active");
}else{
    deleteAllBtn.classList.remove("active");
}

let newLiTag = '';
listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fa-solid fa-trash"></i>`
});
todoList.innerHTML = newLiTag;
inputBox.value = "";
}

function deleteTask(index){
    let getLocalstorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalstorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

deleteAllBtn.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

