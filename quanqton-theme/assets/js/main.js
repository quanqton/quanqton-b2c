/**
 * QuanQton Ocean Salt — main.js
 * Handles: header scroll, mobile menu, particles, FAQ accordion,
 *          cart drawer, scroll animations, CEP lookup, coupon validation.
 */

'use strict';

/* ─────────────────────────────────────────────
   1. HEADER: transparent → solid on scroll
   ───────────────────────────────────────────── */
(function initHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    function onScroll() {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
})();


/* ─────────────────────────────────────────────
   2. SMOOTH SCROLL for anchor links
   ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        closeMobileMenu();
    });
});


/* ─────────────────────────────────────────────
   3. MOBILE MENU
   ───────────────────────────────────────────── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    if (hamburgerBtn) {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
        if (mobileMenu.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}
if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMobileMenu);
}


/* ─────────────────────────────────────────────
   4. HERO PARTICLE ANIMATION (pure JS/CSS)
   ───────────────────────────────────────────── */
(function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 40;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');

        const size = Math.random() * 4 + 1;        // 1–5px
        const left = Math.random() * 100;           // 0–100%
        const delay = Math.random() * 15;            // 0–15s
        const duration = Math.random() * 10 + 8;      // 8–18s
        const opacity = Math.random() * 0.5 + 0.2;   // 0.2–0.7

        p.style.cssText = `
            width:${size}px;
            height:${size}px;
            left:${left}%;
            bottom:-${size}px;
            opacity:${opacity};
            animation-duration:${duration}s;
            animation-delay:-${delay}s;
            background:rgba(42,127,255,${opacity});
            box-shadow:0 0 ${size * 3}px rgba(42,127,255,0.8);
        `;
        container.appendChild(p);
    }
})();


/* ─────────────────────────────────────────────
   5. INTERSECTION OBSERVER — Fade-in on scroll
   ───────────────────────────────────────────── */
(function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // fire once
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) { observer.observe(el); });
})();


/* ─────────────────────────────────────────────
   6. FAQ ACCORDION
   ───────────────────────────────────────────── */
(function initFaq() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
        const btn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (!btn || !answer) return;

        btn.addEventListener('click', function () {
            const isOpen = item.classList.contains('open');

            // Close all
            items.forEach(function (other) {
                other.classList.remove('open');
                const otherBtn = other.querySelector('.faq-question');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            });

            // Open clicked (toggle)
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
})();


/* ─────────────────────────────────────────────
   7. CART DRAWER
   ───────────────────────────────────────────── */
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartContinue = document.getElementById('cartContinue');
const cartCountEl = document.querySelector('.cart-count');

// Simple in-memory cart for demo (when WooCommerce not active)
let localCart = [];

function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

if (cartToggle) cartToggle.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
if (cartContinue) cartContinue.addEventListener('click', closeCart);

// Close on pressing Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeCart();
        closeMobileMenu();
    }
});

/* Add to cart handler (fallback for non-WC installs) */
document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
    // Only intercept <button> elements (not WC <a> links)
    if (btn.tagName !== 'BUTTON') return;

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.dataset.productId;
        const name = this.dataset.productName;
        const price = this.dataset.productPrice;

        if (!id || !name) return;

        // Add to local cart
        const existing = localCart.find(function (item) { return item.id === id; });
        if (existing) {
            existing.qty++;
        } else {
            localCart.push({ id, name, price, qty: 1 });
        }

        renderLocalCart();
        updateCartCount();
        openCart();

        // Button feedback
        btn.textContent = '✓ Adicionado!';
        btn.style.background = 'linear-gradient(135deg,#2e7d32,#43a047)';
        setTimeout(function () {
            btn.textContent = 'Adicionar ao Carrinho';
            btn.style.background = '';
        }, 1800);
    });
});

function updateCartCount() {
    if (!cartCountEl) return;
    const total = localCart.reduce(function (sum, item) { return sum + item.qty; }, 0);
    cartCountEl.textContent = total;
}

function renderLocalCart() {
    const itemsEl = document.getElementById('cartItems');
    const subtotalEl = document.querySelector('.cart-subtotal-amount');
    if (!itemsEl) return;

    if (localCart.length === 0) {
        itemsEl.innerHTML = `
            <div class="cart-empty">
                <div class="empty-icon">🧂</div>
                <p>Seu carrinho está vazio.</p>
                <a href="#produtos" class="btn btn-outline" style="margin-top:12px" id="cartContinueShopping">Ver Produtos</a>
            </div>`;
        if (subtotalEl) subtotalEl.textContent = 'R$ 0,00';
        return;
    }

    let html = '';
    let subtotal = 0;

    localCart.forEach(function (item) {
        const price = parseFloat(item.price.replace('R$ ', '').replace('.', '').replace(',', '.')) || 0;
        const lineTotal = price * item.qty;
        subtotal += lineTotal;

        html += `
            <div class="cart-item" data-id="${escHTML(item.id)}">
                <div class="cart-item-img">🧂</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${escHTML(item.name)}</div>
                    <div class="cart-item-price">${escHTML(item.price)}</div>
                    <div class="qty-control">
                        <button class="qty-btn qty-minus" data-id="${escHTML(item.id)}" aria-label="Diminuir">−</button>
                        <input class="qty-input" type="number" value="${item.qty}" min="1" readonly>
                        <button class="qty-btn qty-plus" data-id="${escHTML(item.id)}" aria-label="Aumentar">+</button>
                    </div>
                    <button class="cart-remove" data-id="${escHTML(item.id)}">Remover</button>
                </div>
            </div>`;
    });

    itemsEl.innerHTML = html;

    if (subtotalEl) {
        subtotalEl.textContent = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
    }

    // Bind quantity buttons
    itemsEl.querySelectorAll('.qty-minus').forEach(function (b) {
        b.addEventListener('click', function () { changeQty(this.dataset.id, -1); });
    });
    itemsEl.querySelectorAll('.qty-plus').forEach(function (b) {
        b.addEventListener('click', function () { changeQty(this.dataset.id, 1); });
    });
    itemsEl.querySelectorAll('.cart-remove').forEach(function (b) {
        b.addEventListener('click', function () { removeItem(this.dataset.id); });
    });
}

