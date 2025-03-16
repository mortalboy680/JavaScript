let metros = prompt("Ingrese los metros recorridos");


if(metros <= 1000){
    alert("Debes ir a pie");
}else if(metros <= 10000){
    alert("Debes ir en bicileta");
}else if(metros <= 30000){
    alert("Debes ir en colectivo");
}else if(metros <= 100000){
    alert("Debes ir en auto");
}else{
    alert("Debes ir en avion");
}