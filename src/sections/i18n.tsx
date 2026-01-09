import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: import.meta.env.DEV,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    load: "languageOnly",
    interpolation: {escapeValue: false},
    detection: {
        order: ["querystring", "localStorage", "cookies", "htmlTag", "navigator"],
        caches: ["localStorage","cookies"],
    },
    resources: {
        en: {
          translation: {
            //Footer
            credit: 'Based on the Inside Out Franchise by Pixar Animation Studios',
            copyright: '© 2026 Marianopolis Robotics. All rights reserved.',

            //Nav
            title: "Inside Out",
            ball1: "Emotions Headquarter",
            ball2: "Team",
            ball3: "Moduel",
            ball4: "Growth of Inside Out",
            ball5: "Robot Island",
            ball6: "Game",
            ball7: "Memory Bank",

            //Team

            //Archives

            //Moduel

            //credits
            
          },
        },
        fr: {
          translation: {
            //Footer
            credit: 'Basé sur la franchise Sens Dessus Dessous par Pixar Animation Studios',
            copyright: '© 2026 Marianopolis Robotique. Tous droits réservés.',

            //Nav
            title: "Sens Dessus Dessous",
            ball1: "Siège des émotions",
            ball2: "Équipe",
            ball3: "Moduel",
            ball4: "Croissance de Sens dessus dessous",
            ball5: "Ile de Robot",
            ball6: "Jeu",
            ball7: "Banque de Memoire",

            //Team

            //Archives

            //Moduel

            //credits
          },
        },
      },
});