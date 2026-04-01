<!-- CART DRAWER -->
<div class="cart-drawer-overlay" id="cartOverlay"></div>

<aside class="cart-drawer" id="cartDrawer" role="dialog" aria-label="Carrinho de compras" aria-modal="true">
    <div class="cart-header">
        <h3>🛒 Seu Carrinho</h3>
        <button class="cart-close" id="cartClose" aria-label="Fechar carrinho">✕</button>
    </div>

    <!-- Dynamic cart items area -->
    <div class="cart-items" id="cartItems">

        <?php if (class_exists('WooCommerce') && WC()->cart && WC()->cart->get_cart_contents_count() > 0): ?>

            <?php foreach (WC()->cart->get_cart() as $item_key => $item):
        $_product = $item['data'];
        $name = $_product->get_name();
        $price = WC()->cart->get_product_price($_product);
        $qty = $item['quantity'];
        $subtotal = WC()->cart->get_product_subtotal($_product, $qty);
?>
            <div class="cart-item" data-key="<?php echo esc_attr($item_key); ?>">
                <div class="cart-item-img">🧂</div>
                <div class="cart-item-details">
                    <div class="cart-item-name"><?php echo esc_html($name); ?></div>
                    <div class="cart-item-price"><?php echo $price; ?></div>
                    <div class="qty-control">
                        <button class="qty-btn qty-minus" aria-label="Diminuir quantidade">−</button>
                        <input class="qty-input" type="number" value="<?php echo esc_attr($qty); ?>" min="1" readonly>
                        <button class="qty-btn qty-plus" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <button class="cart-remove" data-key="<?php echo esc_attr($item_key); ?>">Remover</button>
                </div>
            </div>
            <?php
    endforeach; ?>

        <?php
else: ?>
            <div class="cart-empty">
                <div class="empty-icon">🧂</div>
                <p>Seu carrinho está vazio.</p>
                <a href="#produtos" class="btn btn-outline" style="margin-top:12px" id="cartContinueShopping">Ver Produtos</a>
            </div>
        <?php
endif; ?>

    </div>

    <!-- Cart Footer -->
    <div class="cart-footer">
        <div class="cart-subtotal">
            <span>Subtotal</span>
            <?php if (class_exists('WooCommerce') && WC()->cart): ?>
                <strong class="cart-subtotal-amount"><?php echo WC()->cart->get_cart_subtotal(); ?></strong>
            <?php
else: ?>
                <strong class="cart-subtotal-amount">R$ 0,00</strong>
            <?php
endif; ?>
        </div>
        <div class="cart-actions">
            <?php if (class_exists('WooCommerce')): ?>
                <a href="<?php echo wc_get_checkout_url(); ?>" class="btn-checkout">Finalizar Compra →</a>
            <?php
else: ?>
                <a href="page-checkout.php" class="btn-checkout">Finalizar Compra →</a>
            <?php
endif; ?>
            <button class="btn-continue" id="cartContinue">← Continuar Comprando</button>
        </div>
    </div>
</aside>
