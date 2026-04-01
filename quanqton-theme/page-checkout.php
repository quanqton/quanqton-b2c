<?php get_header(); ?>

<?php
/**
 * page-checkout.php — QuanQton Checkout Page
 * Single-page layout with progress bar, form, order summary sidebar.
 */
?>

<div class="checkout-page">
    <div class="container">

        <!-- Progress Bar -->
        <div class="progress-bar" role="progressbar" aria-label="Etapas do checkout">
            <div class="progress-step active">
                <div class="step-bubble">1</div>
                <span class="step-label">Carrinho</span>
            </div>
            <div class="progress-step">
                <div class="step-bubble">2</div>
                <span class="step-label">Dados</span>
            </div>
            <div class="progress-step">
                <div class="step-bubble">3</div>
                <span class="step-label">Pagamento</span>
            </div>
            <div class="progress-step">
                <div class="step-bubble">4</div>
                <span class="step-label">Confirmação</span>
            </div>
        </div>

        <div class="checkout-grid">

            <!-- ── LEFT: Form ────────────────────────── -->
            <div class="checkout-form-section">

                <!-- STEP 1: Cart Review -->
                <div data-checkout-step="1">
                    <h3>Revisão do Pedido</h3>
                    <div style="background:rgba(10,30,61,0.5);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;margin-bottom:24px">
                        <p style="color:var(--silver);margin-bottom:16px">Confirme os itens antes de continuar.</p>
                        <?php if (class_exists('WooCommerce') && WC()->cart && WC()->cart->get_cart_contents_count() > 0): ?>
                            <?php foreach (WC()->cart->get_cart() as $key => $item):
        $prod = $item['data'];
        $name = $prod->get_name();
        $price = WC()->cart->get_product_price($prod);
        $qty = $item['quantity'];
        $sub = WC()->cart->get_product_subtotal($prod, $qty);
?>
                            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07)">
                                <div>
                                    <div style="font-weight:600"><?php echo esc_html($name); ?></div>
                                    <div style="font-size:0.85rem;color:var(--silver)">Qty: <?php echo esc_html($qty); ?></div>
                                </div>
                                <div style="color:var(--sky);font-weight:700"><?php echo $sub; ?></div>
                            </div>
                            <?php
    endforeach; ?>
                        <?php
else: ?>
                            <div style="text-align:center;padding:20px 0;color:var(--silver)">
                                <div style="font-size:2rem;margin-bottom:8px">🛒</div>
                                <p>Nenhum item no carrinho. <a href="#produtos" style="color:var(--sky)">Adicionar produtos →</a></p>
                            </div>
                        <?php
