/**
 * Class-Man | עמוד קטגוריות
 */
document.addEventListener('DOMContentLoaded', function () {
  Cart.initCart();

  document.querySelector('.nav-toggle')?.addEventListener('click', function () {
    document.querySelector('.nav-links')?.classList.toggle('active');
    document.querySelector('.nav-toggle')?.classList.toggle('active');
  });

  if (typeof CATEGORIES === 'undefined') return;

  var listEl = document.getElementById('categories-list');
  if (!listEl) return;

  var order = ['shirts', 'pants', 'jackets', 'sweaters', 'shoes'];
  var html = '';
  order.forEach(function (key) {
    var cat = CATEGORIES[key];
    if (!cat) return;
    var url = 'category.html?cat=' + encodeURIComponent(cat.id);
    var img = cat.image ? 'style="background-image: url(' + cat.image + ')"' : '';
    html += (
      '<a href="' + url + '" class="category-card">' +
        '<div class="category-image" ' + img + '></div>' +
        '<h3>' + (cat.name || '') + '</h3>' +
        '<p class="category-desc">' + (cat.description || '') + '</p>' +
      '</a>'
    );
  });
  listEl.innerHTML = html;
});
