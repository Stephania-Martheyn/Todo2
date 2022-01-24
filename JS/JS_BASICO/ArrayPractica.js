//Colecciones de películas (y más…)

/*El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/

var peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(peliculas[3]);

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

var peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
function MayusculaPelicula(pelicula) {
    console.log(pelicula.toUpperCase())
}

for (var pelicula of peliculas) {
    MayusculaPelicula(pelicula);

}

/* Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.
Importante: las películas animadas también deberían convertirse a
mayúsculas. */

var peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
var peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function combinandoPelis(peliculas, peliculas2) {

    for (let i = 0; i < peliculas2.lenght; i++) {
        peliculas.push(peliculas2[i])
    }
    return peliculas
}

for (let i = 0; i < peliculas.lenght; i++) {
    console.log(peliculas[i]);
}