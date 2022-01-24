var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";
var maquina;

function juguemos(a) {
  switch (a) {
    case (a == "Tijera" && maquina == "Papel"):
       return console.log("Haz ganado el juego");
      break;

    case (a == "Papel" && maquina == "Tijera"):
         return console.log("Haz perdido el juego");
      break;
    
      case (a == "Piedra" && maquina == "Tijera"):
         return console.log("Haz ganado el juego");
      break;

      case (a == "Tijera" && maquina == "Piedra"):
         return console.log("Haz perdido el juego");
      break;

      case (a == "Papel" && maquina == "Piedra"):
         return console.log("Haz ganado el juego");
      break;


      case (a == "Piedra" && maquina == "Papel"):
         return console.log("Haz perdido el juego");
      break;

      case (a == "Piedra" && maquina == "Piedra"):
         return console.log("Haz empatado el juego");
      break;

      case (a == "Tijera" && maquina == "Tijera"):
         return console.log("Haz empatado el juego");
      break;

      case (a == "Papel" && maquina == "Papel"):
         return console.log("Haz empatado el juego");
      break;


    default:
        return console.log("Haz ingresado un valor invalido")
      break;
  }
  }


maquina = op3;
juguemos(op1);
