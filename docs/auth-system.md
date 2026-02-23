# Sistema de Autenticação (InsForge)

Este documento detalha a implementação do sistema de autenticação utilizando o ecossistema InsForge.

## Integração

A integração é feita através do pacote `@insforge/sdk`, inicializado em `src/lib/insforge.js`.

### Contexto Global (`AuthContext.jsx`)

Utilizamos a API Context do React para expor o estado de autenticação em toda a aplicação:
- `user`: Objeto contendo os dados do usuário logado.
- `loading`: Booleano para estados de transição.
- `signOut`: Função para encerrar a sessão.

## Fluxo de Registro e Login

O sistema utiliza e-mail e senha, reforçados por um fluxo de verificação **OTP (One-Time Password)**.

1.  **Sign Up:** O usuário insere e-mail, nome e senha.
2.  **Verificação:** Um código de 6 dígitos é enviado ao e-mail cadastrado.
3.  **Finalização:** O usuário insere o código no componente `Login.jsx` que chama `insforge.auth.verifyEmail`.

### Tratamento de Falhas Físicas de E-mail

> [!IMPORTANT]
> Em cenários onde o serviço SMTP da infraestrutura falha em entregar o e-mail OTP, o sistema está configurado para permitir o login após a verificação manual no banco de dados, garantindo que o usuário nunca fique bloqueado por problemas externos.

## Componente de Perfil (`UserProfile.jsx`)

Posicionado estrategicamente no final (extrema direita) dos menus de navegação, o componente exibe:
- Avatar gerado dinamicamente com as iniciais do usuário.
- Dropdown com informações de e-mail.
- Botão de logout integrado.
