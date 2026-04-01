<?php get_header(); ?>

<?php
/**
 * front-page.php — QuanQton Ocean Salt Landing Page
 * All 11 sections assembled in conversion order.
 */

$products = [
    'integral' => [
        'name' => 'Sal Perfeito Integral',
        'slug' => 'sal-integral',
        'icon' => '🌊',
        'color' => '#1a5fd4',
        'sizes' => [
            ['weight' => '250g', 'price' => 'R$ 26,00', 'id' => 101, 'desc' => 'O primeiro passo. Rende até 60 dias para uma pessoa. Menos de R$0,45 por dia.'],
            ['weight' => '500g', 'price' => 'R$ 39,50', 'id' => 102, 'desc' => 'O favorito de quem já conhece. Rende 3 a 4 meses para duas pessoas. Menos de R$0,45 por dia.'],
            ['weight' => '1kg', 'price' => 'R$ 62,00', 'id' => 103, 'desc' => 'Para a casa inteira. Rende 5 a 6 meses para uma família de 4. Menos de R$0,40 por dia.'],
            ['weight' => '2kg', 'price' => 'R$ 89,00', 'id' => 104, 'badge' => 'Mais Vendido', 'tag' => 'Melhor Custo-Benefício', 'desc' => 'A escolha de quem já não abre mão. Rende até 12 meses. Menos de R$0,25 por dia. O melhor custo por grama da linha.'],
        ],
    ],
    'churrasco' => [
        'name' => 'Sal de Churrasco',
        'slug' => 'sal-churrasco',
        'icon' => '🔥',
        'color' => '#2a7fff',
        'sizes' => [
            ['weight' => '250g', 'price' => 'R$ 26,00', 'id' => 201, 'desc' => 'Para conhecer. O sal que respeita a carne. Cristais maiores que distribuem o sabor sem dissolver antes do tempo.'],
            ['weight' => '2kg', 'price' => 'R$ 89,00', 'id' => 204, 'badge' => 'Popular', 'desc' => 'Para quem não quer ficar sem. O companheiro de toda grelha. Economia de até 35% por grama em relação ao 250g.'],
        ],
    ],
    'endurance' => [
        'name' => 'Endurance — Eletrólitos do Atlântico',
        'slug' => 'sal-endurance',
        'icon' => '⚡',
        'color' => '#ff7c2a',
        'sizes' => [
            ['weight' => '250g', 'price' => 'R$ 32,00', 'id' => 301, 'desc' => 'Reposição mineral natural para treino e competição. Sem corante. Sem açúcar. Sem sabor artificial. Apenas o oceano trabalhando.'],
            ['weight' => '500g', 'price' => 'R$ 48,50', 'id' => 302, 'badge' => 'Alta Performance', 'desc' => 'O protocolo de eletrólitos de quem treina sério. Rende 3 a 4 meses de uso diário pós-treino.'],
        ],
    ]
];
?>

<!-- ================================================
     SECTION 1: HERO
     ================================================ -->
<section id="inicio" style="min-height:100vh;position:relative;display:flex;align-items:center;overflow:hidden;background:radial-gradient(ellipse at 20% 50%,#0a2a5e,#030810 60%),radial-gradient(ellipse at 80% 20%,#0d1f4a,transparent 60%);padding:120px 0 80px">

    <!-- Particles -->
    <div class="particles" aria-hidden="true" id="particles"></div>

    <div class="container" style="position:relative;z-index:2;width:100%">
        <div class="hero-grid">

            <!-- Copy -->
            <div class="hero-copy">
                <span class="section-label fade-in">Sal marinho integral colhido artesanalmente do Oceano Atlântico</span>
                <h1 class="hero-headline fade-in fade-in-delay-1">O Sal Perfeito.<br>Com tudo que o oceano colocou.<br>Sem nada que a indústria tirou.</h1>
                <p class="hero-body fade-in fade-in-delay-2">80 minerais preservados. Zero refino. A diferença que você sente desde a primeira semana.</p>

                <div class="hero-stats fade-in fade-in-delay-3">
                    <span class="stat-item">⚗️ 80+ Minerais</span>
                    <span class="stat-item">🌿 100% Natural</span>
                    <span class="stat-item">📅 Desde 2016</span>
                    <span class="stat-item">🚫 Zero Refino</span>
                </div>

                <div class="hero-ctas fade-in fade-in-delay-3">
                    <a href="#produtos" class="btn btn-primary btn-lg">Quero experimentar o Sal Perfeito →</a>
                    <a href="#historia" class="btn btn-outline btn-lg">Descobrir a origem →</a>
                </div>
            </div>

            <!-- Visual -->
            <div class="hero-visual fade-in fade-in-delay-2">
                <div class="product-mockup">
                    <div class="product-mockup-icon">🌊</div>
                    <div class="product-mockup-label">QUANQTON<br>OCEAN SALT</div>
                    <div class="product-mockup-sub">SAL MARINHO INTEGRAL<br>80+ Minerais Essenciais</div>
                    <div style="width:80px;height:1px;background:rgba(42,127,255,0.4);position:relative;z-index:1"></div>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- ================================================
     SECTION 2: SOCIAL PROOF BAR
     ================================================ -->
