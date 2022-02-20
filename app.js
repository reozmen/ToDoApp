let button = document.getElementById('button');
let input = document.getElementById('input');
let task = document.getElementById('task');
let info = document.getElementById('info');


let checkboxes = document.querySelectorAll('input[type="checkbox"]');
var count = checkboxes.length;


info.innerText = `0 OUT OF ${count} TASKS COMPLETED`;

button.addEventListener('click', function() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = checkboxes.length;
    if(input.value == "" ||input.value == " " || input.value == "  " || input.value == "   "){
   alert('Please enter a task');
}else if(document.querySelectorAll('input[type="checkbox"]').length<=7){
   
    count++;
    
    
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newInput.setAttribute('id', `task${count}`);
    var newLabel = document.createElement('label'); 
    newLabel.setAttribute('for', `task`);
    newLabel.innerText = " "+document.getElementById('input').value;
    

    var newBr = document.createElement('br');
    
    document.getElementById("task").appendChild(newInput);
    document.getElementById("task").appendChild(newLabel);
    
    document.getElementById("task").appendChild(newBr);

    input.value = '';

    let labels = document.querySelectorAll('label[for=task]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxes[i].checked = false;
            labels[i].style.textDecoration = "none"; 
           
        }else{}
    }

    info.innerText = `0 OUT OF ${count} TASKS COMPLETED`;
}else if(document.querySelectorAll('input[type="checkbox"]').length = 7){
    alert('You have reached the maximum number of tasks');
    input.value = '';}

});


task.addEventListener("change", function(){
    
    let counter=0;
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = checkboxes.length;
    let labels = document.querySelectorAll('label[for=task]');
   
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            counter++;
            labels[i].style.textDecoration = "line-through";
           
        }else{labels[i].style.textDecoration = "none";}
    }
    info.innerText = `${counter} OUT OF ${count} TASKS COMPLETED`;
    
})

document.getElementById("del").addEventListener("click", function(){
    
    
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let labels = document.querySelectorAll('label[for=task]');
    let brs = document.querySelectorAll('br');
    
    let count = checkboxes.length
    for (let i = 0; i < checkboxes.length; i++) {
        
        if (checkboxes[i].checked) {
            checkboxes[i].remove();
            labels[i].remove();
            brs[i].remove();
            
            }
            
         }

    console.log(checkboxes.length);

    
    
    let counter = 0;
   
    info.innerText = `${counter} OUT OF ${document.querySelectorAll('input[type="checkbox"]').length} TASKS COMPLETED`;

});







