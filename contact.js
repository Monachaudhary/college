document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const hideSidebarButton = document.querySelector('.sidebar a'); // Assuming the close button is a link in sidebar

    // Show sidebar
    function showSidebar() {
        sidebar.style.display = 'block';
    }

    // Hide sidebar
    function hideSidebar() {
        sidebar.style.display = 'none';
        
    }

    // Event listeners
    menuButton.addEventListener('click', showSidebar);
    hideSidebarButton.addEventListener('click', hideSidebar);
});
function sendmail(event) {
    event.preventDefault();
    
    var params = {
        message: document.getElementById("message").value,
        email_id: document.getElementById("email").value,
        services: document.getElementById("services").value,
        name: document.getElementById("name").value,
        name: document.getElementById("phone").value,
    };

    emailjs.send("service_b52pvoc", "template_lhu5kvc", params)
        .then(function (res) {
            // Clear the form fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("message").value = "";
            document.getElementById("email").value = "";
            document.getElementById("services").value = "";
            document.getElementById("phone").value = "";

            // Show success message
            var successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";

            // Hide the success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        })
        .catch((err) => console.log("There is an error", err));
}

document.getElementById("contactForm").addEventListener("submit", sendmail);


    
    
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting
    document.getElementById('myModal').style.display = 'block'; // Show modal
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none'; // Close modal
}
