function insert(number) 
{
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + number;
} 
function clean()
{
const resultado = document.getElementById('resultado').innerHTML = "";
}

function back()
{
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() 
{
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = 'Aperte o botão C'
    } 
}

function on() {
    const resultado = document.getElementById('resultado').innerHTML = 'Olá';
}

function off() {
    const resultado = document.getElementById('resultado').innerHTML = 'Tchau';    
}
