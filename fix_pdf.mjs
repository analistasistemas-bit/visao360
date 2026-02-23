import fs from 'fs';
const base = `import { domToJpeg } from 'modern-screenshot';
import { jsPDF } from 'jspdf';

/**
 * Utilitário WYSIWYG exportador de PDF usando modern-screenshot
 */
export const generatePDF = async (elementSelector, filename, setPdfStatus) => {
    console.log("Iniciando geração de PDF via modern-screenshot...");
    try {
        const rootElement = document.querySelector(elementSelector);
        if (!rootElement) {
            console.error(\`Elemento não encontrado para o seletor: \${elementSelector}\`);
            return false;
        }

        if (setPdfStatus) setPdfStatus("Preparando elementos...");

        // Pequeno delay para garantir que imagens terminem de renderizar
        await new Promise(resolve => setTimeout(resolve, 500));

        // Busca todos as páginas se formos exportar o Reader, ou tira da tela cheia pro Plano de Ação
        const pages = rootElement.querySelectorAll('.page');
        let targetNodes = pages.length > 0 ? Array.from(pages) : [rootElement];

        if (setPdfStatus) setPdfStatus("Processando imagens de alta resolução...");

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        for (let i = 0; i < targetNodes.length; i++) {
            const node = targetNodes[i];

            if (setPdfStatus) setPdfStatus(\`Gerando página \${i + 1} de \${targetNodes.length}...\`);
            console.log(\`Processando nó \${i + 1}\`);

            // Se node não for visível, pular.
            if (node.offsetParent === null) continue;

            // Filtro para ignorar botões ou barras de navegação que possam estar dentro do PDF
            const filter = (nodeElement) => {
                if (nodeElement?.tagName === 'BUTTON' || nodeElement?.tagName === 'NAV') {
                    return false;
                }
                if (nodeElement?.classList?.contains('print-hidden')) {
                    return false;
                }
                return true;
            };

            const imgData = await domToJpeg(node, {
                quality: 0.95,
                scale: 2,
                backgroundColor: '#ffffff',
                filter: filter
            });

            const imgProps = pdf.getImageProperties(imgData);
            const imgRatio = imgProps.width / imgProps.height;

            let finalWidth = pdfWidth;
            let finalHeight = finalWidth / imgRatio;

            if (finalHeight > pdfHeight) {
                finalHeight = pdfHeight;
                finalWidth = pdfHeight * imgRatio;
            }

            const xObj = (pdfWidth - finalWidth) / 2;

            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, 'JPEG', xObj, 0, finalWidth, finalHeight, undefined, 'FAST');
        }

        if (setPdfStatus) setPdfStatus("Finalizando o documento...");
        
        // Forma inquebrável para salvar o arquivo via array buffer no Chrome (Dev Server e Sandboxed) sem hack de objeto DOM
        const finalName = filename.endsWith('.pdf') ? filename : \`\${filename}.pdf\`;
        
        const arrayBuffer = pdf.output('arraybuffer');
        const blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'application/pdf' });
        
        // Acesso universal à API File System independente do Chrome Sandboxing de A tag:
        const link = document.createElement('a');
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // Suporte defensivo a browsers IE core (onde ocorre falha de extensão também)
            window.navigator.msSaveOrOpenBlob(blob, finalName);
        } else {
            // Criação canônica segura em Window
            const createObjectURL = window.URL || window.webkitURL;
            const linkHref = createObjectURL.createObjectURL(blob);
            link.href = linkHref;
            link.download = finalName;
            
            // Renderização provisória necessária para o Chrome
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => {
                createObjectURL.revokeObjectURL(linkHref);
            }, 5000);
        }
        
        console.log("PDF finalizado e salvo com sucesso:", finalName);
        return true;

    } catch (error) {
        console.error("Erro fatal durante geração do PDF:", error);
        return false;
    } finally {
        if (setPdfStatus) setPdfStatus("");
    }
};
`;

fs.writeFileSync('src/utils/pdfExport.js', base, 'utf-8');
console.log("Final fix: Fallback ArrayBuffer export applied to bypass Chrome Blob String URL hash bug");
