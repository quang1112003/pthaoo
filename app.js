const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
} 

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Điền đầy đủ họ và tên đi bé :))');
    }else if(usernameInput.value.trim()=='Nguyễn Thị Phương Thảo' || usernameInput.value.trim()=='nguyễn thị phương thảo'){
        setSuccess(usernameInput);
    }else {
        setError(usernameInput, 'Điền chuẩn đi vk eo');
    }
    //TITLE
    if(titleInput.value.trim()==''){
        setError(titleInput, 'Trả lời nốt câu này nhớ =)');
    }else if(titleInput.value.trim()=='có' || titleInput.value.trim()=='iu'|| titleInput.value.trim()=='yah sure chắc chắn là như vậy ròi' || titleInput.value.trim()=='Iu' || titleInput.value.trim()=='co'||titleInput.value.trim()=='iu' || titleInput.value.trim()=='Co'|| titleInput.value.trim()=='Kó' || titleInput.value.trim()=='Có'|| titleInput.value.trim()=='yes'){
        setSuccess(titleInput, "ỏoo");
    }else {
        setError(titleInput, "bội bạc");
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}





