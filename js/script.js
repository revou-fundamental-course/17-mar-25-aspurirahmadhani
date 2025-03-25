// Function to handle the calculation when the button is clicked
document.getElementById('calculateButton').addEventListener('click', function () {
    // Get the value of the side input
    var side = document.getElementById('side').value;

    // Validate the input to ensure it is a positive number
    if (side <= 0 || isNaN(side)) {
        alert("Harap masukkan angka yang valid untuk sisi!");
        return; // Exit if the input is invalid
    }

    // Calculate the area (Luas) and perimeter (Keliling)
    var luas = side * side;
    var keliling = 4 * side;

    // Display the results
    document.getElementById('luas').textContent = "Luas: " + luas + " unit²";
    document.getElementById('keliling').textContent = "Keliling: " + keliling + " unit";
});