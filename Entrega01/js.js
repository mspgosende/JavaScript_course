let coeficienteMultiplicacion = parseInt(prompt("Ingresar el coeficiente por le que se quiera multiplicar"))

for (let index = 0; index < 2; index++) {
        let valorMultiplicar=parseInt(prompt("Ingresar número a multiplicarse por el coeficiente que se ingreso previamente"))
        alert(valorMultiplicar*coeficienteMultiplicacion)
}
