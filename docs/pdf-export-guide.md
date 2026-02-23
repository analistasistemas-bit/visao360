# Guia Técnico: Exportação de PDF (V3 Robust Edition)

A exportação de PDF é um dos recursos mais críticos e sensíveis do projeto, pois lida com captura visual complexa (WYSIWYG) e disparos de download que variam conforme o navegador.

## O Desafio do "Download Sem Nome" (Bug do UUID)

Identificamos que alguns navegadores (especialmente no macOS/iOS) ignoravam o atributo `download` ao usar URLs do tipo `blob`, resultando em arquivos com nomes aleatórios como `fa760c2f-4012...`.

## A Solução: V3 - Robust Edition

Para resolver este problema de forma definitiva, implementamos a versão **V3** do utilitário em `src/utils/pdfExport.js`.

### Componentes Chave

1.  **Motor de Captura: `modern-screenshot`**
    - **Por que:** Ao contrário do `html2canvas`, ele consegue interpretar corretamente o CSS moderno, como funções de cor `oklch()`, `grid` e `glassmorphism`. O `html2canvas` frequentemente quebrava ou gerava erros de renderização nestes cenários.
2.  **Disparador: Manual Anchor Trigger**
    - Em vez de confiar em métodos automatizados de bibliotecas, criamos manualmente um elemento `<a>` oculto, injetamos no DOM, clicamos e removemos. Este é o método mais robusto para forçar o navegador a respeitar o nome do arquivo.
3.  **Sanitização Estrita (ASCII-Only)**
    - Nomes de arquivos com espaços ou acentos podem causar falhas silenciosas na atribuição do nome pelo browser. O script agora limpa os nomes automaticamente:
        - `E-book Avil` → `e_book_avil.pdf`

## Como Implementar Novas Capturas

Se você precisar capturar um novo elemento:

1.  Garanta que o elemento tenha uma classe `.page` se quiser que ele quebre páginas no PDF.
2.  Use o `generatePDF(seletor, nome_do_arquivo, callback_status)`.
3.  Evite elementos que dependam de `iframe` ou carregamentos externos tardios dentro da área de captura.

```javascript
import { generatePDF } from './utils/pdfExport';

// Exemplo de uso
const handleExport = async () => {
    await generatePDF('#meu-elemento', 'relatorio_trimestral', setStatus);
};
```

## Classes de Controle
- `.print-hidden`: Elementos com esta classe serão filtrados e não aparecerão no PDF gerado.
