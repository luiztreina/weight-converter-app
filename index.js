function convert() {
    const inputValue = document.getElementById("inputValue").value;
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "kg") {
        result = `${inputValue} kg = ${(inputValue * 2.20462).toFixed(2)} lb`;
    } else {
        result = `${inputValue} lb = ${(inputValue / 2.20462).toFixed(2)} kg`;
    }

    document.getElementById("result").textContent = result;
}
