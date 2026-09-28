# Sine Barro

Portal de apresentação para emprego, qualificação e cidadania em Barro–CE.

Site: **https://moreiradv.github.io/SineBarro/**

## GitHub Pages

A publicação é automática a cada push na branch `main`, pelo workflow `.github/workflows/pages.yml`. Ele verifica o TypeScript, executa os testes e publica a exportação estática no GitHub Pages.

Para gerar os mesmos arquivos localmente:

```sh
npm run build:pages
```

A pasta `out/` contém o site estático. Esse comando usa o compilador Next.js já instalado, com o prefixo `/SineBarro` para páginas, scripts, imagem e favicon. A execução local e a compilação para Workers continuam disponíveis pelos comandos abaixo. O GitHub Pages publica somente a demonstração, sem servidor de autenticação, banco de dados ou envio de candidaturas.

## Executar

Requer Node.js 22.13 ou mais recente, com npm.

```sh
npm ci
npm run dev
```

A prévia abre em http://localhost:5173. Para gerar a versão de produção:

```sh
npm run build
npm start
```

## Implementado

- Identidade visual própria, fotografia real e animações com respeito à preferência de movimento reduzido.
- Layout responsivo; menu móvel; navegação por teclado; diálogos com foco controlado.
- Busca por cargo, empresa e competência, com normalização de acentos, filtros de cidade, modalidade e área.
- Detalhes de vagas, vagas salvas e candidatura simulada com consentimento, protocolo e prevenção de duplicação.
- Área do candidato com editor de currículo em três etapas e impressão/salvamento em PDF.
- Apresentação profissional em texto e prévia local de vídeo MP4/WebM, limitada a 90 segundos e 50 MB.
- Mensagens de demonstração, preferências de visibilidade, exportação JSON e limpeza dos dados da sessão.
- Área da empresa com criação de vagas fictícias, busca de talentos e etapas do processo seletivo com histórico.
- Links conferidos para catálogos de cursos, serviços oficiais e concursos.
- Ferramenta WebMCP `search_demo_jobs`, com validação de entrada e o mesmo estado da busca visual.

## Escopo desta entrega

Esta é uma demonstração interativa. Vagas, empresas e candidatos são fictícios. Nenhum currículo, candidatura, mensagem ou vídeo é enviado a uma empresa. O estado fica na memória da página e é descartado ao recarregar ou fechar a aba.

Não há autenticação de candidatos/empresas, banco de dados da aplicação, envio de e-mail, processamento de currículos, análise por IA, moderação ou vídeo em armazenamento remoto. Uma publicação privada na hospedagem pode exigir o acesso do proprietário, mas isso não representa autenticação própria da plataforma.

A especificação fornecida é referência para a evolução do produto. Ela não constitui uma declaração de que todos os requisitos de produção foram implementados. Para receber usuários reais, será necessário implementar e validar os serviços, permissões, persistência, moderação, privacidade e integrações correspondentes.

## Organização

- `app/page.tsx`: portal, áreas internas e fluxos de demonstração.
- `app/globals.css`: identidade, responsividade, animações e impressão do currículo.
- `app/layout.tsx`: idioma, título, descrição e favicon.
- `lib/portal-data.ts`: catálogo fictício e regras da busca.
- `components/ui/`: componentes acessíveis já fornecidos pelo projeto.
- `tests/search.test.mjs`: testes das regras de busca.
- `public/`: fotografia e favicon.

## Verificações

```sh
npx tsc --noEmit
node --experimental-strip-types --test tests/search.test.mjs
npm run build
```

Testes manuais realizados em desktop e largura de 360 px: busca, filtragem por competência, salvar vaga, detalhes, consentimento e confirmação de candidatura, histórico, currículo em três etapas, busca de talentos, mudança de etapa e criação de vaga de exemplo. A ferramenta WebMCP foi testada com entrada válida e inválida. Não foi realizada auditoria formal WCAG, teste de carga ou de segurança de um sistema de produção.

## Fontes e créditos

- Fotografia: Beatriz Fernandes, [Pexels](https://www.pexels.com/photo/woman-in-white-long-sleeve-shirt-smiling-13572007/), sob a [licença Pexels](https://www.pexels.com/license/). A foto é ilustrativa; não representa candidata nem endosso.
- Tipografia: DM Sans e Manrope, Google Fonts.
- Ícones: Lucide.
- [Escola do Trabalhador 4.0](https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/qualificacao-profissional/caminho-digital)
- [Fundação Bradesco — Escola Virtual](https://www.ev.org.br/cursos)
- [Sebrae — Cursos online](https://loja.sebrae.com.br/cursos/cursos-online)
- [Carteira de Trabalho Digital](https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho)
- [Seguro-desemprego](https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego)
- [Concursos do Ceará](https://www.ce.gov.br/seplag/concursos/)

Referência de produto: Especificacao_Funcional_Tecnica_Sine_Barro.pdf, versão 1.0, setembro de 2026.
