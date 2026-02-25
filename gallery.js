/* ================================
   TAB FILTER LOGIC (Reflowing)
================================ */
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs and add to clicked tab
    galleryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = "flex"; // show item
      } else {
        item.style.display = "none"; // hide completely from grid
      }
    });
  });
});