endif; ?>
                    </div>

                    <!-- Coupon -->
                    <div class="coupon-section">
                        <h3>Cupom de Desconto</h3>
                        <div class="coupon-input-wrapper">
                            <input type="text" id="couponCode" class="form-input" placeholder="Ex: QUANQTON15" style="flex:1" aria-label="Código do cupom">
                            <button id="applyCoupon" class="btn btn-outline" style="white-space:nowrap">Aplicar</button>
                        </div>
                        <div id="couponStatus" class="coupon-status" role="status" aria-live="polite"></div>
                    </div>

                    <button data-next-step class="btn btn-primary" style="width:100%;margin-top:24px;padding:18px">
                        Continuar com Meus Dados →
                    </button>
                    <a href="<?php echo esc_url(home_url('/')); ?>#produtos" class="btn btn-continue" style="display:block;width:100%;margin-top:12px;text-align:center;padding:12px">
                        ← Continuar Comprando
                    </a>
                </div>

                <!-- STEP 2: Personal Data -->
                <div data-checkout-step="2" style="display:none">
                    <h3>Dados Pessoais e Entrega</h3>
                    <form id="checkoutForm" novalidate>
                        <div class="form-grid">
                            <div class="form-group full">
                                <label for="nome">Nome Completo *</label>
                                <input type="text" id="nome" name="nome" class="form-input" placeholder="Seu nome completo" required autocomplete="name">
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail *</label>
                                <input type="email" id="email" name="email" class="form-input" placeholder="seu@email.com" required autocomplete="email">
                            </div>
                            <div class="form-group">
                                <label for="telefone">Telefone / WhatsApp *</label>
                                <input type="tel" id="telefone" name="telefone" class="form-input" placeholder="(11) 99999-9999" required autocomplete="tel">
                            </div>
                            <div class="form-group">
                                <label for="cpf">CPF *</label>
                                <input type="text" id="cpf" name="cpf" class="form-input" placeholder="000.000.000-00" required maxlength="14">
                            </div>
                            <div class="form-group">
                                <label for="cep">CEP *</label>
                                <input type="text" id="cep" name="cep" class="form-input" placeholder="00000-000" required maxlength="9" autocomplete="postal-code">
                            </div>
                            <div id="cep-status" role="status" aria-live="polite" style="font-size:0.8rem;display:flex;align-items:center;grid-column:span 1"></div>
                            <div class="form-group full">
                                <label for="logradouro">Endereço *</label>
                                <input type="text" id="logradouro" name="logradouro" class="form-input" placeholder="Rua, Avenida..." required autocomplete="address-line1">
                            </div>
                            <div class="form-group">
                                <label for="numero">Número *</label>
                                <input type="text" id="numero" name="numero" class="form-input" placeholder="123" required>
                            </div>
                            <div class="form-group">
                                <label for="complemento">Complemento</label>
                                <input type="text" id="complemento" name="complemento" class="form-input" placeholder="Apto, Bloco...">
                            </div>
                            <div class="form-group">
                                <label for="bairro">Bairro *</label>
                                <input type="text" id="bairro" name="bairro" class="form-input" placeholder="Seu bairro" required>
                            </div>
                            <div class="form-group">
                                <label for="cidade">Cidade *</label>
                                <input type="text" id="cidade" name="cidade" class="form-input" placeholder="Sua cidade" required>
                            </div>
                            <div class="form-group">
                                <label for="estado">Estado *</label>
                                <select id="estado" name="estado" class="form-select form-input" required>
                                    <option value="">Selecione...</option>
                                    <?php
$states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
foreach ($states as $s)
    echo "<option value=\"$s\">$s</option>";
?>
                                </select>
                            </div>
                        </div>

                        <div style="display:flex;gap:12px;margin-top:8px">
                            <button type="button" data-back-step class="btn btn-outline" style="flex:1">← Voltar</button>
                            <button type="button" data-next-step class="btn btn-primary" style="flex:2;padding:18px">Ir para Pagamento →</button>
                        </div>
                    </form>
                </div>

                <!-- STEP 3: Payment -->
                <div data-checkout-step="3" style="display:none">
                    <h3>Pagamento</h3>

                    <div class="payment-placeholder">
                        <div class="pay-icon">💳</div>
                        <p style="margin-bottom:8px;color:var(--white);font-weight:600">Gateway de Pagamento</p>
                        <p style="font-size:0.9rem">Integre com PagSeguro, Mercado Pago, Stripe ou Gerencianet.<br>O widget de pagamento será exibido aqui após configurar o plugin de pagamento no WordPress.</p>
                        <div style="margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
                            <span style="background:rgba(255,255,255,0.08);padding:6px 14px;border-radius:6px;font-size:0.8rem">💳 Cartão</span>
                            <span style="background:rgba(255,255,255,0.08);padding:6px 14px;border-radius:6px;font-size:0.8rem">🏦 PIX</span>
                            <span style="background:rgba(255,255,255,0.08);padding:6px 14px;border-radius:6px;font-size:0.8rem">📄 Boleto</span>
                        </div>
                    </div>

                    <div style="display:flex;gap:12px;margin-top:24px">
                        <button type="button" data-back-step class="btn btn-outline" style="flex:1">← Voltar</button>
                        <button type="button" data-next-step class="btn btn-primary" style="flex:2;padding:18px">Confirmar Pedido ✓</button>
                    </div>
                </div>

                <!-- STEP 4: Confirmation -->
                <div data-checkout-step="4" style="display:none;text-align:center;padding:60px 0">
                    <div style="font-size:5rem;margin-bottom:24px">🎉</div>
                    <h2 style="font-size:2.5rem;margin-bottom:16px">Pedido Confirmado!</h2>
                    <p style="margin-bottom:8px">Obrigado pela sua compra! Você receberá um e-mail com os detalhes do pedido.</p>
                    <p style="margin-bottom:32px;color:var(--sky)">Seu <strong>Sal Perfeito</strong> está a caminho. ⚡</p>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary btn-lg">Voltar à Loja</a>
                </div>

            </div><!-- /checkout-form-section -->


            <!-- ── RIGHT: Order Summary ────────────── -->
            <div class="order-summary-sidebar">
                <div class="summary-header">
                    <h3>🧂 Resumo do Pedido</h3>
                </div>

                <div class="summary-items">
                    <?php if (class_exists('WooCommerce') && WC()->cart && WC()->cart->get_cart_contents_count() > 0):
    $subtotal_val = WC()->cart->get_subtotal();
    foreach (WC()->cart->get_cart() as $key => $item):
        $prod = $item['data'];
        $name = $prod->get_name();
        $sub = WC()->cart->get_product_subtotal($prod, $item['quantity']);
