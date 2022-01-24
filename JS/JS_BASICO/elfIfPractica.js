// Este es el ejercicio sobre el cual trabajar

let edad = 20 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)
if (edad < 18) {
    console.log("No puede pasar al bar.")
}
else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}
else {
    console.log("Puede pasar al bar y tomar alcohol.")
}

/*  1)

Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido." */


let edad = -20 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)
if (edad < 18 && edad > 0) {
    console.log("No puede pasar al bar.")
}
else if (edad < 21 && edad > 0) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}

else if (edad > 21 && edad > 0) {

    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}

else {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}


/* Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad. */

let edad = 21 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)
if (edad < 18 && edad > 0) {
    console.log("No puede pasar al bar.")
}
else if (edad < 21 && edad > 0) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}

else if (edad >= 21 && edad > 0) {

    console.log("Puede pasar al bar, pero no puede tomar alcohol... por cierto, Felicidades por llegar a tus 21!!")
}

else {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}

/*Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?". */

let edad = 21 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)
if (edad < 18 && edad > 0) {
    console.log("No puede pasar al bar.")
}
else if (edad < 21 && edad > 0) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}

else if (edad = 21 && edad > 0) {

    console.log("Puede pasar al bar, pero no puede tomar alcohol... por cierto, ¿Sabías que tu edad es impar?")
}


else {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}


// --------------------BLOQUE 2------------------

/*totalAPagar()
Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
litrosConsumidos.
A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones.
● Si el vehículo es “coche”, el precio por litro es de $86,
● Si es “moto” ha de ser $70.
● Si es “autobús” ha de ser $55.
● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.
 */

function totalAPagar(vehiculo, litrosConsumidos) {
    if (vehiculo == "coche") {
        if (litrosConsumidos <= 25 && litrosConsumidos > 0) {
            return console.log(`Hola vaijero en coche, Tienes que pagar $ ${litrosConsumidos + 50} pesos`)
        }
        else {
            return console.log(`Hola vaijero en coche, Tienes que pagar $ ${litrosConsumidos + 25} pesos`)

        }
    }
    else if (vehiculo == "moto") {
        if (litrosConsumidos <= 25 && litrosConsumidos > 0) {
            return console.log(`Hola vaijero en moto, Tienes que pagar $ ${litrosConsumidos + 50} pesos`)
        }
        else {
            return console.log(`Hola vaijero en moto, Tienes que pagar $ ${litrosConsumidos + 25} pesos`)

        }

    }
    else if (vehiculo == "autobus") {
        if (litrosConsumidos <= 25 && litrosConsumidos > 0) {
            return console.log(`Hola vaijero en moto, Tienes que pagar $ ${litrosConsumidos + 50} pesos`)
        }
        else {
            return console.log(`Hola vaijero en moto, Tienes que pagar $ ${litrosConsumidos + 25} pesos`)

        }

    }
    else { return console.log("Haz ingresado un valor invalido") }

}

totalAPagar("moto", 15);

// --------------------BLOQUE 3------------------