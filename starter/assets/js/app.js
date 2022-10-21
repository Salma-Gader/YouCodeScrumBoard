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
        'description'   : model_description.value,

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

function editTask(index) {
    // Initialisez task form

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
    
}

function deleteTask() {
    // Get index of task in the array

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
var i =0;
    for(let task of tasks){
        i++;
        if(task.status == "To Do"){
            let button_todo = `
    
            <button class="d-flex  list-group-item w-100 text-start">
                <div class="mt-1">
                    <i class="fa-regular  fa-question-circle text-green fs-2"></i> 
                </div>
                <div class="ms-3">
                    <div class="fs-5">${task.title}</div>
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
            let button_inProgress = `
            <button class="d-flex list-group-item w-100 text-start">
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
            let bouttonDone = `
            <button class="d-flex list-group-item w-100 text-start">
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

  


        
}
reloadTasks();