<section id="social-proof">
    <div class="marquee-wrapper">
        <div class="marquee-track">
            <?php
$items = [
    ['👨‍👩‍👧‍👦', 'Mais de 25.000 famílias brasileiras'],
    ['🔬', '80+ minerais preservados'],
    ['🌊', 'Colhido artesanalmente do Atlântico'],
    ['🌿', 'Zero refino, zero aditivos'],
    ['📜', 'Laudo TECPAR certificado'],
    ['💚', 'Satisfação garantida'],
];
// Duplicate for seamless loop
$all = array_merge($items, $items);
foreach ($all as $item): ?>
            <span class="marquee-item">
                <strong><?php echo $item[0]; ?></strong><?php echo esc_html($item[1]); ?>
            </span>
            <?php
endforeach; ?>
        </div>
    </div>
</section>


<!-- ================================================
     SECTION 3: PROBLEM / AGITATION
     ================================================ -->
<section id="problema">
    <div class="container">
        <span class="section-label" style="text-align:center;display:block">O PROBLEMA</span>
        <h2 class="fade-in">E SE O PROBLEMA NUNCA FOI O SAL?<br>FOI O QUE FIZERAM COM ELE.</h2>

        <div class="problem-text-block fade-in fade-in-delay-1" style="max-width:800px;margin:40px auto;text-align:center;font-size:1.15rem;line-height:1.8;color:var(--silver)">
            <p style="margin-bottom:20px">Você adiciona sal em tudo que come. Todo dia.</p>
            <p style="margin-bottom:20px">Mas o sal que a indústria vende passou por um processo que remove quase tudo que o oceano colocou — e adiciona antiagregantes químicos no lugar.</p>
            <p style="margin-bottom:20px">O que sobra no pacote branco é basicamente cloreto de sódio puro.<br>O que sobra no seu corpo é a falta de 80 elementos que ele precisava.</p>
            <p style="margin-bottom:20px;color:var(--white);font-weight:600">A indústria chama isso de purificação.<br>Nós chamamos de empobrecimento.</p>
        </div>

        <p class="problem-transition fade-in fade-in-delay-2" style="max-width:800px;margin:0 auto;text-align:center;">
            "A QuanQton não tira nada. Não adiciona nada.<br>Apenas colhe, lava com água do próprio oceano e seca ao sol e ao vento —<br>como se fazia antes de existir indústria."
        </p>
    </div>
</section>


<!-- ================================================
     SECTION 4: STORY
     ================================================ -->