?>
                    <div class="summary-item">
                        <span class="summary-item-name"><?php echo esc_html($name); ?> × <?php echo $item['quantity']; ?></span>
                        <span class="summary-item-price"><?php echo $sub; ?></span>
                    </div>
                    <?php
    endforeach;
else:
    $subtotal_val = 0;
?>
                    <p style="color:var(--silver);font-size:0.9rem">Nenhum item.</p>
                    <?php
endif; ?>
                </div>

                <div class="summary-totals">
                    <div class="total-row">
                        <span class="label">Subtotal</span>
                        <span class="value summary-subtotal-val" data-value="<?php echo class_exists('WooCommerce') ? esc_attr(WC()->cart->get_subtotal()) : '0'; ?>">
                            <?php echo class_exists('WooCommerce') ? WC()->cart->get_cart_subtotal() : 'R$ 0,00'; ?>
                        </span>
                    </div>
                    <div class="total-row">
                        <span class="label">Frete</span>
                        <span class="value" style="color:#4caf50">
                            <?php
if (class_exists('WooCommerce') && WC()->cart->get_subtotal() >= 150) {
    echo 'Grátis ✓';
}
else {
    echo 'A calcular';
}
?>
                        </span>
                    </div>
                    <div class="total-row discount">
                        <span class="label">Desconto (cupom)</span>
                        <span class="value" style="color:#4caf50">—</span>
                    </div>
                    <div class="total-row grand">
                        <span class="label" style="font-weight:700;color:var(--white)">Total</span>
                        <span class="value">
                            <?php echo class_exists('WooCommerce') ? WC()->cart->get_cart_total() : 'R$ 0,00'; ?>
                        </span>
                    </div>
                </div>

                <!-- Trust -->
                <div style="padding:16px 24px;border-top:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;gap:8px">
                    <div style="font-size:0.8rem;color:var(--silver);display:flex;align-items:center;gap:8px">🔒 Pagamento 100% seguro</div>
                    <div style="font-size:0.8rem;color:var(--silver);display:flex;align-items:center;gap:8px">🚚 Frete grátis acima de R$150</div>
                    <div style="font-size:0.8rem;color:var(--silver);display:flex;align-items:center;gap:8px">✅ Satisfação garantida</div>
                </div>
            </div><!-- /order-summary-sidebar -->

        </div><!-- /checkout-grid -->
    </div><!-- /container -->
</div><!-- /checkout-page -->

<?php get_footer(); ?>
