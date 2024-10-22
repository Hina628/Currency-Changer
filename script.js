document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

 
    var us_Dollars = parseFloat(document.getElementById('usd').value);
    var total_Dollars = us_Dollars; 
    var soudi_riyal = 28;
    var total_Riyal = parseFloat(document.getElementById('sar').value);

  
    var total_PKR = (104.80 * total_Dollars) + (soudi_riyal * total_Riyal);

    document.getElementById('result').innerHTML = `Total Currency in <b>PKR:</b> ${total_PKR.toFixed(2)}`;
});
