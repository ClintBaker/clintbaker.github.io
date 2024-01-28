window.onload = function () {
  // Listen for form submission
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      // prevent default
      event.preventDefault()
      // generate a five digit number for the contact_number variable
      //   this.contact_number.value = 5432;
      //   Send mail using emailjs
      const user_name = document.getElementById('user_name')
      const user_email = document.getElementById('user_email')
      const message = document.getElementById('message')

      //   handle messaging
      const alert = document.getElementById('alert')
      emailjs
        .send('service_67jqwuw', 'contact_form', {
          user_name: user_name.value,
          user_email: user_email.value,
          message: message.value,
        })
        .then(
          function () {
            console.log('SUCCESS!')
            user_name.value = ''
            user_email.value = ''
            message.value = ''

            alert.textContent = 'Message sent successfully!'
            alert.className = 'alert'

            setTimeout(() => {
              alert.textContent = ''
              alert.className = ''
            }, 3000)
          },
          function (error) {
            console.log('FAILED...', error)
            user_name.value = ''
            user_email.value = ''
            message.value = ''

            alert.textContent = 'Unable to send message.'
            alert.className = 'alert'

            setTimeout(() => {
              alert.textContent = ''
              alert.className = ''
            }, 3000)
          }
        )
    })
}
