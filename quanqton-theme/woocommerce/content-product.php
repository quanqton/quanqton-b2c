<?php
/**
 * woocommerce/content-product.php
 * Custom product card for QuanQton theme — overrides WooCommerce default loop.
 */
defined('ABSPATH') || exit;

global $product;
if (empty($product) || !$product->is_visible())
    return;

$pid = $product->get_id();
$name = $product->get_name();
$price = $product->get_price_html();
$link = get_permalink($pid);
$weight = $product->get_weight() ? $product->get_weight() . ' kg' : '';

// Badge
$badge = get_post_meta($pid, '_quanqton_badge', true);
// Tag
$tag = get_post_meta($pid, '_quanqton_tag', true);
?>
<div class="product-card <?php echo esc_attr(wc_get_product_class('', $product)); ?>">

    <?php if ($badge): ?>
    <span class="product-badge"><?php echo esc_html($badge); ?></span>
    <?php
endif; ?>

    <?php if ($tag): ?>
    <div style="position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(90deg,var(--blue),var(--sky));color:#fff;font-size:0.7rem;font-weight:700;letter-spacing:0.04em;padding:5px 12px;text-align:center;z-index:2">
        ⭐ <?php echo esc_html($tag); ?>
    </div>
    <?php
endif; ?>

    <!-- Product Image -->
    <a href="<?php echo esc_url($link); ?>" class="product-img" aria-label="<?php echo esc_attr($name); ?>">
        <?php if ($product->get_image_id()): ?>
            <?php echo $product->get_image('quanqton-product', ['loading' => 'lazy', 'style' => 'width:100%;height:100%;object-fit:cover;position:relative;z-index:1']); ?>
        <?php
else: ?>
            <div class="product-img-icon">🌊</div>
            <div class="product-img-label">QUANQTON</div>
        <?php
endif; ?>
    </a>

    <!-- Product Info -->
    <div class="product-info">
        <a href="<?php echo esc_url($link); ?>">
            <div class="product-name"><?php echo esc_html($name); ?></div>
        </a>
        <?php if ($weight): ?>
        <div class="product-weight"><?php echo esc_html($weight); ?></div>
        <?php
endif; ?>
        <div class="product-price"><?php echo $price; ?></div>

        <?php
// Add to cart button
woocommerce_template_loop_add_to_cart([
    'class' => 'btn-add-cart',
    'data-product-id' => $pid,
    'data-product-name' => $name,
]);
?>
    </div>
</div>
