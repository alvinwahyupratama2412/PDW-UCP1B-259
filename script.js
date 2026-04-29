let data = [
    { nama: "Budi", email: "budi@gmail.com", minat: "Programming" },
    { nama: "Siti", email: "siti@gmail.com", minat: "Data" }
];

if (document.getElementById("tableData")) {
    let table = document.getElementById("tableData");

    data.forEach(d => {
        let row = table.insertRow();
        row.insertCell(0).innerText = d.nama;
        row.insertCell(1).innerText = d.email;
        row.insertCell(2).innerText = d.minat;
    });
}