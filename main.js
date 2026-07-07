// Even odd checker

function checkData() {
    let a = document.getElementById('getNumber').value;

    if (a % 2 == 0) {
        document.getElementById('outputData').innerText = "Even"
    } else {
        document.getElementById('outputData').innerText = "Odd"
    }

}