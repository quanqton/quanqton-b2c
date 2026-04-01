<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="QuanQton Ocean Salt — O Sal Perfeito. Sal marinho integral com 83+ minerais essenciais, sem refino químico.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Mobile Menu Overlay -->
<div class="menu-overlay" id="menuOverlay"></div>

<!-- Mobile Menu -->
<nav class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Menu mobile">
    <a href="#inicio">O Sal Perfeito</a>
    <a href="#historia">A Origem</a>
    <a href="#beneficios">A Ciência</a>
    <a href="#produtos">Produtos</a>
    <a href="/para-empresas">Para Empresas</a>
    <a href="#faq">FAQ</a>
    <a href="#produtos" class="btn btn-primary" style="margin-top:16px">Comprar Agora</a>
</nav>

<!-- HEADER -->
<header id="site-header" role="banner">
    <div class="container">
        <div class="header-inner">

            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" aria-label="QuanQton Ocean Salt — Início">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="21" cy="21" r="20" stroke="#2a7fff" stroke-width="1.5"/>
                    <circle cx="21" cy="21" r="10" fill="#1a5fd4" opacity="0.4"/>
                    <circle cx="21" cy="21" r="5"  fill="#2a7fff"/>
                    <path d="M21 4 Q28 12 21 21 Q14 12 21 4Z" fill="#2a7fff" opacity="0.6"/>
                    <path d="M38 21 Q30 28 21 21 Q30 14 38 21Z" fill="#2a7fff" opacity="0.4"/>
                </svg>
                <span class="logo-text">QUANQTON</span>
            </a>

            <!-- Desktop Nav -->
            <nav class="main-nav" role="navigation" aria-label="Menu principal">
                <a href="#inicio">O Sal Perfeito</a>
                <a href="#historia">A Origem</a>
                <a href="#beneficios">A Ciência</a>
                <a href="#produtos">Produtos</a>
                <a href="/para-empresas">Para Empresas</a>
                <a href="#faq">FAQ</a>
            </nav>

            <!-- Header Actions -->
            <div class="header-actions">
                <?php if (class_exists('WooCommerce')): ?>
                <button class="cart-icon-btn" id="cartToggle" aria-label="Abrir carrinho">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <span class="cart-count"><?php echo class_exists('WooCommerce') ? WC()->cart->get_cart_contents_count() : '0'; ?></span>
                </button>
                <?php
endif; ?>

                <a href="#produtos" class="btn btn-primary" style="padding:10px 20px;font-size:0.85rem">Comprar Agora</a>

                <!-- Hamburger -->
                <button class="hamburger" id="hamburgerBtn" aria-label="Abrir menu" aria-expanded="false">
                    <span></span><span></span><span></span>
                </button>
            </div>

        </div>
    </div>
</header>

<!-- Cart Drawer -->
<?php get_template_part('cart-drawer'); ?>

<main id="main-content">
