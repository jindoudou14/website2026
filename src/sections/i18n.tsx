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
            ball1: "emotions headquarter",
            ball2: "team",
            ball3: "Moduel",
            ball4: "",
            ball5: "",
            ball6: "",
            ball7: "",
          },
        },
        fr: {
          translation: {
            //Footer
            credit: 'Base sur la franchise Inside Out par Pixar Animation Studios',
            copyright: '© 2026 Marianopolis Robotique. Tous droits réservés.',

            //Nav
            ball1: "siège des émotions",
            ball2: "equipe",
            ball3: "Moduel",
          },
        },
      },
});