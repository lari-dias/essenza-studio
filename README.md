# Essenza Studio

Landing page conceitual de estética e bem-estar, desenvolvida para o portfólio comercial da Lari Dev.

## Executar

- `npm install` (somente se as dependências ainda não estiverem presentes)
- `npm run dev`
- `npm run build`
- `npm run preview` para servir o build

No PowerShell com scripts bloqueados, use `npm.cmd` em lugar de `npm`.

## Estrutura

`App.tsx` compõe as seções. `src/sections` contém Hero, About, Treatments, CarePlans, Testimonials (experiência de atendimento, sem avaliações fictícias) e Contact. `src/components/layout` contém Header e Footer. `src/components/ui` contém componentes reutilizáveis. `src/data/site.ts` centraliza navegação, experiências, imagens e canais de contato.

## Antes da publicação

Em `src/data/site.ts`, configure `site.whatsappNumber` com DDI, DDD e número, somente dígitos, ajuste `whatsappMessage` e preencha `instagramUrl` com a URL completa do perfil. Os campos ficam vazios por padrão: a interface informa que o agendamento e o Instagram estão indisponíveis, sem direcionar visitantes para contatos inventados.

As cinco fotografias editoriais são referências externas do Unsplash, centralizadas em `images` e `treatments`. Revise as fotos e os direitos de uso para a publicação final. Para substituí-las, adicione arquivos otimizados em `src/assets`, importe-os em `site.ts` e atualize também os textos alternativos. As referências atuais usam largura e qualidade controladas e variantes responsivas; as imagens abaixo da primeira dobra carregam sob demanda. As imagens externas dependem da disponibilidade do provedor.

Revise as descrições de cuidados para o serviço efetivamente oferecido caso o conceito seja adaptado para uma clínica real. Configure domínio, URL canônica e imagem de compartilhamento no `index.html` quando os destinos finais existirem. Não há endereço, horários, avaliações, preços ou resultados clínicos inventados.

O projeto utiliza fontes do sistema, sem dependência de um serviço externo de fontes. As animações respeitam a preferência por movimento reduzido. O menu mobile fecha ao selecionar links, pressionar Escape, clicar fora ou migrar para a largura desktop.
