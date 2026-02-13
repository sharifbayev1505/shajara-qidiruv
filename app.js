let lists = [];

function treeList(
    father = null,
    container = document.getElementById("tree")
) {
    lists
        .filter(item => item.father === father)
        .forEach(item => {
            let div = document.createElement("div");
            div.className = father ? "child card" : "card";
            div.innerHTML = "<b>" + item.name + "</b>";
            container.appendChild(div);

            treeList(item.name, div);
        });
}

function addElement() {
    let name = document.getElementById("childName").value.trim();
    let father = document.getElementById("parentName").value.trim();

    if (!name) return alert("Ismni kiriting");

    lists.push({
        name: name,
        father: father ? father : null
    });

    document.getElementById("tree").innerHTML = "";
    treeList();
}

function addElement1() {
    let name = document.getElementById("childName").value.trim();

    if (!name) return alert("Ismni kiriting");

    lists = lists.filter(item => item.name !== name);

    document.getElementById("tree").innerHTML = "";
    treeList();
}

treeList();

function checkPerson() {
    let name = document.getElementById("searchName").value.trim();
    let result = document.getElementById("searchResult");

    
    let current = lists.find(
        item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!current) {
        result.innerHTML  = "Bunday inson shajarada yo‘q"  ;
        return;
    }

    let generation = 1;

   
    while (current.father) {

        let father = lists.find(
            item => item.name.toLowerCase() === current.father.toLowerCase()
        );

        if (!father) break;

        current = father;
        generation++;
    }

    result.innerHTML =
        name + " shajarada bor " +
        generation + "-avlod.";
}
