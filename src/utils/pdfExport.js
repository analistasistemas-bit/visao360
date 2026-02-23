import { domToJpeg } from 'modern-screenshot';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';

/**
 * Utilitário de exportação de PDF de alta fidelidade com disparador de download ultra-robusto.
 * V3 - Robust Edition: Resolve bugs de nome de arquivo UUID e compatibilidade com CSS moderno.
 */
export const generatePDF = async (elementSelector, filename, setPdfStatus) => {
    console.log("Iniciando geração de PDF (V3 - Robust Edition)...");
    try {
        const rootElement = document.querySelector(elementSelector);
        if (!rootElement) {
            console.error(`Elemento não encontrado: ${elementSelector}`);
            return false;
        }

        if (setPdfStatus) setPdfStatus("Preparando elementos...");
        await new Promise(resolve => setTimeout(resolve, 800));

        const pages = rootElement.querySelectorAll('.page');
        let targetNodes = pages.length > 0 ? Array.from(pages) : [rootElement];

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Filtro para ignorar elementos de UI (botões, menus, etc)
        const filter = (nodeElement) => {
            const tag = nodeElement?.tagName;
            if (tag === 'BUTTON' || tag === 'NAV' || tag === 'INPUT' || tag === 'SELECT') return false;
            if (nodeElement?.classList?.contains('print-hidden') || nodeElement?.classList?.contains('download-hidden')) return false;
            return true;
        };

        for (let i = 0; i < targetNodes.length; i++) {
            const node = targetNodes[i];
            if (node.offsetParent === null) continue;

            if (setPdfStatus) setPdfStatus(`Capturando página ${i + 1} de ${targetNodes.length}...`);

            // modern-screenshot é superior para CSS moderno (oklch, grid, glassmorphism)
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

            // Ajuste proporcional para caber na página A4
            if (finalHeight > pdfHeight) {
                finalHeight = pdfHeight;
                finalWidth = pdfHeight * imgRatio;
            }

            const xPos = (pdfWidth - finalWidth) / 2;

            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, 'JPEG', xPos, 0, finalWidth, finalHeight, undefined, 'FAST');
        }

        if (setPdfStatus) setPdfStatus("Finalizando download...");

        // Nome de arquivo limpo (apenas ASCII e sublinhados)
        // Isso é CRUCIAL para evitar que browsers nomeiem o arquivo como UUID
        const safeName = filename.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .replace(/[^a-z0-9]/gi, '_')     // Tudo que não é alfanumérico vira _
            .replace(/_+/g, '_')             // Evita múltiplos underscores
            .toLowerCase();

        // Sanitização final para garantir ASCII puro (extremo)
        const finalName = `${safeName}.pdf`;

        console.log("Preparando download final para:", finalName);

        try {
            // MÉTODO 1: jsPDF.save() - O método oficial e mais testado da biblioteca
            // Ele já incorpora internamente lógicas de fallback para diversos browsers.
            pdf.save(finalName);
            console.log("Download via pdf.save() processado.");
        } catch (saveError) {
            console.warn("pdf.save() falhou, tentando fallback com File + saveAs:", saveError);

            // MÉTODO 2 (Fallback): File Constructor + saveAs
            // O objeto 'File' permite embutir o nome do arquivo diretamente no objeto,
            // o que ajuda browsers como Safari a não perderem o contexto do nome.
            const pdfBlob = pdf.output('blob');
            const pdfFile = new File([pdfBlob], finalName, { type: 'application/pdf' });
            saveAs(pdfFile, finalName);
            console.log("Download via fallback saveAs(File) processado.");
        }

        return true;

    } catch (error) {
        console.error("Erro crítico na geração do PDF:", error);
        return false;
    } finally {
        if (setPdfStatus) setPdfStatus("");
    }
};
