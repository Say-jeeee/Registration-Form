const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email.trim() === "") {
      alert("Please enter an email address.");
      return;
    }
    alert("Thank you! Submitted email: " + email);
    this.reset();
});
