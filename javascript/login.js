const login_user = "Diegobusuline";
const login_pass = "Diego2024";



function pop(){
    var plogin = document.getElementById('user').value;
    var ppass = document.getElementById('senha').value;

    if(plogin == login_user && ppass == login_pass){
        window.location.href ='clientes.html'
    } else if (plogin == "" || ppass == "") {
        alert('informe um usuario e uma senha')
    } else (
        alert ('Usuario ou senha invalidos')
    )
}