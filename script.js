const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector("ul");
const deleteBtn = document.querySelector(".footer button");

inputBox.focus()

inputBox.onkeyup = () =>{
    let userdata = inputBox.value;
    if(userdata.trim() != 0){
        addBtn.classList.add("active")
    }

    else{
        addBtn.classList.remove("active")
    }
} 

document.body.addEventListener("click", (e)=>{
    if(e.key === 'Enter'){
        addBtn.click()
    }
});

showTask();

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
            let userdata = inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo");

        if(getLocalStorage == null){
            listarr = [];
        }

        else{
            listarr = JSON.parse(getLocalStorage);
        }

        listarr.push(userdata);
        localStorage.setItem("New Todo", JSON.stringify(listarr))
        showTask();
    }

    if(e.keyCode == 46){
        listarr = [];
        localStorage.setItem("New Todo", JSON.stringify(listarr))
        showTask();
    }
}


addBtn.addEventListener("click", ()=>{
    let userdata = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");

    if(getLocalStorage == null){
        listarr = [];
    }

    else{
        listarr = JSON.parse(getLocalStorage);
    }

    listarr.push(userdata);
    localStorage.setItem("New Todo", JSON.stringify(listarr))
    showTask();
});

function showTask(){
    let getLocalStorage = localStorage.getItem("New Todo");

    if(getLocalStorage == null){
        listarr = [];
    }

    else{
        listarr = JSON.parse(getLocalStorage);
    }

    const pendingNumb = document.querySelector(".length");
    pendingNumb.textContent = listarr.length;
    let newLiTag = ''
    listarr.forEach((element, index) => {
        newLiTag += `<li> ${element}<span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`
    });

    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    // let getLocalStorage = localStorage.getItem("New Todo");
    // listarr = JSON.parse(getLocalStorage);
    // listarr.splice(index, 1)
    // localStorage.setItem("New Todo", JSON.stringify(listarr))
    // showTask();
    document.querySelector("ul li").classList.add("line");
}

deleteBtn.onclick = ()=>{
    listarr = [];
    localStorage.setItem("New Todo", JSON.stringify(listarr))
    showTask();
}