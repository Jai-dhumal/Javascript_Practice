let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {

    let item = document.createElement("li");
    item.innerText = input.value;

    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    item.appendChild(delBtn);
    delBtn.classList.add("Delete");

    input.value = "";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let liitem=event.target.parentElement;
        liitem.remove();
        console.log("deleted");
    }
})


