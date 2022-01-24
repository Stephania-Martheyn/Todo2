
var op1 ="Piedra";
var op2= "Papel";
var op3="Tijera";
var maquina

function juguemos (a){
   if (a == "Tijera" && maquina =="Papel"){
      return console.log("Haz ganado el juego")
   }
   else if (a == "Papel" && maquina =="Tijera"){
      return console.log("Haz perdido el juego")
   }
   else if (a == "Piedra" && maquina =="Tijera"){
      return console.log("Haz ganado el juego")
   }
   else if (a == "Tijera" && maquina =="Piedra"){
      return console.log("Haz perdido el juego")
   }
   else if (a == "Papel" && maquina =="Piedra"){
      return console.log("Haz ganado el juego")
   }
      else if (a == "Piedra" && maquina =="Papel"){
      return console.log("Haz perdido el juego")
   }
   else if (a == "Piedra" && maquina =="Piedra"){
      return console.log("Haz empatado el juego")
   }
   else if (a == "Papel" && maquina =="Papel"){
      return console.log("Haz empatado el juego")
   }
   else if (a == "Tijera" && maquina =="Tijera"){
      return console.log("Haz empatado el juego")
   }
   else {return console.log("Haz ingresado un valor invalido")}

}
maquina=op3;
juguemos(op1);