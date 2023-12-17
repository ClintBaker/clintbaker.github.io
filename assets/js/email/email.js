window.onload = function () {
  // Listen for form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      // prevent default
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      //   this.contact_number.value = 5432;
      //   Send mail using emailjs
      emailjs.sendForm("service_67jqwuw", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
