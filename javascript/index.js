function validateForm() {
    let x = document.forms["newsletter"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }