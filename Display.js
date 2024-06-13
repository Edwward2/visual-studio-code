class Display {
    constructor(displayValorAnt, displayValorAct) {
        /* Constructor de la clase Display, recibe dos parámetros: displayValorAnt y displayValorAct */
        this.displayValorAct = displayValorAct; /* Asigna el elemento displayValorAct recibido como parámetro a la propiedad displayValorAct del objeto */
        this.displayValorAnt = displayValorAnt; /* Asigna el elemento displayValorAnt recibido como parámetro a la propiedad displayValorAnt del objeto */
        this.calculadora = new Calculadora(); /* Crea una nueva instancia de la clase Calculadora y la asigna a la propiedad calculadora del objeto */
        this.tipoOperacion = undefined; /* Inicializa la propiedad tipoOperacion como undefined */
        this.valorAct = ''; /* Inicializa la propiedad valorAct como una cadena vacía */
        this.valorAnt = ''; /* Inicializa la propiedad valorAnt como una cadena vacía */
        this.signos = {
            /* Define un objeto con los signos de las operaciones */
            sumar: '+',
            restar: '-',
            multiplicar: 'X',
            dividir: '%'
        };
    }

    borrar() {
        /* Método borrar de la clase Display */
        this.valorAct = this.valorAct.toString().slice(0, -1); /* Elimina el último carácter de la propiedad valorAct */
        this.printValores(); /* Llama al método printValores para actualizar la visualización */
    }

    limpiar() {
        /* Método limpiar de la clase Display */
        this.valorAct = ''; /* Establece la propiedad valorAct como una cadena vacía */
        this.valorAnt = ''; /* Establece la propiedad valorAnt como una cadena vacía */
        this.tipoOperacion = undefined; /* Establece la propiedad tipoOperacion como undefined */
        this.printValores(); /* Llama al método printValores para actualizar la visualización */
    }

    computar(tipo) {
        /* Método computar de la clase Display, recibe el tipo de operación como parámetro */
        this.tipoOperacion !== 'igual' && this.calcular(); /* Verifica si la operación previa no fue 'igual' y llama al método calcular */
        this.tipoOperacion = tipo; /* Establece el tipo de operación actual */
        this.valorAnt = this.valorAct || this.valorAnt; /* Asigna el valor actual a valorAnt si no está vacío, de lo contrario, mantiene el valor anterior */
        this.valorAct = ''; /* Reinicia el valor actual */
        this.printValores(); /* Llama al método printValores para actualizar la visualización */
    }

    agregarNumero(numero) {
        /* Método agregarNumero de la clase Display, recibe el número seleccionado como parámetro */
        if (numero === '.' && this.valorAct.includes('.')) /* Verifica si ya hay un punto decimal en valorAct */
            return; /* Si ya hay un punto decimal, sale del método */
        this.valorAct = this.valorAct.toString() + numero.toString(); /* Concatena el número seleccionado al valor actual */
        this.printValores(); /* Llama al método printValores para actualizar la visualización */
    }

    printValores() {
        /* Método printValores de la clase Display */
        this.displayValorAct.textContent = this.valorAct; /* Actualiza el contenido del elemento HTML displayValorAct con el valor actual */
        this.displayValorAnt.textContent = `${this.valorAnt} ${this.signos[this.tipoOperacion] || ''}`; /* Actualiza el contenido del elemento HTML displayValorAnt con el valor anterior y el signo de la operación actual, si existe */
    }

    calcular() {
        /* Método calcular de la clase Display */
        const valorAnt = parseFloat(this.valorAnt); /* Convierte el valor anterior a un número de punto flotante */
        const valorAct = parseFloat(this.valorAct); /* Convierte el valor actual a un número de punto flotante */

        if (isNaN(valorAct) || isNaN(valorAnt)) return; /* Verifica si alguno de los valores no es un número, en cuyo caso termina la ejecución del método */

        const resultado = this.calculadora[this.tipoOperacion](valorAnt, valorAct); /* Calcula el resultado de la operación actual */
        this.valorAct = resultado === 0 ? '0' : resultado.toString(); /* Actualiza el valor actual con el resultado de la operación, convirtiéndolo en una cadena si es necesario */
    }
}