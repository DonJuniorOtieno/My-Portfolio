document.querySelector('form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = {
      firstname: document.getElementById('fname').value,
      lastname: document.getElementById('lname').value,
      country: document.getElementById('country').value,
      email: document.getElementById('email').value
  };
  
  try {
      const response = await fetch('/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
          alert('Message sent successfully!');
          document.querySelector('form').reset();
      } else {
          alert(`Error: ${result.message}`);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
  }
});
  

  