function changeQty(id, delta) {
    const item = localCart.find(function (i) { return i.id === id; });
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    renderLocalCart();
    updateCartCount();
}

function removeItem(id) {
    localCart = localCart.filter(function (i) { return i.id !== id; });
    renderLocalCart();
    updateCartCount();
}

function escHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}


/* ─────────────────────────────────────────────
   8. CEP AUTO-FILL (ViaCEP API)
   ───────────────────────────────────────────── */
(function initCepLookup() {
    const cepInput = document.getElementById('cep');
    if (!cepInput) return;

    let debounceTimer;
    cepInput.addEventListener('input', function () {
        const raw = this.value.replace(/\D/g, '');

        // Format mask: 00000-000
        if (raw.length <= 8) {
            this.value = raw.length > 5
                ? raw.slice(0, 5) + '-' + raw.slice(5)
                : raw;
        }

        clearTimeout(debounceTimer);
        if (raw.length !== 8) return;

        debounceTimer = setTimeout(function () {
            fetchCep(raw);
        }, 400);
    });

    function fetchCep(cep) {
        const statusEl = document.getElementById('cep-status');
        if (statusEl) { statusEl.textContent = '🔍 Buscando...'; statusEl.style.color = 'var(--silver)'; }

        fetch('https://viacep.com.br/ws/' + cep + '/json/')
            .then(function (r) { return r.json(); })
            .then(function (data) {
                if (data.erro) {
                    if (statusEl) { statusEl.textContent = '❌ CEP não encontrado.'; statusEl.style.color = 'var(--danger)'; }
                    return;
                }
                setField('logradouro', data.logradouro);
                setField('bairro', data.bairro);
                setField('cidade', data.localidade);
                setField('estado', data.uf);
                if (statusEl) { statusEl.textContent = '✓ Endereço encontrado!'; statusEl.style.color = '#4caf50'; }
                // Focus on "Número" after auto-fill
                const numEl = document.getElementById('numero');
                if (numEl) numEl.focus();
            })
            .catch(function () {
                if (statusEl) { statusEl.textContent = '⚠ Erro ao buscar CEP. Preencha manualmente.'; statusEl.style.color = 'var(--danger)'; }
            });
    }

    function setField(id, value) {
        const el = document.getElementById(id);
        if (el && value) el.value = value;
    }
})();


/* ─────────────────────────────────────────────
   9. COUPON VALIDATION (checkout page)
   ───────────────────────────────────────────── */
(function initCoupon() {
    const couponInput = document.getElementById('couponCode');
    const couponBtn = document.getElementById('applyCoupon');
    const couponStatus = document.getElementById('couponStatus');
    const discountRow = document.querySelector('.total-row.discount .value');

    if (!couponBtn) return;

    couponBtn.addEventListener('click', function () {
        const code = (couponInput ? couponInput.value : '').trim().toUpperCase();

        if (code === 'QUANQTON15') {
            if (couponStatus) {
                couponStatus.textContent = '🎉 Cupom aplicado! 15% de desconto.';
                couponStatus.className = 'coupon-status success';
            }
            if (discountRow) discountRow.textContent = '-15%';
            applyCheckoutDiscount(15);
        } else {
            if (couponStatus) {
                couponStatus.textContent = '❌ Cupom inválido ou expirado.';
                couponStatus.className = 'coupon-status error';
            }
        }
    });

    function applyCheckoutDiscount(pct) {
        const totalEl = document.querySelector('.total-row.grand .value');
        const subtotalEl = document.querySelector('.summary-subtotal-val');
        if (!totalEl || !subtotalEl) return;

        const subtotal = parseFloat(subtotalEl.dataset.value || 0);
        if (!subtotal) return;

        const discount = subtotal * (pct / 100);
        const total = subtotal - discount;
        const discEl = document.querySelector('.total-row.discount .value');
        if (discEl) discEl.textContent = '- R$ ' + discount.toFixed(2).replace('.', ',');
        totalEl.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    }
})();


/* ─────────────────────────────────────────────
   10. CHECKOUT PROGRESS BAR
   ───────────────────────────────────────────── */
(function initCheckoutProgress() {
    const steps = document.querySelectorAll('.progress-step');
    const forms = document.querySelectorAll('[data-checkout-step]');
    const nextBtns = document.querySelectorAll('[data-next-step]');
    const backBtns = document.querySelectorAll('[data-back-step]');

    if (!steps.length || !nextBtns.length) return;

    let currentStep = 1;

    function goToStep(n) {
        currentStep = Math.max(1, Math.min(steps.length, n));

        steps.forEach(function (step, i) {
            step.classList.remove('active', 'done');
            if (i + 1 === currentStep) step.classList.add('active');
            if (i + 1 < currentStep) step.classList.add('done');
        });

        forms.forEach(function (form) {
            const s = parseInt(form.dataset.checkoutStep);
            form.style.display = (s === currentStep) ? 'block' : 'none';
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    nextBtns.forEach(function (btn) {
        btn.addEventListener('click', function () { goToStep(currentStep + 1); });
    });
    backBtns.forEach(function (btn) {
        btn.addEventListener('click', function () { goToStep(currentStep - 1); });
    });

    goToStep(1);
})();
