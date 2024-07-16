function espar(numero){
    if(numero % 2 === 0)
        document.write(`<p> el numero ${numero} es PAR </p>`)
        
        else 
            document.write(`<p> el numero ${numero} es IMPAR </p>`)
        
    
}

espar(prompt("Ingrese un numero: "))

