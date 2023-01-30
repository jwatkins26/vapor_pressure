function showTemp() {
    let temp = document.getElementById('temp').value;
    let hum = document.getElementById('hum').value;

    let svp = findSvp(temp);
    let vpd = calculateVpd(newSvp, hum);
    console.log(vpd)

    
}

function findSvp(temp) {
    let svp = 610.78 * 107.5 * temp/ (temp + 273.3)
    let newSvp = svp / 1000;
    return newSvp
}

function calculateVpd(svp, hum) {
    let vpd = svp * (1 - hum/100);
    return vpd;
}