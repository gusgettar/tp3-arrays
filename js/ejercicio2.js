const ciudades= []



do{
    ciudades.push(prompt("Ingrese las ciudades"))
}

while(confirm("¿Desea seguir ingresando ciudades?"))

    for(let i=0; i<ciudades.length;i++){
        document.write(`<p> ${ciudades[i]}</p>`)

    }
    document.write(`<p>La longitud del arreglo es: ${ciudades.length} ciudades</p>`)
    document.write(`<p>la ciudad del primer item del arreglo es: ${ciudades[0]}</p>`)
    document.write(`<p>la ciudad del tercer item del arreglo es: ${ciudades[2]}</p>`)
    document.write(`<p>la ciudad del ultimo item del arreglo es: ${ciudades[ciudades.length-1]}</p>`)
    ciudades.push('París')
    alert(`elemento de la segunda posicion: ${ciudades[1]}`)
    ciudades.splice(1,1,'Barcelona')
    document.write(`<p> Luego de reemplazar el item de la segunda posicion quedo como: ${ciudades[1]}`)


    