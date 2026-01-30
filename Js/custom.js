function submitButton() {
    const msg = document.getElementById("msg");

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const nid = document.getElementById("nid").value.trim();
    const nationality = document.getElementById("nationality").value.trim();
    const subject = document.getElementById("subject").value;
    const comment = document.getElementById("comment").value.trim();

    // Validation check
    if (!name || !age || !email || !phone || !nid || !nationality || !subject || !comment) {
        msg.innerText = "⚠️ Please fill in all the fields!";
        msg.style.color = "red";
        return;
    }

    // Success message
    msg.innerText = "✅ Thank you! Your survey has been submitted.";
    msg.style.color = "green";

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("nid").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("comment").value = "";
}
