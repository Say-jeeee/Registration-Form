document.getElementById("form").addEventListener("submit", function(e) {
    let firstname = document.getElementById("firstname").value.trim();
    let middlename = document.getElementById("middlename").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let id = document.getElementById("Id").value.trim();
    let email = document.getElementById("email").value.trim();

    if (firstname === "") {
        alert("First name is required.");
        e.preventDefault();
        return;
    }
    if (middlename === "") {
        alert("Middle name is required.");
        e.preventDefault();
        return;
    }
    if (lastname === "") {
        alert("Last name is required.");
        e.preventDefault();
        return;
    }
    if (id === "" || !/^[0-9-]+$/.test(id)) {
        alert("Please enter a valid ID (numbers and dashes only).");
        e.preventDefault();
        return;
    }
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
    }
    alert("Form submitted successfully!");
});
