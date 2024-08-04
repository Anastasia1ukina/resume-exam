document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('[contenteditable="true"]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (localStorage.getItem(key)) {
      el.innerHTML = localStorage.getItem(key);
    }
  });

  elements.forEach(el => {
    el.addEventListener('blur', function () {
      const key = el.getAttribute('data-key');
      localStorage.setItem(key, el.innerHTML);
    });
  });
});
