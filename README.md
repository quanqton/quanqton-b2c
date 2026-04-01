# Quanqton B2C

Repositório oficial do projeto Quanqton B2C contendo o frontend em Next.js e o tema WordPress customizado.

## 📁 Estrutura do Repositório

```
quanqton-b2c/
├── quanqton-frontend/    # Aplicação Next.js (e-commerce)
└── quanqton-theme/       # Tema WordPress customizado
```

---

## 🚀 Frontend Next.js

### Tecnologias

- **Next.js 16.1.6** (App Router)
- **React 19.2.3**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion** (animações)
- **Zustand** (gerenciamento de estado)
- **Lucide React** (ícones)

### Estrutura

```
quanqton-frontend/
├── src/
│   ├── app/              # App Router (páginas)
│   │   ├── page.tsx      # Homepage
│   │   ├── checkout/     # Página de checkout
│   │   └── login/        # Página de login
│   ├── components/
│   │   ├── cart/         # Componentes do carrinho
│   │   ├── layout/       # Header, Footer, Menu
│   │   ├── sections/     # Seções da homepage
│   │   │   ├── Benefits.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Minerals.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Pyramid.tsx
│   │   │   └── ...
│   │   └── ui/           # Componentes reutilizáveis
│   └── lib/
│       └── store/        # Zustand stores
└── public/               # Assets estáticos (imagens, ícones)
```

### Instalação e Execução

```bash
cd quanqton-frontend

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

O projeto estará disponível em: **http://localhost:3000**

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz de `quanqton-frontend/`:

```env
NEXT_PUBLIC_WP_API_URL=http://quanqton.local
```

---

## 🎨 WordPress Theme

Tema customizado para WordPress localizado em `quanqton-theme/`.

### Instalação

1. Copie a pasta `quanqton-theme/` para `wp-content/themes/` do seu WordPress
2. Ative o tema no painel administrativo
3. Configure conforme necessário

### Arquivos Principais

```
quanqton-theme/
├── header.php           # Cabeçalho
├── footer.php           # Rodapé
├── front-page.php       # Página inicial
├── functions.php        # Funções do tema
├── style.css            # Estilos principais
└── assets/              # Assets (JS, CSS, imagens)
```

---

## 🔐 Acesso

Este repositório é **privado** e pertence à organização **quanqton**.

## 📝 Notas

- O frontend utiliza integração com WordPress via API REST
- As imagens dos minerais, produtos e assets estão em `quanqton-frontend/public/`
- O tema WordPress é standalone e pode ser usado independentemente

---

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 20+ (para o frontend)
- PHP 7.4+ (para o WordPress theme)
- WordPress 5.0+ (para o theme)

### Comandos Úteis

```bash
# Frontend
cd quanqton-frontend
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run lint         # Lint do código
```

---

## 📦 Deploy

### Frontend (Next.js)

O projeto está configurado para deploy na **Netlify** (configuração em `.netlify/`).

Outras opções:
- Vercel
- AWS Amplify
- Railway
- Render

### WordPress Theme

Faça upload via FTP ou painel do WordPress para `wp-content/themes/`.

---

## 🤝 Contribuindo

1. Clone o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Propriedade privada da organização Quanqton. Todos os direitos reservados.