<section id="historia">
    <div class="container">
        <div class="story-grid">

            <!-- Portrait -->
            <div class="story-portrait fade-in">
                <div class="portrait-frame">
                    <div class="portrait-icon">🧬</div>
                    <div class="portrait-caption">René Quinton<br>(1866–1925)<br>Pai da Terapia Marinha</div>
                </div>
            </div>

            <!-- Narrative -->
            <div class="story-copy">
                <span class="section-label fade-in">A ORIGEM</span>
                <h2 style="text-align:left" class="fade-in">Uma busca. Um oceano. O sal que mudou tudo.</h2>

                <div class="pull-quote fade-in">
                    "A medicina não tinha mais resposta. Então fomos buscar onde a vida sempre começou: no mar."
                </div>
                <p class="author-credit fade-in">— Família QuanQton</p>

                <p class="fade-in" style="margin-top:24px">Em 2014, recebemos o diagnóstico que toda família teme. Os médicos não tinham mais respostas.</p>

                <p class="fade-in" style="margin-top:16px">Foi nessa busca que encontramos o trabalho de René Quinton, fisiologista francês que demonstrou algo extraordinário: a composição mineral do oceano e a do nosso sangue são quase idênticas.</p>

                <p class="fade-in" style="margin-top:16px">Se o mar pode nutrir a vida, pensamos, por que estamos retirando tudo isso do sal?</p>

                <p class="fade-in" style="margin-top:16px">Em 2016, nasceu a QuanQton. Com um único compromisso: trazer ao Brasil um sal que preserve o que o oceano levou milênios para criar. Nada adicionado. Nada removido.</p>

                <p class="fade-in" style="margin-top:16px">Hoje somos mais de <strong style="color:var(--white)">25.000 famílias</strong> que fazem essa escolha todos os dias.</p>

                <div class="quinton-box fade-in">
                    <h4>🔬 René Quinton (1866–1925)</h4>
                    <p><em>"O fisiologista que descobriu que o oceano carrega a fórmula da vida"</em></p>
                    <p style="margin-top:8px">Quinton demonstrou que a composição mineral do Oceano Atlântico — sódio, magnésio, potássio, cálcio, cloretos e mais de 75 elementos traço — replica de forma extraordinária o ambiente interno das nossas células. Seus estudos são a base científica que inspira a QuanQton desde o primeiro dia.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- ================================================
     SECTION 5: BENEFITS
     ================================================ -->
<section id="beneficios">
    <div class="container">
        <span class="section-label" style="text-align:center;display:block">CIÊNCIA + NATUREZA</span>
        <h2 class="fade-in">POR QUE O SAL QUANQTON<br>É DIFERENTE</h2>

        <div class="benefit-cards">
            <div class="benefit-card fade-in">
                <div class="benefit-icon">⚗️</div>
                <div>
                    <h3>80+ elementos naturais. Intactos.</h3>
                    <p>O oceano levou milênios para equilibrar essa composição. Nós apenas colhemos. Sódio, magnésio, potássio, cálcio, cloretos — e mais de 75 elementos traço que o refino industrial remove. Nada é retirado. Nada é adicionado.</p>
                </div>
            </div>
            <div class="benefit-card fade-in fade-in-delay-1">
                <div class="benefit-icon">🚫</div>
                <div>
                    <h3>Colhido à mão. Lavado com água do oceano. Seco ao sol e ao vento.</h3>
                    <p>Nenhum branqueador. Nenhum antiagregante. Nenhum iodo artificial. O processo não mudou porque não precisava mudar — a natureza já havia feito o trabalho.</p>
                </div>
            </div>
            <div class="benefit-card fade-in fade-in-delay-2">
                <div class="benefit-icon">💪</div>
                <div>
                    <h3>O sal que devolve o que falta</h3>
                    <p>7 em cada 10 brasileiros consomem magnésio e potássio abaixo do ideal — dois minerais essenciais para músculo, coração, sono e equilíbrio hídrico. No QuanQton, chegam na proporção exata que o oceano estabeleceu.</p>
                </div>
            </div>
            <div class="benefit-card fade-in fade-in-delay-3">
                <div class="benefit-icon">⚡</div>
                <div>
                    <h3>A diferença que você sente</h3>
                    <p>Mais de 25.000 famílias relatam mudanças em energia, sono, digestão e disposição. Não é coincidência — é o corpo recebendo o que sempre precisou e nunca encontrou no sal refinado.</p>
                </div>
            </div>
        </div>

        <!-- Minerals Breakdown (The 5 Key Minerals) -->
        <h3 class="fade-in" style="text-align:center;margin-top:60px;margin-bottom:30px">O que o Oceano Atlântico colocou em cada grama</h3>
        <div class="minerals-tabs fade-in">
            <!-- Simplified accordion or grid for the 5 minerals based on Rec 8 -->
            <div class="mineral-item">
                <h4 style="color:var(--sky)">Sódio — o eletrólito que regula tudo</h4>
                <p>O sódio é essencial para o equilíbrio hídrico, a transmissão nervosa e a contração muscular. No sal marinho integral, o sódio vem acompanhado dos minerais que o corpo precisa para metabolizá-lo adequadamente — diferente do sal refinado, onde chega isolado e sobrecarrega os rins.</p>
                <small>Concentração no QuanQton: 38% por amostra</small>
            </div>
            <div class="mineral-item" style="margin-top:24px">
                <h4 style="color:var(--sky)">Magnésio — o mineral que 7 em cada 10 brasileiros não recebem o suficiente</h4>
                <p>Cofator em mais de 300 reações que o seu corpo realiza a cada segundo. Da contração muscular ao sono profundo, da regulação do açúcar no sangue ao equilíbrio do sistema nervoso. O magnésio marinho do QuanQton é biodisponível — o corpo o reconhece porque vem na mesma forma que existe no plasma sanguíneo.</p>
                <small>Concentração no QuanQton: 0,020% por amostra</small>
            </div>
            <div class="mineral-item" style="margin-top:24px">
                <h4 style="color:var(--sky)">Potássio — o contrapeso natural do sódio</h4>
                <p>Essencial para a pressão arterial, a função cardíaca e o equilíbrio hídrico. O potássio e o sódio trabalham em par — quando um está em excesso e o outro falta, o corpo descompensa. No QuanQton, chegam juntos, na proporção que o oceano estabeleceu.</p>
                <small>Concentração no QuanQton: 0,046% por amostra</small>
            </div>
            <div class="mineral-item" style="margin-top:24px">
                <h4 style="color:var(--sky)">Cálcio — além dos ossos</h4>
                <p>Fundamental para a coagulação sanguínea, a transmissão nervosa e o ritmo cardíaco. Mais de 99% do cálcio do corpo está nos ossos — mas o 1% restante é o que mantém o coração batendo no ritmo certo. No sal marinho integral, o cálcio vem na forma de cloreto e sulfato de cálcio, absorvidos naturalmente pelo organismo.</p>
                <small>Concentração no QuanQton: 0,080% por amostra</small>
            </div>
            <div class="mineral-item" style="margin-top:24px">
                <h4 style="color:var(--sky)">Cloretos — o eletrólito esquecido</h4>
                <p>Trabalha com o sódio e o potássio para manter o equilíbrio ácido-base do sangue e auxiliar na produção do ácido clorídrico — essencial para a digestão. No sal marinho integral, os cloretos chegam na forma de cloreto de sódio e cloreto de magnésio, em equilíbrio natural com os demais minerais.</p>
                <small>Concentração no QuanQton: 98,5g/100g por amostra</small>
            </div>
            <div style="margin-top:30px; text-align:center; padding:15px; background:rgba(255,255,255,0.05); border-radius:8px">
                <p style="font-size:0.9rem; color:var(--silver); margin:0">Os resultados acima são da análise conduzida pelo TECPAR — Instituto de Tecnologia do Paraná, laboratório acreditado pelo INMETRO. Laudo nº 2084/25. <a href="/laudo.pdf" style="color:var(--sky);text-decoration:underline" target="_blank">[Ver laudo completo →]</a></p>
            </div>
        </div>
    </div>
