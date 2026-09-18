# Atlas Imobiliária
Landing page institucional para a **Atlas Imobiliária**, uma imobiliária de alto padrão com atuação em Fortaleza e região. O projeto apresenta um portfólio de imóveis, informações institucionais, diferenciais da empresa, depoimentos de clientes e um canal de contato.

A aplicação foi desenvolvida com React, TypeScript, Vite e Tailwind CSS, priorizando uma experiência visual elegante, responsiva e orientada à conversão.

## Visão geral

A página simula a presença digital da Atlas Imobiliária e foi estruturada como uma landing page completa, com navegação por âncoras e seções voltadas para diferentes etapas da jornada do cliente:

- descoberta da marca;
- busca inicial por imóveis;
- visualização de imóveis em destaque;
- apresentação dos diferenciais da imobiliária;
- prova social por meio de depoimentos;
- contato com consultores.

## Funcionalidades disponíveis

### Navegação responsiva

- Menu fixo no topo da página.
- Alteração visual do menu após a rolagem da página.
- Navegação desktop com links para as principais seções.
- Menu hambúrguer para telas menores.
- Rolagem suave entre as seções da página.

### Seção principal — Hero

- Imagem de destaque com skyline de Fortaleza.
- Mensagem institucional da Atlas Imobiliária.
- Botões de chamada para ação.
- Barra visual de busca com filtros por:
  - tipo de imóvel;
  - bairro;
  - faixa de preço.

> Atualmente, os campos da busca são elementos visuais e ainda não executam uma filtragem real dos imóveis.

### Imóveis em destaque

A aplicação apresenta cards com informações de imóveis, incluindo:

- categoria do empreendimento;
- nome do imóvel;
- localização;
- preço inicial;
- quantidade de quartos;
- área em metros quadrados;
- imagem ilustrativa;
- botão para visualizar mais informações.

Também existe uma navegação por categorias:

- Todos;
- Lançamentos;
- Alto Padrão;
- Pronto pra Morar.

> Os filtros de categoria já possuem estado visual no React, mas a lista atualmente renderiza todos os imóveis cadastrados. A filtragem pode ser implementada em uma próxima etapa.



## Tecnologias utilizadas

- **React 19** — construção da interface e componentes interativos.
- **TypeScript** — tipagem estática e maior segurança no desenvolvimento.
- **Vite 8** — servidor de desenvolvimento e ferramenta de build.
- **Tailwind CSS 4** — suporte à estilização utilitária.
- **CSS personalizado** — identidade visual, variáveis de cor, botões, cards e responsividade.
- **oxfmt** — formatação do código.
- **Figma Make** — estrutura de configuração e integração do ambiente de prototipação.


## Estrutura do projeto

```text
.
├── .figma/
│   └── make/
│       └── site.json       # Configurações utilizadas pelo Figma Make
├── src/
│   ├── imports/
│   │   └── image.png       # Imagem utilizada na identidade visual da marca
│   ├── App.tsx             # Componentes e composição principal da página
│   ├── index.css           # Estilos globais, tema e responsividade
│   └── main.tsx            # Ponto de entrada da aplicação React
├── AGENTS.md               # Orientações do ambiente de desenvolvimento
├── index.html              # Shell HTML da aplicação
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite, React, Tailwind e Figma Make
```

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior;
- npm ou pnpm;
- Git.

O projeto também possui configuração de ambiente para execução com pnpm e Node.js por meio do arquivo `.mise.toml`, quando disponível no ambiente de desenvolvimento.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/karla08C/PLATAFORMAATLASIMOBILIARIA.git
```

2. Acesse a pasta do projeto:

```bash
cd PLATAFORMAATLASIMOBILIARIA
```

3. Instale as dependências:

```bash
npm install
```

Caso utilize pnpm:

```bash
pnpm install
```

## Executando em desenvolvimento

Inicie o servidor local com:

```bash
npm run dev
```

Ou, usando pnpm:

```bash
pnpm dev
```

Por padrão, o Vite utiliza a porta `8443`, conforme a configuração do projeto. O endereço normalmente ficará disponível em:

```text
http://localhost:8443
```

O servidor possui hot reload, portanto as alterações nos arquivos são refletidas automaticamente no navegador.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm run preview` | Executa uma pré-visualização da build de produção. |
| `npm run format` | Formata os arquivos utilizando o Oxfmt. |

Os mesmos comandos podem ser executados com `pnpm`, substituindo `npm run` por `pnpm`.

## Build para produção

Para gerar os arquivos otimizados:

```bash
npm run build
```

Depois, para visualizar localmente a build gerada:

```bash
npm run preview
```

## Próximos passos

Para transformar o protótipo em uma plataforma imobiliária completa, recomenda-se implementar:

1. filtragem funcional por tipo, bairro e faixa de preço;
2. página ou modal com detalhes de cada imóvel;
3. integração do formulário com WhatsApp, e-mail ou CRM;
4. cadastro de imóveis em banco de dados;
5. painel administrativo para gerenciar o portfólio;
6. autenticação para usuários e administradores;
7. integração com mapas e localização dos imóveis;
8. validação dos campos do formulário;
9. mensagens de sucesso e erro após o envio;
10. SEO completo e dados estruturados para imóveis;
11. testes automatizados;
12. otimização de imagens e carregamento;
13. acessibilidade com navegação por teclado, foco visível e textos alternativos revisados;
14. substituição dos links sociais e botões demonstrativos por URLs e ações reais.

## Status do projeto

Este projeto está em fase de protótipo/front-end visual. A interface principal está implementada e responsiva, mas recursos como busca real, envio de formulário, persistência de dados e gerenciamento de imóveis ainda precisam ser integrados.
