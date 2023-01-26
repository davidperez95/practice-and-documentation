let desarrollo = new Promise(function(resolve, reject) {
    // acctiones necesarias para conseguir un resultado
    // satisfactorio
    const proyecto = "paquete";

    setTimeout(() => {
        let aleatorio = Math.random()
        if (aleatorio < 0.5) {
            resolve(proyecto);
        } else {
            reject("No entregado a tiempo el paquete");
        }
    }, 1500)
});

desarrollo
    .then((proyecto) => console.log(proyecto))
    .catch((error) => console.log(error))
    .finally(() => console.log('Promesa finalizada'))