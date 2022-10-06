let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let name = id("fname"),
    email = id("email"),
    subject = id("subject"),
    message = id("message"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

  
form.addEventListener("submit", (e) => {
    e.preventDefault();
  });


  let engine = (id, serial, message) => {}