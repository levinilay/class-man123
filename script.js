/**
 * Class-Man | דף הבית – מוצרים ו־Don't miss
 */
document.addEventListener('DOMContentLoaded', function () {
  Cart.initCart();

  document.querySelector('.nav-toggle')?.addEventListener('click', function () {
    document.querySelector('.nav-links')?.classList.toggle('active');
    document.querySelector('.nav-toggle')?.classList.toggle('active');
  });

  if (typeof PRODUCTS === 'undefined') return;

  // \"המוצרים הנמכרים ביותר\" – 4 מוצרים קבועים כמו בדמו
  var bestSellerIds = [1, 20, 6, 33];
  // Don't miss – 4 מוצרים קבועים
  var dontMissIds = [23, 27, 2, 16];

  function renderProductCard(id, linkText, cardClass) {
    var p = PRODUCTS[id];
    if (!p) return '';
    var img = p.image
      ? '<img src="' + p.image + '" alt="' + (p.name || '') + '" class="product-card-img">'
      : '<div class="product-image-placeholder"></div>';
    var href = 'product/product-' + id + '.html';
    var cls = (cardClass || 'product-card').trim();
    var link = linkText || 'לפרטים';
    return (
      '<a href="' + href + '" class="' + cls + '">' +
        '<div class="product-image">' + img + '</div>' +
        '<div class="product-info">' +
          '<h3>' + (p.name || '') + '</h3>' +
          '<span class="product-price">₪' + (p.price || 0) + '</span>' +
        '</div>' +
        '<span class="product-card-link">' + link + '</span>' +
      '</a>'
    );
  }

  var gridEl = document.getElementById('products-grid');
  var dontMissEl = document.getElementById('dont-miss-grid');
  if (gridEl) gridEl.innerHTML = bestSellerIds.map(function (id) { return renderProductCard(id, 'לפרטים ולרכישה', 'product-card'); }).join('');
  if (dontMissEl) dontMissEl.innerHTML = dontMissIds.map(function (id) { return renderProductCard(id, 'בחר אפשרויות', 'product-card product-card-light'); }).join('');

});
