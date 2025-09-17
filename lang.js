// Simple site-wide language switcher
(function() {
  const DEFAULT_LANG = 'es';

  const translations = {
    es: {
      'nav.import_personal': 'Importación uso Personal',
      'nav.home': 'Hogar',
      'nav.about': 'Sobre nosotros',
      'nav.business': 'Verticales de negocios',
      'nav.portfolio': 'Nuestro portafolio',
      'nav.infrastructure': 'Infraestructura',
      'nav.chile': 'Presencia en Chile',
      'nav.contact': 'Contáctenos',
      'lang.spanish': 'Español',
      'lang.english': 'Inglés'
    },
    en: {
      'nav.import_personal': 'Personal-use Import',
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.business': 'Business Verticals',
      'nav.portfolio': 'Our Portfolio',
      'nav.infrastructure': 'Infrastructure',
      'nav.chile': 'Presence in Chile',
      'nav.contact': 'Contact Us',
      'lang.spanish': 'Spanish',
      'lang.english': 'English'
    }
  };

  function setLang(lang) {
    const chosen = translations[lang] ? lang : DEFAULT_LANG;
    localStorage.setItem('site_lang', chosen);
    applyTranslations(chosen);
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  function initLanguageSelector() {
    document.querySelectorAll('.language-option').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        if (lang) {
          setLang(lang);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('site_lang') || DEFAULT_LANG;
    applyTranslations(saved);
    initLanguageSelector();
  });
})();


