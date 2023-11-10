document.addEventListener('DOMContentLoaded', function () {
    const urlForm = document.getElementById('urlForm');
    const resultContainer = document.getElementById('resultContainer');
    const shortUrlElement = document.getElementById('shortUrl');
  
    urlForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const longUrlInput = document.getElementById('longUrl');
      const longUrl = longUrlInput.value.trim();
  
      // Make an AJAX request to your backend
      fetch('/api/url/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      })
        .then(response => response.json())
        .then(data => {
          // Assuming the backend returns the shortened URL
          const shortUrl = data.shortUrl;
  
          resultContainer.style.display = 'block';
          shortUrlElement.textContent = shortUrl;
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
    });
  });
  