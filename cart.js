/**
 * Class-Man | עגלת קניות
 */
const Cart = (function () {
  const STORAGE_KEY = 'classman_cart';

  function getCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
  }

  function addToCart(id, name, price, size = null, quantity = 1, image = null) {
    const cart = getCart();
    const existing = cart.find(function (item) {
      return item.id === id && item.size === size;
    });
    if (existing) {
      existing.quantity += quantity;
      if (image != null) existing.image = image;
    } else {
      cart.push({
        id: id,
        name: name,
        price: price,
        size: size,
        quantity: quantity,
        image: image || null
      });
    }
    saveCart(cart);
  }

  function removeFromCart(id, size) {
    let cart = getCart();
    cart = cart.filter(function (item) {
      return !(item.id === id && item.size === size);
    });
    saveCart(cart);
  }

  function openCart() {
    document.querySelector('.cart-sidebar')?.classList.add('active');
    document.querySelector('.cart-overlay')?.classList.add('active');
  }

  function closeCart() {
    document.querySelector('.cart-sidebar')?.classList.remove('active');
    document.querySelector('.cart-overlay')?.classList.remove('active');
  }

  function updateUI() {
    const cart = getCart();
    const total = cart.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
    const count = cart.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);

    const priceEl = document.querySelector('.cart-price');
    const countEl = document.querySelector('.cart-count');
    if (priceEl) priceEl.textContent = '₪' + total.toFixed(2);
    if (countEl) countEl.textContent = count;

    const itemsEl = document.querySelector('.cart-items');
    const emptyEl = document.querySelector('.cart-empty');
    if (!itemsEl) return;

    const isProductPage = (window.location.pathname || '').indexOf('/product/') !== -1;

    if (cart.length === 0) {
      itemsEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
    } else {
      if (emptyEl) emptyEl.style.display = 'none';
      itemsEl.innerHTML = cart.map(function (item) {
        let imageSrc = item.image || null;
        if (!imageSrc && typeof PRODUCTS !== 'undefined' && item.id && PRODUCTS[item.id]?.image) {
          imageSrc = PRODUCTS[item.id].image;
        }
        const imgPath = imageSrc ? (isProductPage ? '../' + imageSrc : imageSrc) : '';
        return (
          '<div class="cart-item" data-id="' + item.id + '" data-size="' + (item.size || '') + '">' +
          '<div class="cart-item-image">' + (imgPath ? '<img src="' + imgPath + '" alt="">' : '') + '</div>' +
          '<div class="cart-item-info">' +
          '<h4>' + (item.name || '') + (item.size ? ' (' + item.size + ')' : '') + '</h4>' +
          '<p>₪' + (item.price * item.quantity) + '</p>' +
          '</div>' +
          '<button type="button" class="cart-item-remove" aria-label="הסר">×</button>' +
          '</div>'
        );
      }).join('');
    }

    itemsEl.querySelectorAll('.cart-item-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = this.closest('.cart-item');
        if (item) {
          removeFromCart(parseInt(item.dataset.id, 10), item.dataset.size || null);
          updateUI();
        }
      });
    });
  }

  function initCart() {
    updateUI();
    document.querySelector('.cart-btn')?.addEventListener('click', openCart);
    document.querySelector('.cart-close')?.addEventListener('click', closeCart);
    document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
    document.querySelector('.cart-checkout')?.addEventListener('click', function () {
      if (getCart().length === 0) return;
      closeCart();
      var checkoutPath = (window.location.pathname || '').indexOf('/product/') !== -1 ? '../checkout.html' : 'checkout.html';
      window.location.href = checkoutPath;
    });
  }

  return {
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateUI: updateUI,
    openCart: openCart,
    closeCart: closeCart,
    initCart: initCart
  };
})();
