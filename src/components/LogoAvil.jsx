import React from 'react';

/**
 * LOGO AVIL COMPONENTE
 * Atualizado para usar a imagem logo.jpeg conforme solicitação do usuário.
 */
export const LogoAvil = () => (
    <div className="flex items-center">
        <img src="/logo.jpeg" alt="AVIL" className="h-10 md:h-12 object-contain" />
    </div>
);

export default LogoAvil;
