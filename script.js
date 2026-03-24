const translations = {
    pt: {
        lang_label: "<i class='fas fa-globe'></i> Idioma:",
        back_portfolio: "<i class='fas fa-arrow-left'></i> Lucas Prado | Portfolio",
        back_portal: "<i class='fas fa-layer-group'></i> Voltar ao Portal",
        dash_title: "Portal de <span class='purple-text'>Previews</span>",
        dash_subtitle: "Ambiente exclusivo para visualização de projetos de clientes e cases finalizados.",
        ib_desc: "Plataforma corporativa para escritório de contabilidade, focada em conversão e autoridade de marca.",
        os_desc: "Web presence para escritório de advocacia, projetada para transmitir confiança e agilizar o contato.",
        btn_case: "Ver Case Study <i class='fas fa-arrow-right'></i>",
        status_msg: "Este ambiente foi utilizado com sucesso para o preview e testes finais do cliente. O projeto foi concluído e está 100% operacional no domínio oficial.",
        status_del: "<strong>Status:</strong> Projeto Entregue",
        dna_conv: "<strong>DNA Marketing:</strong> Foco em Conversão e SEO",
        dna_auth: "<strong>DNA Marketing:</strong> Design de Autoridade",
        area_acc: "<strong>Atuação:</strong> Escritório de Contabilidade",
        area_law: "<strong>Atuação:</strong> Escritório de Advocacia",
        btn_live: "Visitar Site Oficial <i class='fas fa-external-link-alt'></i>",
        footer: "Desenvolvido com estratégia por Lucas Prado © 2026"
    },
    en: {
        lang_label: "<i class='fas fa-globe'></i> Language:",
        back_portfolio: "<i class='fas fa-arrow-left'></i> Lucas Prado | Portfolio",
        back_portal: "<i class='fas fa-layer-group'></i> Back to Portal",
        dash_title: "<span class='purple-text'>Previews</span> Portal",
        dash_subtitle: "Exclusive environment for viewing client projects and completed case studies.",
        ib_desc: "Corporate platform for an accounting firm, focused on conversion and brand authority.",
        os_desc: "Web presence for a law firm, designed to convey trust and streamline contact.",
        btn_case: "View Case Study <i class='fas fa-arrow-right'></i>",
        status_msg: "This environment was successfully used for client previews and final testing. The project is completed and 100% operational on the official domain.",
        status_del: "<strong>Status:</strong> Project Delivered",
        dna_conv: "<strong>Marketing DNA:</strong> Conversion & SEO Focus",
        dna_auth: "<strong>Marketing DNA:</strong> Authority Design",
        area_acc: "<strong>Industry:</strong> Accounting Firm",
        area_law: "<strong>Industry:</strong> Law Firm",
        btn_live: "Visit Official Site <i class='fas fa-external-link-alt'></i>",
        footer: "Developed with strategy by Lucas Prado © 2026"
    },
    es: {
        lang_label: "<i class='fas fa-globe'></i> Idioma:",
        back_portfolio: "<i class='fas fa-arrow-left'></i> Lucas Prado | Portfolio",
        back_portal: "<i class='fas fa-layer-group'></i> Volver al Portal",
        dash_title: "Portal de <span class='purple-text'>Previews</span>",
        dash_subtitle: "Entorno exclusivo para visualizar proyectos de clientes y casos terminados.",
        ib_desc: "Plataforma corporativa para una firma de contabilidad, enfocada en conversión y autoridad de marca.",
        os_desc: "Presencia web para un bufete de abogados, diseñada para transmitir confianza y agilizar el contacto.",
        btn_case: "Ver Case Study <i class='fas fa-arrow-right'></i>",
        status_msg: "Este entorno se utilizó con éxito para la vista previa del cliente y las pruebas finales. El proyecto está terminado y 100% operativo en el dominio oficial.",
        status_del: "<strong>Estado:</strong> Proyecto Entregado",
        dna_conv: "<strong>ADN Marketing:</strong> Enfoque en Conversión y SEO",
        dna_auth: "<strong>ADN Marketing:</strong> Diseño de Autoridad",
        area_acc: "<strong>Sector:</strong> Firma de Contabilidad",
        area_law: "<strong>Sector:</strong> Bufete de Abogados",
        btn_live: "Visitar Sitio Oficial <i class='fas fa-external-link-alt'></i>",
        footer: "Desarrollado con estrategia por Lucas Prado © 2026"
    },
    pl: {
        lang_label: "<i class='fas fa-globe'></i> Język:",
        back_portfolio: "<i class='fas fa-arrow-left'></i> Lucas Prado | Portfolio",
        back_portal: "<i class='fas fa-layer-group'></i> Powrót do Portalu",
        dash_title: "Portal <span class='purple-text'>Podglądów</span>",
        dash_subtitle: "Ekskluzywne środowisko do przeglądania projektów klientów i zakończonych przypadków.",
        ib_desc: "Platforma korporacyjna dla biura rachunkowego, z naciskiem na konwersję i autorytet marki.",
        os_desc: "Obecność w sieci dla kancelarii prawnej, zaprojektowana by budować zaufanie i ułatwiać kontakt.",
        btn_case: "Zobacz Case Study <i class='fas fa-arrow-right'></i>",
        status_msg: "To środowisko zostało z powodzeniem wykorzystane do podglądu klienta i ostatecznych testów. Projekt jest zakończony i w 100% operacyjny w oficjalnej domenie.",
        status_del: "<strong>Status:</strong> Projekt Dostarczony",
        dna_conv: "<strong>DNA Marketingu:</strong> Nacisk na Konwersję i SEO",
        dna_auth: "<strong>DNA Marketingu:</strong> Design Autorytetu",
        area_acc: "<strong>Branża:</strong> Biuro Rachunkowe",
        area_law: "<strong>Branża:</strong> Kancelaria Prawna",
        btn_live: "Odwiedź Oficjalną Stronę <i class='fas fa-external-link-alt'></i>",
        footer: "Zaprojektowane i stworzone przez Lucas Prado © 2026"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = lang;
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language.slice(0, 2);
    const initialLang = translations[browserLang] ? browserLang : 'en';
    changeLanguage(initialLang);
});