/**
 * Class-Man | עמוד קטגוריה – מוצרים לפי קטגוריה
 */
document.addEventListener('DOMContentLoaded', function () {
  Cart.initCart();

  document.querySelector('.nav-toggle')?.addEventListener('click', function () {
    document.querySelector('.nav-links')?.classList.toggle('active');
    document.querySelector('.nav-toggle')?.classList.toggle('active');
  });

  if (typeof PRODUCTS === 'undefined' || typeof CATEGORIES === 'undefined') return;

  var params = new URLSearchParams(window.location.search);
  var catId = params.get('cat');
  var cat = catId ? CATEGORIES[catId] : null;

  var heroImage = document.getElementById('category-hero-image');
  var titleEl = document.getElementById('category-title');
  var descEl = document.getElementById('category-desc');
  var gridEl = document.getElementById('category-products');
  var notFoundEl = document.getElementById('category-not-found');

  if (!cat || !gridEl) {
    if (notFoundEl) notFoundEl.style.display = 'block';
    return;
  }

  if (titleEl) titleEl.textContent = cat.name || 'קטגוריה';
  if (descEl) descEl.textContent = cat.description || '';
  if (heroImage && cat.image) heroImage.style.backgroundImage = 'url(' + cat.image + ')';

  var ids = cat.productIds || [];
  function card(id) {
    var p = PRODUCTS[id];
    if (!p) return '';
    var img = p.image ? '<img src="' + p.image + '" alt="" class="product-card-img">' : '<div class="product-image-placeholder"></div>';
    return (
      '<a href="product/product-' + id + '.html" class="product-card">' +
        '<div class="product-image">' + img + '</div>' +
        '<div class="product-card-info"><h3>' + (p.name || '') + '</h3><span class="product-card-price">₪' + (p.price || 0) + '</span></div>' +
        '<span class="product-card-link">לפרטים</span>' +
      '</a>'
    );
  }
  gridEl.innerHTML = ids.map(card).join('');
});
