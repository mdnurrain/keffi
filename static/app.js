// Error handling for Signup
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const repeatPassword = document.getElementById('repeatPassword').value;

  if (password !== repeatPassword) {
      alert('Passwords do not match!');
      return;
  }

  // Simulate saving data (in reality, you'd send to a server)
  localStorage.setItem('student', JSON.stringify({ name, email, password }));

  alert('Signup successful!');
  window.location.href = 'timetable.html'; // Redirect to timetable page
});

// Error handling for Login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const student = JSON.parse(localStorage.getItem('student'));

  if (!student || student.email !== email || student.password !== password) {
      alert('Invalid email or password!');
      return;
  }
  alert('Login successful!');
  window.location.href = 'timetable.html'; // Redirect to timetable page
});

// Display Supervisors on button click
document.getElementById('supervisorBtn')?.addEventListener('click', function() {
  const supervisorsList = document.getElementById('supervisorsList');
  supervisorsList.classList.toggle('hidden');
});

// Handle Logout
document.getElementById('logoutBtn')?.addEventListener('click', function() {
  // Clear student data from localStorage
  // localStorage.removeItem('student');
  
  // Redirect to login page
  window.location.href = 'login.html';
});

document.getElementById('supervisorBtn')?.addEventListener('click', function(){
  window.location.href = 'supervisor.html';
})
