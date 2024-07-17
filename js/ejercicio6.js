function perimetro (a,b){
    let calculoPerimetro = 2*(parseInt(a)+parseInt(b))
    return calculoPerimetro
}

const calculoPerimetro = perimetro(prompt("Ingrese el primer lado del rectangulo: "),  prompt("Ingrese el segundo lado del rectangulo:" ))
document.write(`<p>el perimetro del rectangulo ingresado es: ${calculoPerimetro}</p>`)

