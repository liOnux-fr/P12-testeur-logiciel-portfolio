// English translations loaded from JSON when EN is clicked
let translationsEn = null;

// Apply English translations from loaded JSON to the page
function applyEnglishTranslations(t) {
    if (!t) return;

    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = t["nav-accueil"];
        if (href === '#about') link.textContent = t["nav-about"];
        if (href === '#skills') link.textContent = t["nav-skills"];
        if (href === '#portfolio') link.textContent = t["nav-portfolio"];
        if (href === '#contact') link.textContent = t["nav-contact"];
    });

    const heroTitle = document.querySelector('.hero_title');
    const heroDesc = document.querySelector('.hero_desc');
    if (heroTitle) heroTitle.textContent = t["hero-title"];
    if (heroDesc) heroDesc.textContent = t["hero-desc"];

    const aboutH2 = document.querySelector('#about h2');
    if (aboutH2) aboutH2.textContent = t["about-title"];
    const aboutParagraphs = document.querySelectorAll('#about .col-lg-8 p');
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = t["about-p1"];
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = t["about-p2"];
    if (aboutParagraphs[2]) aboutParagraphs[2].textContent = t["about-p3"];
    if (aboutParagraphs[3]) aboutParagraphs[3].textContent = t["about-p4"];

    const skillsH2 = document.querySelector('#skills h2');
    if (skillsH2) skillsH2.textContent = t["skills-title"];

    const portfolioH2 = document.querySelector('#portfolio h2');
    if (portfolioH2) portfolioH2.textContent = t["portfolio-title"];

    const contactH2 = document.querySelector('#contact h2');
    if (contactH2) contactH2.textContent = t["contact-title"];

    const contactColumns = document.querySelectorAll('.contactColumn');
    if (contactColumns[0]) {
        const h3 = contactColumns[0].querySelector('h3');
        const p = contactColumns[0].querySelector('p');
        if (h3) h3.textContent = t["contact-github"];
        if (p) p.textContent = t["contact-github-desc"];
    }
    if (contactColumns[1]) {
        const h3 = contactColumns[1].querySelector('h3');
        if (h3) h3.textContent = t["contact-email"];
    }
    if (contactColumns[2]) {
        const h3 = contactColumns[2].querySelector('h3');
        const p = contactColumns[2].querySelector('p');
        if (h3) h3.textContent = t["contact-linkedin"];
        if (p) p.textContent = t["contact-linkedin-desc"];
    }

    document.querySelectorAll('#portfolio .btn-success').forEach(btn => {
        btn.textContent = t["portfolio-link"];
    });

    if (t.portfolio) {
        document.querySelectorAll('#portfolio .portfolioContent').forEach(card => {
            const titleEl = card.querySelector('.card-title');
            const textEl = card.querySelector('.card-text');
            if (titleEl && textEl) {
                const key = titleEl.textContent.trim();
                if (t.portfolio[key]) {
                    titleEl.textContent = t.portfolio[key].title;
                    textEl.textContent = t.portfolio[key].text;
                }
            }
        });
    }

    document.documentElement.lang = 'en';
}

// Reset page to French
function applyFrenchContent() {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = "Accueil";
        if (href === '#about') link.textContent = "A propos";
        if (href === '#skills') link.textContent = "Compétences";
        if (href === '#portfolio') link.textContent = "Portfolio";
        if (href === '#contact') link.textContent = "Contact";
    });

    const heroTitle = document.querySelector('.hero_title');
    const heroDesc = document.querySelector('.hero_desc');
    if (heroTitle) heroTitle.textContent = "Salut, moi c'est Emilie";
    if (heroDesc) heroDesc.textContent = "Testeur logiciel junior";

    const aboutH2 = document.querySelector('#about h2');
    if (aboutH2) aboutH2.textContent = "A propos de moi";
    const aboutParagraphs = document.querySelectorAll('#about .col-lg-8 p');
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = "En reconversion professionnelle vers le développement web, je me spécialise dans le test logiciel en alternance. Je maîtrise l'automatisation des tests end-to-end, les tests API, la gestion des cas de test et le développement web.";
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = "J'ai participé à des projets variés : sites écoresponsables, plateformes événementielles et applications financières, en pilotant les campagnes QA et la stratégie de tests.";
    if (aboutParagraphs[2]) aboutParagraphs[2].textContent = "J'interviens sur le debug, l'optimisation et l'accessibilité, garantissant la qualité et la performance des livrables web.";
    if (aboutParagraphs[3]) aboutParagraphs[3].textContent = "J'ai également contribué à l'implémentation de l'IA dans le SaaS de mon entreprise, alliant innovation et qualité logicielle.";

    const skillsH2 = document.querySelector('#skills h2');
    if (skillsH2) skillsH2.textContent = "Mes compétences";

    const portfolioH2 = document.querySelector('#portfolio h2');
    if (portfolioH2) portfolioH2.textContent = "Mes projets";

    const contactH2 = document.querySelector('#contact h2');
    if (contactH2) contactH2.textContent = "Contactez-moi";

    const contactColumns = document.querySelectorAll('.contactColumn');
    if (contactColumns[0]) {
        const h3 = contactColumns[0].querySelector('h3');
        const p = contactColumns[0].querySelector('p');
        if (h3) h3.textContent = "GitHub";
        if (p) p.textContent = "Mon profil GitHub";
    }
    if (contactColumns[1]) {
        const h3 = contactColumns[1].querySelector('h3');
        if (h3) h3.textContent = "Adresse email";
    }
    if (contactColumns[2]) {
        const h3 = contactColumns[2].querySelector('h3');
        const p = contactColumns[2].querySelector('p');
        if (h3) h3.textContent = "LinkedIn";
        if (p) p.textContent = "Emilie Patricia Malo";
    }

    document.querySelectorAll('#portfolio .btn-success').forEach(btn => {
        btn.textContent = "Voir le projet";
    });

    fetch('data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            const cards = document.querySelectorAll('#portfolio .portfolioContent');
            data.forEach((item, i) => {
                if (cards[i]) {
                    const titleEl = cards[i].querySelector('.card-title');
                    const textEl = cards[i].querySelector('.card-text');
                    if (titleEl) titleEl.textContent = item.title;
                    if (textEl) textEl.textContent = item.text;
                }
            });
        })
        .catch(err => console.error('Erreur chargement portfolio FR:', err));

    document.documentElement.lang = 'fr';
}

// Store current language
let currentLanguage = 'fr';

// Function to translate the page (loads JSON when EN is clicked)
function translatePage(lang) {
    if (lang === 'en') {
        fetch('data/translations-en.json')
            .then(response => response.json())
            .then(data => {
                translationsEn = data;
                applyEnglishTranslations(data);
                currentLanguage = 'en';
                setTimeout(translateDynamicContent, 1000);
            })
            .catch(err => {
                console.error('Erreur chargement traductions EN:', err);
            });
    } else {
        translationsEn = null;
        applyFrenchContent();
        currentLanguage = 'fr';
    }
}

// Translate dynamic content (skills cards loaded from skills.json)
function translateDynamicContent() {
    if (currentLanguage === 'en' && translationsEn && translationsEn.skills) {
        document.querySelectorAll('#skills .card-title').forEach(title => {
            const skillTitle = title.textContent.trim();
            if (translationsEn.skills[skillTitle]) {
                title.textContent = translationsEn.skills[skillTitle].title;
                const cardText = title.closest('.card-body').querySelector('.card-text');
                if (cardText) {
                    cardText.textContent = translationsEn.skills[skillTitle].text;
                }
            }
        });
    }
}
