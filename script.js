document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-box");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = input.value.trim();
      if (query !== "") {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    });
  });
  