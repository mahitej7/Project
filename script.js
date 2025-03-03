function generateTicket() {
    let name = document.getElementById("name").value.trim();
    let description = document.getElementById("description").value.trim();

    if (name === "" || description === "") {
        alert("Please enter both name and issue description.");
        return;
    }

    let ticketId = "T" + Date.now(); // Unique ticket ID
    let status = "Open";

    let table = document.getElementById("ticketTable");
    let row = table.insertRow();

    row.innerHTML = `
        <td>${ticketId}</td>
        <td>${name}</td>
        <td>${description}</td>
        <td class="status">${status}</td>
        <td><button class="resolve-btn" onclick="resolveTicket(this)">Resolve</button></td>
    `;

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
}

function resolveTicket(button) {
    let row = button.parentElement.parentElement;
    row.querySelector(".status").innerText = "Resolved";
    button.disabled = true;
    button.style.background = "#6c757d"; // Grey out button
    button.innerText = "Resolved";
}
