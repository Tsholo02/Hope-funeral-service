document.getElementById("clientForm").addEventListener("submit", function(event){

    event.preventDefault();

    let clientID = document.getElementById("clientID").value;
    let clientName = document.getElementById("clientName").value;
    let contactNumber = document.getElementById("contactNumber").value;

    let table = document.getElementById("clientTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = clientID;
    row.insertCell(1).innerHTML = clientName;
    row.insertCell(2).innerHTML = contactNumber;

    alert("Client Added Successfully!");

    document.getElementById("clientForm").reset();
});
