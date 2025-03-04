function addNumbers() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    let sum = num1 + num2;
    document.getElementById("result").textContent = sum;
    console.log(sum)
}
