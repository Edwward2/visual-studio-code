class Calculadora {
    // Método para sumar dos números
    sumar(num1, num2) {
        return num1 + num2;
    }

    // Método para restar dos números
    restar(num1, num2) {
        return num1 - num2;
    }

    // Método para multiplicar dos números
    multiplicar(num1, num2) {
        return num1 * num2;
    }

    // Método para dividir dos números
    dividir(num1, num2) {
        return num1 / num2;
    }
}



/*


1. **Clase Calculadora:**
   - Define una clase `Calculadora` que contiene cuatro métodos para realizar operaciones aritméticas básicas: sumar, restar, multiplicar y dividir. Estos métodos proporcionan la funcionalidad subyacente para realizar cálculos en la calculadora.

2. **Estilos CSS:**
   - Define estilos CSS para la apariencia de la calculadora y los elementos de la interfaz de usuario. Esto incluye el diseño de la calculadora, el estilo de los botones y la visualización de los valores.

3. **HTML:**
   - El HTML estructura la página web y proporciona los elementos necesarios para la interfaz de usuario de la calculadora. Se incluyen elementos para mostrar los valores de la calculadora y botones para ingresar números y realizar operaciones.

4. **JavaScript:**
   - `app.js`: Selecciona los elementos HTML relevantes, como los campos de visualización y los botones, y crea una instancia de la clase `Display`.
   - `Display.js`: Define la clase `Display`, que controla la visualización de los valores y las operaciones en la calculadora. Esta clase maneja la entrada del usuario, realiza cálculos utilizando la clase `Calculadora` y actualiza la interfaz de usuario en consecuencia.
   - `Calculadora.js`: Define la clase `Calculadora`, que contiene los métodos para realizar operaciones aritméticas básicas.

5. **Interacción de Usuario:**
   - Los eventos de clic en los botones numéricos y de operación están vinculados a métodos en la clase `Display`. Cuando se hace clic en un botón, se llama al método correspondiente para agregar números o realizar operaciones.
   - Los métodos en la clase `Display` llaman a los métodos de la clase `Calculadora` para realizar cálculos, y luego actualizan la interfaz de usuario con los resultados.


*/