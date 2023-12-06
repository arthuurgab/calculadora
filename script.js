// Inserta um número na screen
function insert(num) {
     var numero = document.getElementById('screen').innerHTML;
     document.getElementById('screen').innerHTML = numero + num
}

// Limpa a tela (OFF)
function clean(){
    document.getElementById('screen').innerHTML = '';
}

// Apaga o último número digitado da screen (DEL)
function back(){
    var resultado = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = resultado.substring(0, resultado.length -1);
}

// Calcula os resultados
function calculate(){
    var resultado = document.getElementById('screen').innerHTML;
    if (resultado) {
        document.getElementById('screen').innerHTML = eval(resultado);
    }
}