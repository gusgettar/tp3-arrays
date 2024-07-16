function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write(`<p>la cadena ${cadena} esta formada por MAYUSCULAS</p>`)
    } else if (cadena === cadena.toLowerCase()) {
        document.write(`<p>la cadena ${cadena} esta formada por MINUSCULAS</p>`)
    } else {
        document.write(`<p>la cadena ${cadena} esta formada por MAYUSCULAS Y MINUSCULAS</p>`)
    }
}

analizarCadena(prompt("Ingrese una cadena de texto para determinar si es mayusculas o minusculas: "))