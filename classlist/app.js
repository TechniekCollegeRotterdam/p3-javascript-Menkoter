
let button = document.getElementById("btn")
let block = document.getElementById("block")


button.addEventListener("click", function(){
    block.classList.add("highlight")
})


block.addEventListener("mouseover", function(){
    block.classList.add("highlight")
})


block.addEventListener("mouseout", function(){
    block.classList.remove("highlight")
})


