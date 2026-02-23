# Aprendizados e Lições Aprendidas

## 2026-02-23 — Sincronização de Metadados Auth -> DB
**Categoria:** arquitetura
**Causa raiz:** O nome capturado no Auth do Supabase não era propagado automaticamente para a tabela `profiles` durante o trigger/hook de criação de perfil.
**Regra preventiva:** Sempre garantir que dados críticos capturados no auth-flow sejam passados explicitamente para o serviço de banco de dados ou recuperados via metadados no primeiro acesso.
**Teste/checagem:** Monitorar logs de criação de perfil para campos `null`.

## 2026-02-23 — Configuração de Escopo PWA
**Categoria:** operação
**Causa raiz:** PWA não abria links externos corretamente no Chrome Mobile por falta de `start_url` e `scope` no manifesto.
**Regra preventiva:** Manifestos PWA devem sempre definir explicitamente `scope` e `start_url` para garantir consistência entre navegadores.
**Teste/checagem:** Validar manifesto no Chrome DevTools (Application tab).

## 2026-02-23 — Gargalo de Renderização em Componentes Gigantes
**Categoria:** performance
**Causa raiz:** O `EbookReader.jsx` tentava renderizar 1800 linhas de JSX estático de uma vez, travando a main thread por 10s.
**Regra preventiva:** Usar "Deferred Rendering" (renderização atrasada) ou Virtualização para conteúdos extensos, priorizando a renderização imediata do que está no "Above the Fold".
**Teste/checagem:** Analisar tempo de montagem do componente em dispositivos móveis.