</section>


<!-- ================================================
     SECTION 6.5: PIRÂMIDE (NEW)
     ================================================ -->
<section id="piramide" style="padding:100px 0; background-color:#030810; position:relative;">
    <div class="container" style="display:flex; flex-direction:column; align-items:center; text-align:center;">
        <span class="section-label fade-in">UM SEGREDO QUE O SAL GUARDA</span>
        <h2 class="fade-in" style="max-width:800px; margin-bottom:40px">Quando o sal marinho é puro de verdade, ele se forma em pirâmide.</h2>
        
        <div class="piramide-image-placeholder fade-in fade-in-delay-1" style="width:100%; max-width:600px; height:350px; background:linear-gradient(145deg, rgba(26,95,212,0.1), rgba(42,127,255,0.05)); border:1px solid rgba(42,127,255,0.2); border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:40px;">
            <p style="color:var(--silver); font-size:0.9rem">[ Espaço para Foto Real de Alta Qualidade dos Cristais Piramidais ]</p>
        </div>

        <div style="max-width:700px; font-size:1.1rem; line-height:1.8; color:var(--silver)" class="fade-in fade-in-delay-2">
            <p style="margin-bottom:16px">Durante a cristalização natural nas salinas, o sal marinho integral forma cristais com uma geometria extraordinária: pirâmides de quatro lados simétricas e perfeitas.</p>
            <p style="margin-bottom:16px">Esse fenômeno — documentado em publicações científicas internacionais — só acontece quando o processo de evaporação é lento, natural e não interferido. Quando o sal é refinado, aquecido ou processado industrialmente, essa formação é destruída para sempre.</p>
            <p style="margin-bottom:16px">Poucas salinas no mundo conseguem produzir esse cristal. E quase ninguém fala sobre isso.</p>
            <p style="color:var(--white)">O QuanQton chega até você com essa geometria preservada — prova visível de que nada foi corrompido no caminho do oceano até a sua mesa.</p>
        </div>
    </div>
