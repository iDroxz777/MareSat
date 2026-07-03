# MareSat

Protótipo web desenvolvido para a Global Solution 2026/1 da FIAP.

O MareSat simula uma plataforma de navegação inteligente que usa correntes oceânicas como apoio para rotas marítimas mais eficientes. A proposta conecta tecnologia, sustentabilidade e tomada de decisão para reduzir consumo de combustível, emissões de CO₂ e riscos na navegação.

## Visão geral

O projeto foi criado como uma experiência navegável, não apenas como uma apresentação estática. A home explica o problema, mostra o impacto estimado e direciona o usuário para dois modos de uso:

- **Ocean Mode**: simulação de rotas oceânicas com origem, destino, dados de corrente, vento, ondas, economia e CO₂ evitado.
- **Coastal Mode**: painel simplificado para navegação costeira, com zonas de pesca, alertas de segurança e condições do mar.

Os dados exibidos são simulados para fins acadêmicos, mas a interface foi pensada para representar como uma solução real poderia funcionar.

## Funcionalidades

- Landing page com proposta, problema, funcionamento e impacto estimado
- Mapa SVG animado para visualização conceitual de rotas e correntes
- Painel Ocean Mode com formulário de rota e indicadores atualizados via JavaScript
- Botões de rotas rápidas para testar a simulação
- Integração visual com mapa de correntes via Windy Embed
- Coastal Mode com zonas clicáveis, alertas e resumo operacional
- Layout responsivo para desktop e mobile

## Tecnologias

- HTML5
- CSS3
- JavaScript
- SVG
- Windy Embed
- Git e GitHub

## Estrutura

```text
MareSat/
├── index.html
├── ocean.html
├── coastal.html
├── css/
│   └── style.css
├── js/
│   ├── ocean.js
│   └── coastal.js
└── img/
    └── maresat_logo.svg
```

## Como executar

Abra o arquivo `index.html` no navegador.

Também é possível publicar o projeto com GitHub Pages, pois ele usa apenas HTML, CSS e JavaScript.

## Aprendizados

Durante o desenvolvimento, foram praticados:

- Organização de páginas web
- Criação de layout responsivo
- Manipulação do DOM com JavaScript
- Uso de dados simulados para prototipação
- Comunicação visual de uma solução tecnológica
- Apresentação de projeto acadêmico com foco em problema real

## Próximas melhorias

- Conectar dados reais de APIs oceânicas
- Adicionar cálculo de distância estimada por rota
- Exibir comparação entre rota tradicional e rota otimizada
- Criar histórico de simulações
- Melhorar acessibilidade e navegação por teclado

## Integrantes

- Pietro de Nadai Fernandes de Andrade
- Lucas Nunes Nogueira
- Gabriel Navarro Rosal
- Erick Henrique Miranda Izidoro
- João Victor Silva de Paula Cesar
