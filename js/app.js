import { typeEffect, applyEffect } from "./app.function.js";
import { aboutJQuery, jQueryEffects } from "./app.store.js";

$(document).ready(function () {
    // Start typing effect
    typeEffect(aboutJQuery, "#typing-effect", 100, 500); // (value in array , selector , typing speed , nextTextDelay )
    typeEffect(jQueryEffects.hideShowToggle, "#j-query-effects-hide-show-toggle", 300, 1000);
    typeEffect(jQueryEffects.fades, "#j-query-effects-fades", 300, 1000);



    // jQuery Effects - Hide and Show section script  


    applyEffect("#hide", "#methods-performance1", "hide", 500);
    applyEffect("#show", "#methods-performance1", "show", 500);
    applyEffect("#toggle", "#methods-performance1", "toggle", 500);

    applyEffect("#fadeIn", "#methods-performance2", "fadeIn", 500);
    applyEffect("#fadeOut", "#methods-performance2", "fadeOut", 500);
    applyEffect("#fadeToggle", "#methods-performance2", "fadeToggle", 500);
    applyEffect("#fadeTo", "#methods-performance2", "fadeTo", 500);


    $('#simple_timer').syotimer({
        date: new Date(2024, 7, 30, 13, 0),  // Year: 2024, Month: 8 (0-based index), Day: 29, Hour: 13 (1:00 PM), Minutes: 0
        periodic: false,  // Not periodic since it's a one-time countdown
        effectType: 'opacity',


    });


    //  data fetch jsonPlaceholder using AJAX technique and display the web page   -->
    $("#fetchDataBtn").click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: "GET",
            success: function (response) {
                $('#userData').html('');  // Clear previous data
                $.each(response, function (_, user) {

                    // Display user data in the div
                    $('#userData').append(`
                        <div class="col-sm-6 col-md-4 col-lg-4  mb-3">
                        <div class = "border shadow-sm rounded-3">
                            <h3>${user.name}</h3>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                        </div>
                        </div>
                        
                    `);
                });


            },
            error: function (xhr, status, error) {  // Callback function on error
                $('#userData').html('<p>An error occurred while fetching data.</p>');
            }
        })
    })


    // crud application
    
      // Dummy data to simulate server response
      let users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];

    // Function to populate user data in table
    function populateUsers() {
        $('#userTableBody').empty(); // Clear the table body

        users.forEach(user => {
            $('#userTableBody').append(`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="btn btn-warning btn-sm editBtn" data-id="${user.id}">Edit</button>
                        <button class="btn btn-danger btn-sm deleteBtn" data-id="${user.id}">Delete</button>
                    </td>
                </tr>
            `);
        });
    }

    // Initial call to populate user data
    populateUsers();

    // Add or Update user
    $('#userForm').on('submit', function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const userId = $('#userId').val(); // Hidden input to store user ID
        
        if (userId === '') {
            // Add new user
            const newUser = {
                id: users.length + 1,
                name,
                email
            };
            users.push(newUser);
            alert('User added successfully!');
        } else {
            // Update existing user
            const id = parseInt(userId);
            users = users.map(user => user.id === id ? { ...user, name, email } : user);
            alert('User updated successfully!');
            $('#addUserBtn').removeClass('d-none'); // Show Add button
            $('#updateUserBtn').addClass('d-none'); // Hide Update button
        }

        $('#userForm')[0].reset(); // Clear the form
        $('#userId').val(''); // Clear hidden user ID field
        populateUsers(); // Refresh the user table
    });

    // Edit user
    $(document).on('click', '.editBtn', function () {
        const id = $(this).data('id');
        const user = users.find(user => user.id === id);
        
        if (user) {
            $('#userId').val(user.id); // Set hidden user ID field
            $('#name').val(user.name); // Set name field
            $('#email').val(user.email); // Set email field
            $('#addUserBtn').addClass('d-none'); // Hide Add button
            $('#updateUserBtn').removeClass('d-none'); // Show Update button
        }
    });

    // Delete user
    $(document).on('click', '.deleteBtn', function () {
        const id = $(this).data('id');
        users = users.filter(user => user.id !== id);
        alert('User deleted successfully!');
        populateUsers(); // Refresh the user table
    });






});
