// Login Page JAVASCRIPT START
function login() {
  var username = document.getElementById("lg-email").value;
  var password = document.getElementById("lg-password").value;
  if (username == "asd@gmail.com" && password == "asd") {
    window.open('Project.html', 'self');
  }
  else {
    alert("Incorrect username or password.");
  }
}
function Crt_Acc(){
  window.open('Signup.html','self');
}
// Login Page JAVASCRIPT END
// Signup Page JAVASCRIPT START
function signup() {
  // var sp_entries = document.getElementsByClassName("sp_input").value;
  var sp_fname = document.getElementById("sp_f_name").value;
  var sp_lname = document.getElementById("sp_l_name").value;
  var sp_contact = document.getElementById("sp_contact").value;
  var sp_email = document.getElementById("sp_email").value;
  var sp_pass = document.getElementById("sp_password").value;
  var sp_conf_pass = document.getElementById("sp_conf_password").value;
  if (sp_fname == "" || sp_lname == "" || sp_contact == "" || sp_email == "" || sp_pass == "" || sp_conf_pass == "") {
    alert("Field is required");
  } else {
    if (sp_pass.length < 8) {
      alert("Password Must Be 8 Characters Long!");
    } else {
      if (sp_pass == sp_conf_pass) {
        window.open('Login.html', 'self');
      }
      else {
        alert("Password Must Be Same!")
      }
    }
  }
}

// Signup Page JAVASCRIPT End
// Forgot Password Javascript Start
function forgot() {
  var fg_pass = document.getElementById("fg_password").value;
  var fg_conf_pass = document.getElementById("fg_conf_password").value;
  
  if (fg_pass == "" || fg_conf_pass == "") {
    alert("Field is required");
  } else {
    if (fg_pass.length < 8){
      alert("Password Must Be 8 Characters Long!");
    } else {
      if(fg_pass == fg_conf_pass){
        window.open('Login.html','self');
      }
      else{
        alert("Password Must Be Same!")
      }
    }
  }
}
// Forgot Password Javascript End

// Project Page JAVASCRIPT End
function Booknow_pg() {
  window.open('Booknow.html', '_self');
}
// Project Page JAVASCRIPT End
// Booknow Page JAVASCRIPT START
// for event date

document.addEventListener('DOMContentLoaded', function () {
  flatpickr("#datetime-input", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    disable: [
      // Disable a specific date
      "2023-07-15",
      // Disable a range of dates
      {
        from: "2023-07-20",
        to: "2023-07-25"
      }
    ],
    // onDayCreate: function (dObj, dStr, fp, dayElem) {
    //   if (fp.isDisabled(dObj)) {
    //     dayElem.classList.add("flatpickr-disabled");
    //   }
    // }
    // Add more options and customization as needed
  });

  var flatpickrContainer = document.querySelector(".flatpickr-calendar");
  var bookedText = document.createElement("div");
  bookedText.className = "flatpickr-booked-text";
  bookedText.textContent = "Booked";
  flatpickrContainer.appendChild(bookedText);
});



// Booknow Page JAVASCRIPT End