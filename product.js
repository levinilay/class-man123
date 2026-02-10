/**
 * Class-Man | עמוד מוצר דינמי (product.html עם ?id=)
 */
document.addEventListener('DOMContentLoaded', function () {
  Cart.initCart();

  document.querySelector('.nav-toggle')?.addEventListener('click', function () {
    document.querySelector('.nav-links')?.classList.toggle('active');
    document.querySelector('.nav-toggle')?.classList.toggle('active');
  });

  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get('id'), 10);
  if (!id || typeof PRODUCTS === 'undefined' || !PRODUCTS[id]) {
    document.getElementById('product-not-found').style.display = 'block';
    return;
  }
  window.location.href = 'product/product-' + id + '.html';
});
