// Stap 2:
let output = document.getElementById("output");
let input = document.getElementById("input");

// Stap 3:
let shop = [];

// Stap 4:
function add_product() {
  
    // Stap 5:
  let product = input.value;
  shop.push(product);
  output.innerText = shop;
}
