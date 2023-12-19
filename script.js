document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    const cpfRegex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
    if (!cpf.match(cpfRegex) && cpf.length !== 11) {
      document.getElementById('cpf').classList.add('is-invalid');
    } else {
      document.getElementById('cpf').classList.remove('is-invalid');
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      document.getElementById('email').classList.add('is-invalid');
    } else {
      document.getElementById('email').classList.remove('is-invalid');
    }
  
    if (password.length < 8) {
      document.getElementById('password').classList.add('is-invalid');
    } else {
      document.getElementById('password').classList.remove('is-invalid');
    }
  
    if (password !== confirmPassword) {
      document.getElementById('confirmPassword').classList.add('is-invalid');
    } else {
      document.getElementById('confirmPassword').classList.remove('is-invalid');
    }
  
    if (
      fullName !== '' &&
      cpf.match(cpfRegex) &&
      email.match(emailRegex) &&
      password.length >= 8 &&
      password === confirmPassword
    ) {
      document.getElementById('successMessage').style.display = 'block';
    }
  });
  