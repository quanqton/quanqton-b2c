<?php
/**
 * QuanQton Ocean Salt — functions.php
 */

/* ── Theme Setup ────────────────────────────────── */
function quanqton_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
    add_theme_support( 'html5', [ 'search-form','comment-form','comment-list','gallery','caption','script','style' ] );

    register_nav_menus( [
        'primary'  => __( 'Menu Principal', 'quanqton' ),
        'footer'   => __( 'Menu Rodapé', 'quanqton' ),
    ] );
}
add_action( 'after_setup_theme', 'quanqton_setup' );

/* ── Content Width ───────────────────────────────── */
if ( ! isset( $content_width ) ) { $content_width = 1200; }

/* ── Enqueue Assets ─────────────────────────────── */
function quanqton_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'quanqton-fonts',
        'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap',
        [],
        null
    );

    // Theme styles
    wp_enqueue_style( 'quanqton-style', get_stylesheet_uri(), [ 'quanqton-fonts' ], '1.0.0' );

    // Main JS
    wp_enqueue_script(
        'quanqton-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        true
    );

    // Localise cart AJAX
    wp_localize_script( 'quanqton-main', 'quanqton', [
        'ajaxurl'  => admin_url( 'admin-ajax.php' ),
        'nonce'    => wp_create_nonce( 'quanqton-nonce' ),
        'currency' => get_woocommerce_currency_symbol(),
    ] );

    // WooCommerce AJAX cart fragments
    if ( class_exists( 'WooCommerce' ) ) {
        wp_enqueue_script( 'wc-cart-fragments' );
    }
}
add_action( 'wp_enqueue_scripts', 'quanqton_scripts' );

/* ── WooCommerce: Remove default styles ─────────── */
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

/* ── WooCommerce: Cart fragment update ──────────── */
function quanqton_cart_count_fragment( $fragments ) {
    ob_start();
    ?>
    <span class="cart-count"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
    <?php
    $fragments['.cart-count'] = ob_get_clean();
    $fragments['.cart-subtotal-amount'] = '<strong class="cart-subtotal-amount">' . WC()->cart->get_cart_subtotal() . '</strong>';
    return $fragments;
}
if ( class_exists( 'WooCommerce' ) ) {
    add_filter( 'woocommerce_add_to_cart_fragments', 'quanqton_cart_count_fragment' );
}

/* ── WooCommerce: Add to cart AJAX response ─────── */
function quanqton_woocommerce_loop_add_to_cart_args( $args ) {
    $args['class'] .= ' btn-add-cart';
    return $args;
}
add_filter( 'woocommerce_loop_add_to_cart_args', 'quanqton_woocommerce_loop_add_to_cart_args' );

/* ── Custom template redirect for checkout page ── */
function quanqton_page_template( $template ) {
    if ( function_exists( 'is_checkout' ) && is_checkout() ) {
        $custom = locate_template( 'page-checkout.php' );
        if ( $custom ) return $custom;
    }
    return $template;
}
add_filter( 'template_include', 'quanqton_page_template' );

/* ── Coupon AJAX handler ─────────────────────────── */
function quanqton_apply_coupon() {
    check_ajax_referer( 'quanqton-nonce', 'nonce' );
    $code = sanitize_text_field( $_POST['coupon'] ?? '' );
    if ( strtoupper( $code ) === 'QUANQTON15' ) {
        wp_send_json_success( [ 'discount' => 15, 'message' => '🎉 Cupom aplicado! 15% de desconto.' ] );
    } else {
        wp_send_json_error( [ 'message' => 'Cupom inválido ou expirado.' ] );
    }
}
add_action( 'wp_ajax_quanqton_apply_coupon',        'quanqton_apply_coupon' );
add_action( 'wp_ajax_nopriv_quanqton_apply_coupon', 'quanqton_apply_coupon' );

/* ── Widgets ─────────────────────────────────────── */
function quanqton_widgets_init() {
    register_sidebar( [
        'name'          => __( 'Checkout Sidebar', 'quanqton' ),
        'id'            => 'checkout-sidebar',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ] );
}
add_action( 'widgets_init', 'quanqton_widgets_init' );

/* ── Custom image sizes ───────────────────────────── */
add_image_size( 'quanqton-product',    800, 800, true );
add_image_size( 'quanqton-hero',      1920, 1080, true );
