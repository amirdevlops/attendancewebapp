let navbarVisible = false;
function shownavaber(){
  const navbar = document.querySelector('.navbar ul');
  navbar.style.left = '0';

  if (navbarVisible) {
    navbar.style.left = '-100%'; // Hide the navbar
  } else {
    navbar.style.left = '0'; // Show the navbar
  }

  // Update the state variable
  navbarVisible = !navbarVisible;
  
  
}