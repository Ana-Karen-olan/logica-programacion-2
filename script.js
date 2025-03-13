// Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Celsius a Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}


function convertirTemperatura() {
    let celsius;

    while (true) {
        celsius = prompt("Ingresa la temperatura en grados Celsius:");

        // Validacion de la entrada como un número
        if (!isNaN(celsius) && celsius !== "") {
            celsius = parseFloat(celsius); 
            break; 
        } else {
            alert("Error: Debes ingresar un número. Intenta de nuevo.");
        }
    }

    // Celsius a Fahrenheit y Kelvin
    const fahrenheit = celsiusToFahrenheit(celsius);
    const kelvin = celsiusToKelvin(celsius);

    // Mostrar resultados por consola
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);

    // Mostrar resultados en el DOM 
    const resultadosDiv = document.createElement("div");
    resultadosDiv.innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
    document.body.appendChild(resultadosDiv);
}

convertirTemperatura();