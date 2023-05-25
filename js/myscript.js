const count=parseInt(prompt('Fino a che numero vuoi contare?'))*1000;
let second=0;

function start(){
    alert('INIZIA LA LEZIONE')
    clearInterval(clock)
}
function contare(counter){
    counter=counter+1;
    console.log(counter)
}
const clock=setInterval(contare,1000,second)

setTimeout(start,count)
