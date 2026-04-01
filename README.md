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
### WordPress Theme

