
var items = [];

function showText() {
    let text = document.getElementById("textbox").value.trim();

    if (text !== "") {
        items.push({
            name: text,
            completed: false
        });
    }
    var select =document.getElementById("selectItems")
    itemChanged(select)
    document.getElementById("textbox").value = ""

}



function itemChanged(select) {
    console.log(select.value)

    let output = document.getElementById("output");
    output.innerHTML = "";
    if (select.value === "hide") {



        items.forEach(function (item) {
            let itemDiv = document.createElement("div")
            itemDiv.textContent = item.name;
            itemDiv.classList.add("itemDiv")
            if (!item.completed) {
                output.appendChild(itemDiv);


            }
            itemDiv.onclick = function () {
                item.completed = !item.completed;
                this.classList.toggle("completed");
            }

        });


    } else if (select.value === "show") {
        items.forEach(function (item) {
            let itemDiv = document.createElement("div")
            itemDiv.textContent = item.name;
            itemDiv.classList.add("itemDiv")
            if(item.completed){
                itemDiv.classList.add("completed");
            }
            output.appendChild(itemDiv);
            itemDiv.onclick = function () {
                item.completed = !item.completed;
                this.classList.toggle("completed");
            }

        });
    }
}
