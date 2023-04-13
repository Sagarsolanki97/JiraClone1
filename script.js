const addTaskbtn = document.querySelector('.add-task-btn');// open moal
const closeModal = document.querySelector('.close');// close modal
const modal = document.querySelector(".modal")
const addTaskForm = document.querySelector('.add-Task-form');

const myBtn = document.querySelector("#add-task-btn");



addTaskbtn.addEventListener("click", () =>{
    modal.style.display = "block";
});


closeModal.addEventListener("click", () =>{
    modal.style.display = "none";
});

myBtn.addEventListener("click", (event) =>{
    event.preventDefault();/// // // prevent AutoRefresh from.
   const taskName = document.getElementById("task-name").value;
   const priority = document.getElementById("priority").value;
   const dueDate = document.getElementById("due-date").value;
   const status = document.getElementById("status").value;
   Addtask(taskName,priority, dueDate, status);
   modal.style.display = "none";

});


function Addtask(taskName,priority, dueDate, status){
    // // // ading task according its status.  if complete then tak listed in completed column same way other 2 columns according to task's status.
    if(status== "not-started"){
        var column = document.getElementById("not-started");
        column.innerHTML +=`<li><h1>${taskName}</h1>
                                   <p> ${priority}</p>
                                   <p> ${dueDate}</p>
                                   <p> ${status}</p>
                                   </li>`;
    }
    else if(status== "in-progress"){
        var column = document.getElementById("in-progress");
        column.innerHTML +=`<li><h3>${taskName}</h3>
        <p> ${priority}</p>
        <p> ${dueDate}</p>
        <p> ${status}</p>
        </li>`;
    }    
    else if(status == "completed"){
        var column = document.getElementById("completed");
        column.innerHTML +=`<li><h3>${taskName}</h3>
        <p> ${priority}</p>
        <p> ${dueDate}</p>
        <p> ${status}</p>
        </li>`;
    
    }
}