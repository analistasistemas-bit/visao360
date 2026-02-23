# Documentação Técnica: Visão 360

Bem-vindo ao hub central de documentação do projeto **Visão 360**. Este repositório de documentos foi criado para garantir a longevidade e a facilidade de manutenção do sistema.

## 📚 Menu de Navegação

1.  **[Arquitetura do Sistema](./architecture.md)**
    - Visão geral da stack, estrutura de pastas e diagramas de fluxo.
2.  **[Sistema de Autenticação](./auth-system.md)**
    - Detalhes da integração com InsForge, fluxos de OTP e componentes de perfil.
3.  **[Guia de Exportação de PDF](./pdf-export-guide.md)**
    - Documentação técnica sobre o motor de captura V3 e como evitar erros de download.
4.  **[Guia de Onboarding](./onboarding.md)**
    - Roteiro "Zero-to-Hero" para novos desenvolvedores e visão de nível Principal.

## 🛠️ Manutenção

Toda alteração estrutural ou em funcionalidades críticas (como autenticação ou exportação) deve ser refletida nestes documentos.

> [!TIP]
> A documentação da função de **Download de PDF** é essencial para evitar regressões que causem o erro de arquivos renomeados para UUID. Sempre consulte o manual antes de alterar o CSS global ou a lógica do `App.jsx`.

---
*Atualizado em: Fevereiro de 2026*
