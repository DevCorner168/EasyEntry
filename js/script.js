$(document).ready(function() {
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // alert(true);

        // Gather form data
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            message: $("#message").val()
        };

        // AJAX request to PHP script
        $.ajax({
            url: "functions/submit.php",
            type: "POST",
            data: formData,
            success: function(response) {
                if (response.status === "success") {
                    // Corrected template literal syntax
                    $("#responseData").html(`
                        <strong>Name:</strong> ${response.data.name}<br>
                        <strong>Email:</strong> ${response.data.email}<br>
                        <strong>Phone:</strong> ${response.data.phone}<br>
                        <strong>Message:</strong> ${response.data.message}
                    `);
                    $("#response").removeClass("hidden");
                    $("#registrationForm").addClass("hidden");
                } else {
                    alert("Something went wrong. Please try again.");
                }
            },
            error: function() {
                alert("Failed to connect to the server. Please try again later.");
            }
        });
    });
});
