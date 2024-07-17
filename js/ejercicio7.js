function tablaDeMultiplicar(numero, i){
    let tabla = parseInt(numero) * i
        return tabla
    }


let numero = prompt("Ingrese el numero para saber su tabla de multiplicar")
    for(let i=1;i<=10;i++){

        let tablaNumero = tablaDeMultiplicar(numero,i)
        document.write(`<p>La tabla completa es: ${numero} x ${i} = ${tablaNumero}</p>`)
    }
