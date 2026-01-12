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
            //1
            paradis_subteam: "Supervisor",
            paradis_emotion: "",
            paradis_fun: "",
            paradis_des: "",
            //2
            livia_subteam: "Captain, Kiosk, tutorial/video",
            livia_emotion: "Anxiety",
            livia_fun: "My goal in life is to have 8 cats",
            livia_des: "This year challenged me to think creatively to bring our theme to life. I learned how to plan ahead and adapt to nnew challenges, and I improved my communication skills with team members. Sadly, I had to sacrifice some beloved pieces of clothing due to paint stains",
            //3
            han_subteam: "",
            han_emotion: "",
            han_fun: "",
            han_des: "",
            //4
            clancy_subteam: "Video/Kiosk",
            clancy_emotion: "Fear",
            clancy_fun: "Once held the world record for the Wild Kratts: Monkey Mayhem any% speedrun.  ",
            clancy_des: "You need to mix paint after opening a can. ",
            //5
            eveline_subteam: "",
            eveline_emotion: "",
            eveline_fun: "",
            eveline_des: "",
            //6
            jijia_subteam: "",
            jijia_emotion: "",
            jijia_fun: "",
            jijia_des: "",
            //7
            zhuoyao_subteam: "Video and tutorial",
            zhuoyao_emotion: "Joy",
            zhuoyao_fun: "I have an extra bone in my body.",
            zhuoyao_des: "I learned how to use DaVinci Resolve 20! I unfortunately did not participate in many clubs to better focus on robotics.",
            //8
            carla_subteam: "Kiosk!",
            carla_emotion: "Anger",
            carla_fun: "I like drawing and playing hollow knight",
            carla_des: "I learned how to work with procreate as well as how art is transposed into video games, such as tilemaps and the layout animation sequences. I had to sacrifice my sanity to draw more animation frames for Jijia. ",
            //9
            tony_subteam: "Website, programming and video",
            tony_emotion: "Fear(I play him)",
            tony_fun: "I love gaming",
            tony_des: "Setting up green screens",
            //10
            rowan_subteam: "Kiosk and Tutorial",
            rowan_emotion: "Joy",
            rowan_fun: "I like camping, hiking, and being in the woods.",
            rowan_des: "I learned how to build with and carve foam, how to communicate effectively in a team, and how to set a computer ablaze (with supervision). Time was my largest sacrifice this year, as I was coordinating with the fire department how to film our tutorial legally and safely, something that often involved phone calls on weekends and between classes.",
            //11

            //12
            david_subteam: "Website, Programming",
            david_emotion: "Fear",
            david_fun: "I like playing hockey",
            david_des: "I learned that TypeScript makes larger projects way more organised for a team of webdevs. Even thought the time spent during all those meetings were worth it, there were some cool events I had to skip.",
            //13

            //14

            //15

            //16

            //17

            //18

            //19

            //20

            //21

            //22

            //23

            //24
            sophie_subteam: "",
            sophie_emotion: "",
            sophie_fun: "",
            sophie_des: "",

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
            //1
            paradis_subteam: "Superviseur",
            paradis_emotion: "",
            paradis_fun: "",
            paradis_des: "",
            //2
            livia_subteam: "Capitaine, Kiosque, tutoriel/vidéo",
            livia_emotion: "Anxiété",
            livia_fun: "Mon objectif dans la vie est d'avoir 8 chats",
            livia_des: "Cette année m’a mis au défi de penser de manière créative pour donner vie à notre thème. J’ai appris à planifier à l’avance et à m’adapter à de nouveaux défis, et j’ai amélioré mes compétences en communication avec les membres de l’équipe. Malheureusement, j'ai dû sacrifier des vêtements bien-aimés à cause de taches de peinture",
            //3
            han_subteam: "",
            han_emotion: "",
            han_fun: "",
            han_des: "",
            //4
            clancy_subteam: "Vidéo/Kiosque",
            clancy_emotion: "Peur",
            clancy_fun: "Détenait autrefois le record du monde du speedrun Wild Kratts: Monkey Mayhem any%.",
            clancy_des: "Il faut mélanger la peinture après avoir ouvert une boîte",
            //5
            eveline_subteam: "",
            eveline_emotion: "",
            eveline_fun: "",
            eveline_des: "",
            //6
            jijia_subteam: "",
            jijia_emotion: "",
            jijia_fun: "",
            jijia_des: "",
            //7
            zhuoyao_subteam: "Vidéo et tutoriel",
            zhuoyao_emotion: "Joie",
            zhuoyao_fun: "J'ai un os supplémentaire dans mon corps.",
            zhuoyao_des: "J’ai appris à utiliser DaVinci Resolve 20 ! Malheureusement, je n’ai pas participé à beaucoup de clubs afin de me concentrer sur la robotique.",
            //8
            carla_subteam: "",
            carla_emotion: "",
            carla_fun: "",
            carla_des: "",
            //9
            tony_subteam: "",
            tony_emotion: "",
            tony_fun: "",
            tony_des: "",
            //10
            rowan_subteam: "",
            rowan_emotion: "",
            rowan_fun: "",
            rowan_des: "",
            //11

            //12
            david_subteam: "",
            david_emotion: "",
            david_fun: "",
            david_des: "",
            //13

            //14

            //15

            //16

            //17

            //18

            //19

            //20

            //21

            //22

            //23

            //24
            sophie_subteam: "",
            sophie_emotion: "",
            sophie_fun: "",
            sophie_des: "",

            //Archives

            //Moduel

            //credits
          },
        },
      },
});