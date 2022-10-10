x=0;
golFatti= 5;
golSubiti=10;
x= golFatti-golSubiti;



window.alert('Usa il pop up per dare dei messaggi');
window.alert('Sto studiando JS');
document.write('metto h2 da javascript');
console.log('differenza gol è', x);
document.getElementById('testo').innerHTML = "metto un'altro h2";

const button = document.querySelector('input');
document.getElementById('button').addEventListener('click', stampaTesto);
function stampaTesto(){
    document.getElementById('para').innerHTML=x;
}
