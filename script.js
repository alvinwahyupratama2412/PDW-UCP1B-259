let data = [
    { nama: "Budi", email: "budi@gmail.com", minat: "Programming" },
    { nama: "Siti", email: "siti@gmail.com", minat: "Data" }
];

if (document.getElementById("tableData")) 
{
    let table = document.getElementById("tableData");

    data.forEach(d => 
    {
        let row = table.insertRow();
        row.insertCell(0).innerText = d.nama;
        row.insertCell(1).innerText = d.email;
        row.insertCell(2).innerText = d.minat;
    });
}

let form = document.getElementById("formData");

if (form) 
{
    form.addEventListener("submit", function(e) 
    {
        e.preventDefault();

        let nama = document.getElementById("nama").value;
        let email = document.getElementById("email").value;
        let minat = document.getElementById("minat").value;

        let hasil = `Nama: ${nama}, Email: ${email}, Minat: ${minat}`;
        document.getElementById("output").innerText = hasil;

        data.push({ nama, email, minat });

        alert("Data berhasil ditambahkan!");

    });
}

function playAudio() 
{
    document.getElementById("audio").play();
}

function pauseAudio() 
{
    document.getElementById("audio").pause();
}

function tampilPesan() 
{
    alert("Selamat datang di Tech Community!");
}