</section>


<!-- ================================================
     SECTION 7: PRODUCTS
     ================================================ -->
<section id="produtos">
    <div class="container">
        <span class="section-label" style="text-align:center;display:block">A LINHA COMPLETA DO SAL PERFEITO</span>
        <h2 class="fade-in">PARA CADA MOMENTO, CADA MESA, CADA OBJETIVO.</h2>

        <?php foreach ($products as $type => $product): ?>
        <div class="products-group">
            <div class="products-group-title fade-in">
                <?php echo $product['icon']; ?> <?php echo esc_html($product['name']); ?>
            </div>
            <div class="product-grid">
                <?php foreach ($product['sizes'] as $size): ?>
                <div class="product-card fade-in">
                    <?php if (!empty($size['badge'])): ?>
                    <span class="product-badge"><?php echo esc_html($size['badge']); ?></span>
                    <?php
        endif; ?>
                    <?php if (!empty($size['tag'])): ?>
                    <div style="position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(90deg,var(--blue),var(--sky));color:#fff;font-size:0.7rem;font-weight:700;letter-spacing:0.04em;padding:5px 12px;text-align:center;z-index:2">
                        ⭐ <?php echo esc_html($size['tag']); ?>
                    </div>
                    <?php
        endif; ?>
                    <div class="product-img" style="background:linear-gradient(145deg,<?php echo esc_attr($product['color']); ?>22,#061428)">
                        <div class="product-img-icon"><?php echo $product['icon']; ?></div>
                        <div class="product-img-label">QUANQTON</div>
                    </div>
                    <div class="product-info">
                        <div class="product-name"><?php echo esc_html($product['name']); ?></div>
                        <div class="product-weight"><?php echo esc_html($size['weight']); ?></div>
                        <?php if(!empty($size['desc'])): ?>
                        <div class="product-desc" style="font-size:0.85rem; color:var(--silver); margin-bottom:12px; line-height:1.4;">
                            <?php echo esc_html($size['desc']); ?>
                        </div>
                        <?php endif; ?>
                        <div class="product-price">
                            <small>R$ </small><?php echo esc_html(str_replace('R$ ', '', $size['price'])); ?>
                        </div>
                        <?php
        // If WooCommerce is active, use add-to-cart URL; otherwise use JS
        if (class_exists('WooCommerce')):
            $cart_url = esc_url(wc_get_cart_url() . '?add-to-cart=' . $size['id']);
?>
                        <a href="<?php echo $cart_url; ?>" class="btn-add-cart" data-product-id="<?php echo esc_attr($size['id']); ?>" data-product-name="<?php echo esc_attr($product['name'] . ' ' . $size['weight']); ?>" data-product-price="<?php echo esc_attr($size['price']); ?>">
                            Adicionar ao Carrinho
                        </a>
                        <?php
        else: ?>
                        <button class="btn-add-cart" data-product-id="<?php echo esc_attr($size['id']); ?>" data-product-name="<?php echo esc_attr($product['name'] . ' ' . $size['weight']); ?>" data-product-price="<?php echo esc_attr($size['price']); ?>">
                            Adicionar ao Carrinho
                        </button>
                        <?php
        endif; ?>
                    </div>
                </div>
                <?php
    endforeach; ?>
            </div>
        </div>
        <?php
endforeach; ?>

    </div>
</section>


<!-- ================================================
     SECTION 7: TESTIMONIALS
     ================================================ -->
