let button = document.getElementById('button');
let input = document.getElementById('input');
let task = document.getElementById('task');
let info = document.getElementById('info');

input.setAttribute('name', 'input');
let count=2;
info.innerHTML = `0 OUT OF ${count} TASKS COMPLETED`;

button.addEventListener('click', function() {
   
    if(input.value == "" ||input.value == " " || input.value == "  " || input.value == "   "){
   alert('Please enter a task');
}else{
   
    count++;

    
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('id', `task${count}`);
    var newLabel = document.createElement('label');
    newLabel.setAttribute('for', `task`);
    newLabel.innerHTML = " "+document.getElementById('input').value;
    

    var newBr = document.createElement('br');
    
    document.getElementById("task").appendChild(newInput);
    document.getElementById("task").appendChild(newLabel);
    
    document.getElementById("task").appendChild(newBr);

    input.value = '';

    info.innerHTML = `0 OUT OF ${count} TASKS COMPLETED`;
}

});


task.addEventListener("change", function(){
    let counter = 0;   
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let labels = document.querySelectorAll('label[for=task]');
    let buttons = document.querySelectorAll('button[id=taskBt]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            counter++;
            labels[i].style.textDecoration = "line-through";
           
        }else{labels[i].style.textDecoration = "none";}
    }
    info.innerHTML = `${counter} OUT OF ${count} TASKS COMPLETED`;
    
})






