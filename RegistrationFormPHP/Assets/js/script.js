document.getElementById("form")?.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let firstname = document.getElementById("firstname").value.trim();
    let middlename = document.getElementById("middlename").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let id = document.getElementById("Id").value.trim();
    let email = document.getElementById("email").value.trim();
    let suffix = document.getElementById("suffix").value.trim();
    let technology = document.getElementById("technology").value.trim();
    let batch = document.getElementById("batch").value.trim();

    if (firstname === "") { 
        alert("First name is required."); 
        return; 
    }
    if (middlename === "") { 
        alert("Middle name is required."); 
        return; 
    }
    if (lastname === "") { 
        alert("Last name is required."); 
        return; 
    }

     if (suffix === "") { 
        alert("Suffix is required."); 
        return; 
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
        alert("Please enter a valid email address."); 
        return; 
    }

    if (id === "" || !/^[0-9-]+$/.test(id)) { 
        alert("Please enter a valid ID (numbers and dashes only)."); 
        return; 
    }

    if (batch === "") { 
        alert("Batch is required."); 
        return; 
    }

    if (technology === "") { 
        alert("Technology is required."); 
        return; 
    }

    sessionStorage.setItem("firstname", firstname);
    sessionStorage.setItem("middlename", middlename);
    sessionStorage.setItem("lastname", lastname);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("suffix",suffix);
    sessionStorage.setItem("batch",batch);
    sessionStorage.setItem("technology",technology);

    window.location.href = "success.php"; 
    });

    if (window.location.pathname.includes("success")) {
    const userData = document.getElementById("userData"); 
    
    ["firstname","middlename","lastname","suffix","id","email","batch","technology"].forEach(field => {
        const value = sessionStorage.getItem(field) || "";
        userData.innerHTML += `<p><strong>${field.toUpperCase()}:</strong> ${value}</p>`;
    });

    document.getElementById("backBtn")?.addEventListener("click", () => {
        window.location.href = "index.php";
    });
}


