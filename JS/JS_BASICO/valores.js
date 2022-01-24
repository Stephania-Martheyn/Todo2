//declarativa: se pueden llamar antes de ser declaradas
function miFuncion(){
    return 3;
}
miFuncion();

//expresion: para llamarlas deben ser declaradas

var miFuncion= function(a,b){
    return a + b;
}

miFuncion();