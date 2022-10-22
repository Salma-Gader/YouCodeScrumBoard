/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */




function createTask() {
   let bug_or_featur;
   if (modal_featur.checked){
       // bug_or_featur= document.querySelector('#type:checked');
       bug_or_featur= "feature"
   }
   else bug_or_featur= "Bug";

   console.log(bug_or_featur);

    let  newTask ={
        'title'         : modal_title.value,
        'type'          : bug_or_featur,
        'priority'      : modal_priority.value,
        'status'        : modal_status.value,
        'date'          : modal_date.value,
        'description'   : modal_description.value,

    };
    
    tasks.push(newTask);
    reloadTasks();
    $("#modal_task").modal('hide');
    initTaskForm();
    

}

function saveTask() {
   

    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}
let button_clicked_index;
function editTask(index) {
    button_clicked_index = index;
    maske_button_update();
    // Initialisez task form
    modal_title.value=tasks[index].title;
    modal_priority.value=tasks[index].priority;
    modal_status.value=tasks[index].status;
    modal_description.value=tasks[index].description;
    modal_date.value=tasks[index].date;

    if(value=tasks[index].type == "Feature")  modal_featur.checked = true;
    else modal_bug.checked = true;
   
    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    let bug_or_featur;
    if (modal_featur.checked){
        // bug_or_featur= document.querySelector('#type:checked');
        bug_or_featur= "feature"
    }
    else bug_or_featur= "Bug";

    tasks[button_clicked_index].title = modal_title.value;
    tasks[button_clicked_index].type = bug_or_featur;
    tasks[button_clicked_index].priority = modal_priority.value;
    tasks[button_clicked_index].status = modal_status.value;
    tasks[button_clicked_index].date =  modal_date.value;
    tasks[button_clicked_index].description= modal_description.value;
    reloadTasks();
    $("#modal_task").modal('hide');
    initTaskForm();
}

function deleteTask() {
    // Get index of task in the array
    tasks.splice(button_clicked_index , 1);  
    reloadTasks();
    $("#modal_task").modal('hide');
    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data
    //document.getElementById('modal-task')
    modal_task.reset();
    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    to_do_tasks.innerHTML = "";
    in_progress_tasks.innerHTML = "";
    done_tasks.innerHTML = "";

    // Set Task count
let i =0,index=-1;
let todo_task_number=0,inprogresse_task_number=0,done_task_number=0;
    for(let task of tasks){
        // 
        i++;index++;
        if(task.status == "To Do"){
            todo_task_number++;
            let button_todo = `
    
            <button onclick = "editTask(${index})" class="d-flex  list-group-item w-100 text-start" data-bs-toggle="modal" href="#modal_task">
                <div class="mt-1">
                    <i class="fa-regular  fa-question-circle text-green fs-2"></i> 
                </div>
                <div class="ms-3">
                    <div class="fs-5" >${task.title}</div>
                    
                    <div class="">
                        <div class="text-muted"># ${i}created in ${task.date}</div>
                        <div class="button_description" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${task.description}</div>
                    </div>
                    <div class="mt-1">
                        <span class="btn btn-primary btn-sm py-3px px-5px">${task.priority}</span>
                        <span class="btn btn-light btn-sm text-dark py-3px px-5px">${task.type}</span>
                        
                    </div>
                </div>
            </button>`;

            to_do_tasks.innerHTML += button_todo;
        }

        else if(task.status == "In Progress"){
            inprogresse_task_number++;
            let button_inProgress = `
            <button onclick = "editTask(${index})" class="d-flex list-group-item w-100 text-start" data-bs-toggle="modal" href="#modal_task">
            <div class="mt-1">
                <i class="spinner-border spinner-border-sm text-green " role="status" fs-2"></i> 
            </div>
            <div class="ms-3">
                <div class="fs-5">${task.title}</div>
                <div class="">
                    <div class="text-muted">#${i} created in ${task.date}</div>
                    <div class="button_description" title="including as many details as possible.">${task.description}</div>
                </div>
                <div class="mt-1">
                    <span class="btn btn-primary btn-sm px-1 py-3px">${task.priority}</span>
                    <span class="btn btn-light text-dark px-1 py-3px ">${task.type}</span>
                </div>
            </div>
        </button>`;

        in_progress_tasks.innerHTML += button_inProgress;
        }
        else if(task.status == "Done"){
            done_task_number++;
            let bouttonDone = `
            <button onclick = "editTask(${index})" class="d-flex list-group-item w-100 text-start"data-bs-toggle="modal" href="#modal_task">
            <div class="mt-1">
                <i class="fa-regular fa-circle-check text-green fs-2"></i> 
            </div>
            <div class="ms-3">
                <div class="fs-5">${task.title}</div>
                <div class="">
                    <div class="text-muted"># ${i} created in ${task.date}</div>
                    <div class="button_description" title="including as many details as possible.">${task.description}</div>
                </div>
                <div class="mt-1">
                    <span class="btn btn-primary btn-sm px-1 py-3px">${task.priority}</span>
                    <span class="btn btn-light text-dark px-1 py-3px ">${task.type}</span>
                </div>
            </div>
        </button>`;

        done_tasks.innerHTML += bouttonDone;
        }
        

    }     
    to_do_tasks_count.innerHTML=todo_task_number;
    in_progress_tasks_count.innerHTML = inprogresse_task_number;
    done_tasks_count.innerHTML = done_task_number;
}
reloadTasks();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~delet buttons (updates)
let button_Update_id = document.getElementById("button_Update_id") ;
let button_delet_id = document.getElementById("button_delet_id") ;
let button_save_id = document.getElementById("button_save_id") ;

function maske_button_update(){
    button_save_id.style.display= "none" ;
    button_Update_id.style.display= "block" ;
    button_delet_id.style.display= "block" ;
}

function maske_button_create(){
    button_Update_id.style.display= "none" ;
    button_delet_id.style.display= "none" ;
    button_save_id.style.display= "block" ;
    initTaskForm();
}


