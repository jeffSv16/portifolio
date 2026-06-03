# Portfólio — Jeferson Vasselai

Landing page pessoal em **React + Vite + Framer Motion** com design preto e branco, stacks interativas e animações.

**Site:** [portifolio.dev.br](https://portifolio.dev.br/)

## Stack do projeto

- React 19
- Vite 6
- Framer Motion
- Lucide React + React Icons

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173)

## Build e preview

```bash
npm run build
npm run preview
```

---

## Hospedar no GitHub Pages (deploy automático)

### 1. Ativar o GitHub Pages

1. Acesse [github.com/jeffSv16/portifolio/settings/pages](https://github.com/jeffSv16/portifolio/settings/pages)
2. Em **Build and deployment → Source**, selecione **GitHub Actions**
3. Salve

### 2. Domínio próprio (`portifolio.dev.br`)

O arquivo `public/CNAME` já aponta para `portifolio.dev.br`.

No painel do seu provedor de domínio, configure:

| Tipo | Nome | Valor |
|------|------|--------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `jeffsv16.github.io` |

No GitHub, em **Settings → Pages → Custom domain**, informe `portifolio.dev.br` e ative **Enforce HTTPS**.

### 3. Publicar

Qualquer `push` na branch `main` dispara o workflow **Deploy to GitHub Pages**.

Deploy manual: **Actions → Deploy to GitHub Pages → Run workflow**.

---

## O que está configurado

| Item | Descrição |
|------|-----------|
| `vite.config.js` | `base: '/'` para domínio próprio |
| `.github/workflows/deploy.yml` | Build e deploy automático |
| `public/CNAME` | Domínio `portifolio.dev.br` |
| `public/.nojekyll` | Compatibilidade com GitHub Pages |

## Contato

- **E-mail:** jefersonvasselai156@gmail.com
- **Telefone:** (47) 98802-8942
- **LinkedIn:** [linkedin.com/in/jefersonvs](https://www.linkedin.com/in/jefersonvs/)
- **GitHub:** [github.com/jeffSv16](https://github.com/jeffSv16)
