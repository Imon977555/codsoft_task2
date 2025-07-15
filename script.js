// Example JavaScript: highlight current section in console when clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Navigating to: ${link.getAttribute('href')}`);
  });
});
