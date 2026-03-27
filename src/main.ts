import { createApp } from "vue";
import { createI18n } from "vue-i18n";
// import './styles/main.css'
import "./styles/style.css";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@unhead/vue";

const messages = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      realisations: "Réalisations",
      about: "À propos",
      contact: "Contact",
    },
    common: {
      startProject: "Commencer un Projet",
      readMore: "En savoir plus",
      contactUs: "Nous Contacter",
      learnMore: "Voir Tous les Services →",
      bookConsultation: "Planifier une Consultation",
    },
    home: {
      badge: "Agence Digitale Innovante",
      title: "Transformez Votre Vision",
      subtitle: "en Réalité Digitale",
      description:
        "BodyMacs Labs accompagne les entreprises ambitieuses à transformer leurs défis numériques en opportunités de croissance. Stratégie. Technologie. Résultats.",
      statsProjects: "Projets Livrés",
      statsClients: "Clients Heureux",
      statsYears: "D'Expertise",
    },
    services: {
      badge: "Expertise Reconnue",
      title: "Services sur Mesure",
      description:
        "Solutions digitales complètes alignées avec vos objectifs. De la stratégie à la livraison.",
      ourProcess: "Notre Processus",
      pricing: "Modèles d'Engagement",
      faq: "Questions Fréquentes",
    },
    realisations: {
      badge: "Nos Succès",
      title: "Nos Réalisations",
      description:
        "Découvrez comment nous avons aidé 30+ clients à transformer leurs visions en produits digitaux performants et profitables.",
      challenge: "Le Défi",
      solution: "Notre Solution",
      results: "Résultats",
      testimonials: "Ce que Disent Nos Clients",
    },
    about: {
      badge: "Notre Histoire",
      title: "À Propos de BodyMacs Labs",
      description:
        "Depuis 10 ans, nous accompagnons les entreprises à transformer leurs défis digitaux en opportunités de croissance.",
      mission: "Notre Mission",
      values: "Nos Valeurs Fondamentales",
      team: "L'Équipe BodyMacs Labs",
      journey: "Notre Parcours",
      whyUs: "Pourquoi les Meilleurs Choisissent BodyMacs Labs",
    },
    contact: {
      badge: "Parlez Avec Nous",
      title: "Parlons de Votre Projet",
      description:
        "Consultation gratuite. Aucun engagement. Juste une conversation pour explorer comment on peut vous aider.",
      quickContact: "Contact Rapide",
      leaveMessage: "Laissez-Nous un Message",
      responseTime: "Temps de Réponse",
      businessHours: "Horaires",
      office: "Paris",
    },
    footer: {
      copyright: "© 2024 BodyMacs Labs. Tous droits réservés.",
    },
    seo: {
      home: { title: "BodyMacs Labs | Ingénierie Logicielle Agile", description: "BodyMacs Labs transforme vos défis technologiques en opportunités de croissance. Expertise en Web, Mobile et Cloud." },
      services: { title: "Nos Services | BodyMacs Labs", description: "Découvrez notre expertise sur-mesure : Développement SaaS, Mobile iOS/Android, Cloud & DevOps, et Audit technique." },
      realisations: { title: "Nos Réalisations | BodyMacs Labs", description: "Explorez nos succès : des systèmes robustes et scalables livrés à nos clients à travers le monde." },
      about: { title: "À Propos | BodyMacs Labs", description: "Découvrez notre mission, nos valeurs et l'équipe passionnée qui bâtit les systèmes de demain." },
      contact: { title: "Contactez-nous | BodyMacs Labs", description: "Parlons de votre prochain projet. Consultation gratuite et devis sur mesure sous 24h." },
      faq: { title: "Questions Fréquentes | BodyMacs Labs", description: "Tout ce que vous devez savoir sur notre processus de travail, nos technologies et nos tarifs." },
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      realisations: "Projects",
      about: "About",
      contact: "Contact",
    },
    common: {
      startProject: "Start a Project",
      readMore: "Learn More",
      contactUs: "Contact Us",
      learnMore: "View All Services →",
      bookConsultation: "Book a Consultation",
    },
    home: {
      badge: "Innovative Digital Agency",
      title: "Transform Your Vision",
      subtitle: "Into Digital Reality",
      description:
        "BodyMacs Labs helps ambitious companies transform their digital challenges into growth opportunities. Strategy. Technology. Results.",
      statsProjects: "Projects Delivered",
      statsClients: "Happy Clients",
      statsYears: "Years of Expertise",
    },
    services: {
      badge: "Recognized Expertise",
      title: "Custom Services",
      description:
        "Complete digital solutions aligned with your objectives. From strategy to delivery.",
      ourProcess: "Our Process",
      pricing: "Engagement Models",
      faq: "Frequently Asked Questions",
    },
    realisations: {
      badge: "Our Success",
      title: "Our Projects",
      description:
        "Discover how we've helped 30+ clients transform their visions into high-performance digital products.",
      challenge: "The Challenge",
      solution: "Our Solution",
      results: "Results",
      testimonials: "What Our Clients Say",
    },
    about: {
      badge: "Our Story",
      title: "About BodyMacs Labs",
      description:
        "For 10 years, we've been helping companies transform their digital challenges into growth opportunities.",
      mission: "Our Mission",
      values: "Our Core Values",
      team: "The BodyMacs Labs Team",
      journey: "Our Journey",
      whyUs: "Why the Best Choose BodyMacs Labs",
    },
    contact: {
      badge: "Talk With Us",
      title: "Let's Talk About Your Project",
      description:
        "Free consultation. No commitment. Just a conversation to explore how we can help.",
      quickContact: "Quick Contact",
      leaveMessage: "Leave us a Message",
      responseTime: "Response Time",
      businessHours: "Business Hours",
      office: "Paris",
    },
    footer: {
      copyright: "© 2024 BodyMacs Labs. All rights reserved.",
    },
    seo: {
      home: { title: "BodyMacs Labs | Agile Software Engineering", description: "BodyMacs Labs transforms your technological challenges into growth opportunities. Expert in Web, Mobile, and Cloud." },
      services: { title: "Our Services | BodyMacs Labs", description: "Discover our tailor-made expertise: SaaS Development, iOS/Android Mobile, Cloud & DevOps, and Technical Audit." },
      realisations: { title: "Our Projects | BodyMacs Labs", description: "Explore our success stories: robust and scalable systems delivered to our clients worldwide." },
      about: { title: "About Us | BodyMacs Labs", description: "Discover our mission, values, and the passionate team building tomorrow's systems." },
      contact: { title: "Contact Us | BodyMacs Labs", description: "Let's talk about your next project. Free consultation and custom quote within 24 hours." },
      faq: { title: "FAQs | BodyMacs Labs", description: "Everything you need to know about our workflow, technologies, and pricing." },
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("language") || "fr",
  fallbackLocale: "fr",
  messages,
});

const head = createHead();
const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(head);
app.mount("#app");
