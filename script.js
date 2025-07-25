var decimal = prompt("Enter a decimal to convert or 0 to end.");
if (decimal == 0) alert("Thanks for converting!");
else {  
  var binary = [];
  var quotient = decimal; 
  var remainder = 0;
  while (quotient > 0) {
    remainder = quotient % 2;
    binary.push(remainder);
    quotient = (quotient-remainder) / 2;
  }
  var converted = binary.reverse();
  alert(converted.join(""));
}