<section id="depoimentos">
    <div class="container">
        <span class="section-label" style="text-align:center;display:block">O QUE A NOSSA FAMÍLIA ESTÁ SENTINDO</span>
        <h2 class="fade-in">ELES TROCARAM. E NÃO VOLTARAM.</h2>

        <div class="testimonial-grid">
            <div class="testimonial-card fade-in">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"Uso o sal Quanqton todos os dias e minha pressão arterial está absolutamente controlada sem o remédio. Sem contar com o sabor extraordinário que traz aos alimentos — sabor de verdade."</p>
                <div class="testimonial-author">
                    <div class="avatar">P</div>
                    <div>
                        <div class="author-name">Priscilla C.</div>
                        <div class="author-tag">Cliente QuanQton</div>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in fade-in-delay-1">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"O sal simplesmente curou algum problema no meu sistema digestivo. Eu tinha azia toda noite. Comecei a usar uma pitada toda manhã antes do desjejum e o alívio foi imediato. Esse sal mudou minha vida."</p>
                <div class="testimonial-author">
                    <div class="avatar">C</div>
                    <div>
                        <div class="author-name">Cliente QuanQton</div>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in fade-in-delay-2">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"Minhas dores de endometriose sumiram. Não sinto mais cólicas, meu fluxo de 9 dias está em 5 dias. Minha mente está mais calma, sou outra pessoa. O sono está muito bom — durmo a noite toda."</p>
                <div class="testimonial-author">
                    <div class="avatar">C</div>
                    <div>
                        <div class="author-name">Cliente QuanQton</div>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in fade-in-delay-3" style="display:none">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"Meu nome é Mônica, tenho 55 anos e uso o sal há 5 anos. Sempre tive muita retenção de água — meus tornozelos eram gigantes. Após a utilização do sal meus tornozelos apareceram. Minha pressão se regularizou. Este produto é uma bênção na minha vida."</p>
                <div class="testimonial-author">
                    <div class="avatar">M</div>
                    <div>
                        <div class="author-name">Mônica P., 55 anos</div>
                        <div class="author-tag">Cliente há 5 anos</div>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in fade-in-delay-4" style="display:none">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"Minha família toda usa este sal há 4 anos — na alimentação e dissolvido na água com limão. Até nossos pets usam na água que tomam e notamos que o consumo de ração diminuiu bastante."</p>
                <div class="testimonial-author">
                    <div class="avatar">C</div>
                    <div>
                        <div class="author-name">Crhistiano A.</div>
                        <div class="author-tag">Cliente há 4 anos</div>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in fade-in-delay-5" style="display:none">
                <div class="stars">★★★★★</div>
                <p class="testimonial-text">"Controle de pressão arterial, eliminei a retenção de líquidos, sensação de inchaço, energia nas situações de ficar muito tempo sem poder me alimentar, redução nas dores das articulações — e com o passar do tempo fui descobrindo outros benefícios. Só tenho a agradecer."</p>
                <div class="testimonial-author">
                    <div class="avatar">C</div>
                    <div>
                        <div class="author-name">Cliente QuanQton</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="text-align:center;margin-top:20px">
            <button class="btn btn-outline" onclick="document.querySelectorAll('.testimonial-card').forEach(el=>el.style.display='flex');this.style.display='none'">Carregar mais depoimentos</button>
        </div>

        <div style="margin-top:30px; text-align:center; padding:15px; border-top:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:0.8rem; color:var(--silver); margin:0">Depoimentos reais de clientes. Resultados individuais podem variar. O uso deste produto não substitui orientação médica ou nutricional.</p>
        </div>
    </div>
</section>


<!-- ================================================
     SECTION 8: FAQ
     ================================================ -->
<section id="faq">
    <div class="container">
        <span class="section-label" style="text-align:center;display:block">TIRE SUAS DÚVIDAS</span>
        <h2 class="fade-in">PERGUNTAS FREQUENTES</h2>

        <div class="faq-list">
            <?php
