var list = [{
    "description": "tesla car",
    "cnpj": "1234",
}];


console.log(list);

// function getTotal(list) {
//     var total = 0;

//     for (var key in list) {
//         total += list[key].value * list[key].amount;
//     }
//     return total;
// }



function setList() {

    var list = JSON.parse(localStorage.getItem('items'))

    var table = ` <thead class="thead-dark"><tr><th scope="col">Description</th>
    <th scope="col">CNPJ</th>
<th scope="col">Action</th>
    </tr><tbody>`;
    for (key in list) {
        table += '<tr><td scope="row">' + formatDesc(list[key].description) + '</td><td>' + list[key].cnpj + '</td><td><button class="btn btn-warning" onclick="setUpdate(' + key + ')">Update</button> | <button class="btn btn-danger" onclick="deleteData(' + key + ')">Delete</button></td></tr>';
    }

    table += '</tbody>';

    document.getElementById("listTable").innerHTML = table;
}

setList();

function formatDesc(description) {
    var str = description.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

// function formatAmount(amount) {
//     var str = parseFloat(value, amount).toFixed(3); + "";
//     str = str.replace(".", ",");
//     str = "$ " + str;

//     return str;
// }


// function formatValue(value, amount) {
//     return parseInt(amount)
// }

function addData() {

    if (!validation()) {
        return
    }


    var description = document.getElementById('description').value;
    var cnpj = document.getElementById('cnpj').value;


    if (cnpj.length == 14) {

        list.push({ "description": description, "cnpj": cnpj });

        localStorage.setItem('items', JSON.stringify(list));

        setList();

    } else {
        alert('Tem que ter 14 números')

        // var value = document.getElementById('value').value;
        // var amount = document.getElementById('amount').value;

    }
}

function setUpdate(id) {
    var obj = list[id];

    document.getElementById('description').value = obj.description
    document.getElementById('cnpj').value = obj.cnpj
        // document.getElementById('value').value = obj.value
        // document.getElementById('amount').value = obj.amount

    document.getElementById("btnUpdate").style.display = "inline-block"
    document.getElementById("btnAdd").style.display = "none"

    document.getElementById("inputupdate").innerHTML = ' <input id="idUpdate" type="hidden" value="' + id + '">';

}

function resetform() {


    document.getElementById('description').value = ""
    document.getElementById('cnpj').value = ""
        // document.getElementById('value').value = ""
        // document.getElementById('amount').value = ""

    document.getElementById("btnUpdate").style.display = "none"
    document.getElementById("btnAdd").style.display = "inline-block"

    document.getElementById("inputupdate").innerHTML = "";
    document.getElementById("errors").style.display = "none"

}

function updateData() {

    if (!validation()) {
        return
    }

    var id = document.getElementById("idUpdate").value;

    var description = document.getElementById('description').value
    var cnpj = document.getElementById('cnpj').value
        // var value = document.getElementById('value').value
        // var amount = document.getElementById('amount').value

    if (cnpj.length == 14) {

        list[id] = { "description": description, "cnpj": cnpj };

        resetform()
        localStorage.setItem('items', JSON.stringify(list));
        setList(list)
    } else {
        alert('Tem que ter 14 números')
    }


}

function deleteData(id) {


    if (confirm("Are u Sure?")) {
        if (id === list.length - 1) {
            list.pop()
        } else if (id === 0) {
            list.shift()
        } else {
            var Auxini = list.slice(0, id)
            var Auxend = list.slice(id + 1)
            list = Auxini.concat(Auxend)
        }
        localStorage.setItem('items', JSON.stringify(list));
        setList(list)
    }



}

function validation() {
    var description = document.getElementById('description').value
    var cnpj = document.getElementById('cnpj').value
        // var value = document.getElementById('value').value
        // var amount = document.getElementById('amount').value
    var errors = ""
    document.getElementById("errors").style.display = "none"

    if (description === "") {
        errors += '<p>Fill out Description</p>'
    }
    // if (model === "") {
    //     errors += '<p>Fill out Model</p>'
    // }
    if (cnpj === "") {
        errors += '<p>Fill out CNPJ</p>'
    } else if (cnpj != parseInt(cnpj)) {
        errors += '<p>Invalid CNPJ</p>'
    }
    // if (amount === "") {
    //     errors += '<p>Fill out amount</p>'
    // } else if (amount != parseFloat(amount)) {
    //     errors += '<p>Invalid Amount</p>'
    // }

    if (errors != "") {
        document.getElementById("errors").style.display = "block"
        document.getElementById("errors").style.backgroundColor = "black"
        document.getElementById("errors").style.color = "white"
        document.getElementById("errors").style.padding = "30px"
        document.getElementById("errors").style.margin = "30px"
        document.getElementById("errors").style.borderRadius = "30px"

        document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
        return 0
    } else {
        return 1
    }

}