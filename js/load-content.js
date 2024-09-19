function loadContent(url, elementId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
}


document.addEventListener('DOMContentLoaded', function() {
  // Load the navbar and footer
  loadContent('navbar.html', 'navbar');
  loadContent('footer.html', 'footer');

  // JavaScript code to show more portfolio items
  const viewMoreButton = document.getElementById('view-more');
  const hiddenItems = document.querySelectorAll('.portfolio-item.hidden');

  viewMoreButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the page from scrolling to the top

    hiddenItems.forEach(item => {
      item.classList.remove('hidden'); // Remove 'hidden' class to show the items
    });

    viewMoreButton.style.display = 'none'; // Hide the "View More" button after clicking
  });
});