$faqs = [
    [
        'q' => 'O QuanQton realmente tem 80+ minerais?',
        'a' => 'Sim. O sal marinho integral, quando colhido e processado sem refino químico, preserva todos os minerais naturalmente presentes na água do mar. Isso inclui sódio, magnésio, potássio, cálcio, cloretos e mais 75 elementos traço. Nossa análise laboratorial confirma a presença de 80 elementos mensuráveis por amostra.',
    ],
    [
        'q' => 'Como o sal QuanQton é colhido?',
        'a' => 'O sal QuanQton é colhido artesanalmente. A água do Oceano Atlântico entra nas salinas por gravidade natural, evapora lentamente ao sol e ao vento, e os cristais são coletados à mão. Depois são lavados com água do próprio oceano e embalados sem nenhum tratamento adicional. Nenhum aquecimento industrial. Nenhum branqueador. Nenhum antiagregante. O processo não tem segredo — tem apenas tempo, sol e respeito pelo que o oceano criou.',
    ],
    [
        'q' => 'Qual a diferença entre o QuanQton e o sal rosa do Himalaia?',
        'a' => 'Ambos são sais integrais — essa é a semelhança. A diferença está na origem e na composição. O sal do Himalaia vem de depósitos terrestres antigos, fossilizados há milhões de anos. O QuanQton vem do Oceano Atlântico vivo — com a composição mineral que René Quinton demonstrou ser extraordinariamente similar ao plasma sanguíneo humano. É a diferença entre um arquivo e uma fonte ativa.',
    ],
    [
        'q' => 'Como posso ter certeza dos 80+ minerais?',
        'a' => 'A composição mineral do QuanQton é verificada por análise conduzida pelo TECPAR — Instituto de Tecnologia do Paraná, laboratório acreditado pelo INMETRO, especializado em ensaios físico-químicos de alimentos. O laudo confirma a presença e concentração de cada elemento por amostra. Você não precisa acreditar na nossa palavra — pode verificar. <a href="/laudo.pdf" style="color:var(--sky);text-decoration:underline" target="_blank">[Ver laudo completo →]</a>',
    ],
    [
        'q' => 'O que são os cristais em formato de pirâmide que vejo nas fotos?',
        'a' => 'Durante a cristalização natural nas salinas, o sal marinho integral forma cristais com geometria piramidal — um fenômeno documentado cientificamente que só ocorre quando o processo de evaporação é lento e não interferido. Quando o sal é refinado ou aquecido industrialmente, essa formação é destruída. Os cristais em pirâmide são uma prova visível de que o QuanQton chegou até você intacto, exatamente como o oceano o criou.',
    ],
    [
        'q' => 'Quando começo a notar a diferença?',
        'a' => 'A maioria dos nossos clientes relata perceber diferença em energia, digestão e qualidade do sono nas primeiras semanas de uso regular. Os resultados variam de pessoa para pessoa — dependem da alimentação, do estilo de vida e das necessidades individuais. O que é consistente: quem experimenta, raramente volta ao sal refinado.',
    ],
];
foreach ($faqs as $i => $faq): ?>
            <div class="faq-item fade-in" <?php if ($i === 0)
        echo 'style="border-color:rgba(42,127,255,0.4)"'; ?>>
                <button class="faq-question" aria-expanded="<?php echo $i === 0 ? 'true' : 'false'; ?>">
                    <?php echo esc_html($faq['q']); ?>
                    <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer" <?php if ($i === 0)
        echo 'style="max-height:400px;padding:0 24px 22px"'; ?>>
                    <p><?php echo esc_html($faq['a']); ?></p>
                </div>
            </div>
            <?php
endforeach; ?>
        </div>
    </div>
</section>


<!-- ================================================
     SECTION 9: FINAL CTA
     ================================================ -->
<section id="cta-final">
    <div class="container" style="position:relative;z-index:1">
        <h2 class="fade-in" style="text-align:center;margin-bottom:20px">PRONTO PARA FAZER PARTE DA NOSSA FAMÍLIA?</h2>
        <p class="fade-in" style="font-size:1.2rem;text-align:center;margin-bottom:40px;color:var(--silver)">Mais de 25.000 famílias brasileiras já escolheram o Sal Perfeito.</p>

        <div style="max-width:600px;margin:0 auto 40px auto;text-align:center;font-size:1.1rem;line-height:1.6;color:var(--white)" class="fade-in">
            <p style="margin-bottom:12px"><strong>Frete grátis</strong> acima de R$150.</p>
            <p style="margin-bottom:12px"><strong>Satisfação garantida</strong> ou seu dinheiro de volta.</p>
            <p>Se não sentir diferença em 30 dias, devolvemos.<br>Simples assim.</p>
        </div>

        <div style="text-align:center;margin-bottom:48px" class="fade-in">
            <a href="#produtos" class="btn btn-primary btn-lg">Quero o Sal Perfeito →</a>
        </div>

        <div class="trust-badges fade-in">
            <div class="trust-badge">
                <span class="badge-icon">🚚</span>
                Frete grátis acima R$150
            </div>
            <div class="trust-badge">
                <span class="badge-icon">🔒</span>
                Pagamento seguro
            </div>
            <div class="trust-badge">
                <span class="badge-icon">✅</span>
                Satisfação garantida
            </div>
            <div class="trust-badge">
                <span class="badge-icon">🌿</span>
                Produto 100% natural
            </div>
            <div class="trust-badge">
                <span class="badge-icon">📦</span>
                Embalagem premium
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
