if (products[4] == "Drop") {
    document.getElementById("productCheck").innerText = products;
} else {
    document.getElementById("productCheck").innerText = "U heeft geen drop";
}

document.getElementById("productSpaces").innerText = products.join(', ' );

document.getElementById("productSpliceBefore").innerText = products;
document.getElementById("productSpliceAfter").innerText = products.splice(2);

products.sort();
document.getElementById("productSort").innerText = products;

let output = document.getElementById("valueOutput");
let input = document.getElementById("inputField");
let shop = [];

function addProduct() {
    let product = input.value;
    shop.push(product);
    document.getElementById("valueOutput").innerText = shop;
}