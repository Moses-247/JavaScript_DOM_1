        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var isValid = true;

            // Name validation
            var name = document.getElementById('name').value;
            if (name.length < 5) {
                isValid = false;
                document.getElementById('nameError').textContent = 'Name must be at least 5 characters long.';
            } else {
                document.getElementById('nameError').textContent = '';
            }

            // Password validation
            var password = document.getElementById('password').value;
            var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
            if (!passwordPattern.test(password)) {
                isValid = false;
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long and include letters, numbers, and symbols.';
            } else {
                document.getElementById('passwordError').textContent = '';
            }

            // Phone number validation
            var phone = document.getElementById('phone').value;
            var phonePattern = /^\d{8}$/;
            if (!phonePattern.test(phone)) {
                isValid = false;
                document.getElementById('phoneError').textContent = 'Phone number must be exactly 8 digits long.';
            } else {
                document.getElementById('phoneError').textContent = '';
            }

            if (isValid) {
                alert('Form submitted successfully!');
            }
        });
