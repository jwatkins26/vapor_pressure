function showTemp() {
    let temp = document.getElementById('temp').value;
    let hum = document.getElementById('hum').value;

    temp = farenheitToCelsius(temp);
    svp = findSvp(temp);
    vpd = calculateVpd(svp, hum);

    let newVpd = vpd / 1000;

    document.getElementById('output').value = newVpd.toFixed(2);    
}

function farenheitToCelsius(x) {
    let celsius = (x -32) * .5556;
    return celsius;
}

function findSvp(temp) {
   let svp = 610.78 * Math.E**(temp / (temp + 237.3) * 17.2694);
   return svp;
}

function calculateVpd(svp, hum) {
    let vpd = svp * (1 - hum/100);
    return vpd;
}