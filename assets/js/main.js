function revealPassword () {
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

function validate(){
    var inputPass = document.getElementById('senha')
    var len = document.getElementById('minimum-characters')
    var symbol = document.getElementById('one-symbol')

    if(inputPass.value.length > 8){
        len.style.color='green'
    } else {
        len.style.color='red'
    }

    if(inputPass.value.match(/[!\@\#\$\%\¨\&\*\(\)\-\+\=\/\\\,\.\;\:\?\^\~\{\}\[\]\]]/)){
        symbol.style.color='green'
    } else {
        symbol.style.color='red'

    }

}
       
