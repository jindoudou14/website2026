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
            ball1: "Headquarters",
            ball2: "Team",
            ball3: "Moduel",
            ball4: "Core Memories",
            ball5: "Your Island",
            ball6: "Control Panel",
            ball7: "Robot",

            //Team
            meet:"Meet the team",
            welcome:"Welcome to Riley's mind! Get to know the team by clicking on the characters below and scroll through their information. You'll learn about each member's subteam, their favourite emotion, a fun fact about them, and what they learned from robotics.",
            sub: "Subteam:",
            emo: "Synergising Emotion:",
            fun:"Fun Fact:",
            quo: "Best Quote:",
            //1
            paradis_subteam: "Supervisor",
            paradis_emotion: "Joy",
            paradis_fun: "I am a hyperspheroid-earther.",
            paradis_des: "My role as the robotics mentor at Marianopolis mostly involves dealing with the aspects of the team that diverge from the main goal. In order to ensure the students focus on the key aspects of the competition—namely the robot, the kiosk, website, video, and programming—I help manage scheduling, team membership, finances, and transportation of materials.",
            paradis_quo:"Out of all the things I have lost, I miss my mind the most - Mark Twain",
            //2
            livia_subteam: "Captain, Kiosk, tutorial/video",
            livia_emotion: "Anxiety",
            livia_fun: "My goal in life is to have 8 cats",
            livia_des: "This year challenged me to think creatively to bring our theme to life. I learned how to plan ahead and adapt to new challenges, and I improved my communication skills with team members. Sadly, I had to sacrifice some beloved pieces of clothing due to paint stains",
            livia_quo:"live, laugh, crash out",
            //3
            han_subteam: "Captain, Robot",
            han_emotion: "hunger",
            han_fun: "Airplanes 👍",
            han_des: "I gave up my sanity taking apart and rebuilding one singular component of the robot, but at least I learned how to find my way in very messy rooms, looking for tools and parts (I took part in creating this learning opportunity).",
            han_quo:"Get to work Ismael",
            //4
            clancy_subteam: "Video/Kiosk",
            clancy_emotion: "Fear",
            clancy_fun: "Once held the world record for the Wild Kratts: Monkey Mayhem any% speedrun.  ",
            clancy_des: "You need to mix paint after opening a can. ",
            clancy_quo:"Due tomorrow, do tomorrow",
            //5
            eveline_subteam: "Video and kiosk (too lazy to get into specifics)",
            eveline_emotion: "joy",
            eveline_fun: "I like to eat 😋",
            eveline_des: "I learned how to use DaVinci Resolve 20",
            eveline_quo:"THE ONE PIECE IS REALLL 🗣️🗣️🔥🔥",
            //6
            jijia_subteam: "robot, code for robot, video game for kiosk",
            jijia_emotion: "anger 😡",
            jijia_fun: "I'm really good at soldering ",
            jijia_des: "I learned that differential mechanisms are really cool. I sacrificed my sanity coding the robot and the game.",
            jijia_quo:"mesure twice cut 5 times",
            //7
            zhuoyao_subteam: "Video and tutorial",
            zhuoyao_emotion: "Joy",
            zhuoyao_fun: "I have an extra bone in my body.",
            zhuoyao_des: "I learned how to use DaVinci Resolve 20! I unfortunately did not participate in many clubs to better focus on robotics.",
            zhuoyao_quo:"“If you change the way you look at things, the things you look at change.” — Wayne Dyer",
            //8
            carla_subteam: "Kiosk!",
            carla_emotion: "Anger",
            carla_fun: "I like drawing and playing hollow knight",
            carla_des: "I learned how to work with procreate as well as how art is transposed into video games, such as tilemaps and the layout animation sequences. I had to sacrifice my sanity to draw more animation frames for Jijia. ",
            carla_quo:"That looks yummy",
            //9
            tony_subteam: "Website, programming and video",
            tony_emotion: "Fear(I play him)",
            tony_fun: "I love gaming",
            tony_des: "Setting up green screens",
            tony_quo:"In life, there’s road blocks",
            //10
            rowan_subteam: "Kiosk and Tutorial",
            rowan_emotion: "Joy",
            rowan_fun: "I like camping, hiking, and being in the woods.",
            rowan_des: "I learned how to build with and carve foam, how to communicate effectively in a team, and how to set a computer ablaze (with supervision). Time was my largest sacrifice this year, as I was coordinating with the fire department how to film our tutorial legally and safely, something that often involved phone calls on weekends and between classes.",
            rowan_quo:"Woohoo, we finally burned it! It only took eight matches, a lighter, and a propylene torch! - Rowan",
            //11
            julia_subteam:"Kiosk, Video/Tutorial",
            julia_emotion: "disgust",
            julia_fun:"i'm a big fan of collecting rocks and sticks",
            julia_des:"I learned how to use power tools (which is really cool) and all the fun quirks of woodworking. I also learned that I can't cut straight to save my life using a jig saw. I sacrificed 1 pair of jeans, 1 pair of shorts, and 2 t-shirts to purple paint and wood dust.",
            julia_quo:"U da real art - Julia 2026",
            //12
            david_subteam: "Website, Programming",
            david_emotion: "Fear",
            david_fun: "I like playing hockey",
            david_des: "I learned that TypeScript makes larger projects way more organised for a team of webdevs. Even thought the time spent during all those meetings were worth it, there were some cool events I had to skip.",
            david_quo:"There’s always light at the end of the tunnel",
            //13
            daisy_subteam:"Professional job hopper (3 semesters of experience)",
            daisy_emotion:"Joy :)",
            daisy_fun:"My high score for the most slices of bread stacked on a baby's face is 32",
            daisy_des:"I learned to implement onshape with my blender workflow (I was onshape washed by the previous team captain). I also learned that starbucks cappuccino makes me constipated  (thank you Julia). I sacrificed neither sleep nor sanity, for I have none.",
            daisy_quo:"(standing in front of the closed zoo) Damn I guess I won't see my sister today",
            //14
            sam_subteam:"Robot lift",
            sam_emotion:"Anxiety 🥲",
            sam_fun:"I can do an eerily accurate impression of a cow.",
            sam_des:"How to add WD-40 and Thread-lock to everything :)",
            sam_quo:"Words are just complicated airflow 🍃😶‍🌫️",
            //15
            elliot_subteam:"forklift certified (cad'ing the claw)",
            elliot_emotion:"envy",
            elliot_fun:"Ivar Aasen #1 Fan",
            elliot_des:"This year I learned that one really ought to constrain their sketches. I also very much sacrificed my sleep schedule for this.",
            elliot_quo:"Move your gambling over, I need to explain binary!",
            //16
            eva_subteam:"Robot, washer abuser",
            eva_emotion:"Joy",
            eva_fun:"Baking to make people like me. ",
            eva_des:"I learned a lot of very useful skills in the cage, such as soldering, how to use a Dremel (it's terrible, I hate it, it's scary), how to cut extrusions and the joys of threadlocking. I sacrificed my chances of not getting lung cancer (all I do all day is breathe in WD-40, solder fumes and steel). ",
            eva_quo:"I'm hungry",
            //17
            jeremy_subteam:"Robot",
            jeremy_emotion:"Fear",
            jeremy_fun:"I collect model ships even though I hate the ocean.",
            jeremy_des:"I learned how to saw straight and fast with a hacksaw and sacrificed my back to work while standing.",
            jeremy_quo:"It’s now or never!",
            //18
            ines_subteam:"robot claw",
            ines_emotion:"joy",
            ines_fun:"Im certified in scuba diving",
            ines_des:"I learned how to design and build different parts of a robot, and I also learned the names of pieces I didn’t even know existed. I had to sacrifice my APs, they will be missed",
            ines_quo:"it is what it is",
            //19
            wendi_subteam:"green screen struggler",
            wendi_emotion:"fear",
            wendi_fun:"bubble tea discovery of the year is jasmin milk tea",
            wendi_des:"learned how to put aura around the emotions + sacrificed my hawaii trip for robotics 😛",
            wendi_quo:"you da real robotics",
            //20
            ariana_subteam:"Robot: claw design and build",
            ariana_emotion:"Determined( joy … I guess)",
            ariana_fun:"I can do 8 pull ups",
            ariana_des:"I got more involved in designing the robot. I had to wake up earlier in the mornings to go to robotics. I also spent part of christmas to work on the claw design",
            ariana_quo:"It always seems impossible until it's done",
            //21
            ismael_subteam:"website",
            ismael_emotion:"joy",
            ismael_fun:"I like teaching robotics.",
            ismael_des:"This year, I learned how to move and play with balls digitally. I’ve had to sacrifice my mental sanity for this team.",
            ismael_quo:"If you’re not last, you’re first!",
            //22
            jonathan_subteam:"Website, Programming",
            jonathan_emotion:"joy",
            jonathan_fun:"I used to be top 90 in Canada for a game called Stumble Guys.",
            jonathan_des:"This year I learned how to divide tasks among people and deepen my understanding for typescript, react and node. I had to sacrifice a lot of my free time to work on robotics.",
            jonathan_quo:"Don't drink your water, water your drink.",
            //23
            jiacheng_subteam:"robot",
            jiacheng_emotion:"joy",
            jiacheng_fun:"I love reading Brandon Sanderson.",
            jiacheng_des:"I learned the differences between the many drive systems used for robots the methods used to build them. I also learned near field communication protocols and how to read them with an computer/Arduino. A sacrifice I made is my free time for robotics. ",
            jiacheng_quo:"Where are the Allen keys ",
            //24
            sophie_subteam: "Website",
            sophie_emotion: "Envy",
            sophie_fun: "Spiders are cool",
            sophie_des: "I learned how to use typescript as well as how to work on a group project on github. My biggest sacrifice was the amount of time I spent trying to get my laptop to install npm.",
            sophie_quo:"Because singing killed my grandma - the Trolls movie",
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
            ball4: "Mémoires Centrales",
            ball5: "Votre Île",
            ball6: "Panneau de Contrôle",
            ball7: "Robot",

            //Team
            meet:"Rencontrez l'équipe",
            welcome:"Bienvenue dans l'esprit de Riley ! Faites connaissance avec l'équipe en cliquant sur les personnages ci-dessous. Vous découvrirez la sous-équipe de chaque membre, son émotion préférée, un fait amusant à son sujet et ce qu'ils ont appris de la robotique.",
            sub: "Sous-équipe:",
            emo: "Émotion:",
            fun:"Fait amusant:",
            quo: "Proverbe Favoris:",
            //1
            paradis_subteam: "Superviseur",
            paradis_emotion: "Joie",
            paradis_fun: "Je crois fermement en la Terre hyper-sphéroïde.",
            paradis_des: "Mon rôle en tant que mentor de robotique à Marianopolis consiste principalement à gérer les aspects de l'équipe qui divergent de l'objectif principal. Afin que les élèves se concentrent sur les aspects essentiels de la compétition, à savoir le robot, le kiosque, le site web, la vidéo et la programmation, j'aide à gérer les horaires, la composition de l'équipe, les finances et le transport du matériel.",
            paradis_quo:"De toutes les choses que j'ai perdues, c'est mon esprit qui me manque le plus - Mark Twain",
            //2
            livia_subteam: "Capitaine, Kiosque, tutoriel/vidéo",
            livia_emotion: "Anxiété",
            livia_fun: "Mon but dans la vie, c’est d’avoir 8 chats",
            livia_des: "Cette année m’a poussée à penser de façon créative pour donner vie à notre thème. J’ai appris à planifier d’avance et à m’adapter à de nouveaux défis, et j’ai amélioré mes compétences en communication avec les membres de l’équipe. Malheureusement, j’ai dû sacrifier quelques morceaux de vêtements bien-aimés à cause de taches de peinture.",
            livia_quo:"vis, ris, pète une coche",

            //3
            han_subteam: "Capitaine, Robot",
            han_emotion: "faim",
            han_fun: "Les avions 👍",
            han_des: "J’ai perdu ma santé mentale en démontant et en reconstruisant une seule composante du robot, mais au moins j’ai appris à me retrouver dans des pièces vraiment en désordre pour trouver des outils et des pièces (j’ai participé à la création de cette opportunité d’apprentissage).",
            han_quo:"Au travail, Ismael",

            //4
            clancy_subteam: "Vidéo/Kiosque",
            clancy_emotion: "Peur",
            clancy_fun: "J’ai déjà détenu le record du monde du speedrun any% de Wild Kratts : Monkey Mayhem.",
            clancy_des: "Il faut mélanger la peinture après avoir ouvert la canne.",
            clancy_quo:"À remettre demain, fais-le demain",

            //5
            eveline_subteam: "Vidéo et kiosque (trop paresseuse pour entrer dans les détails)",
            eveline_emotion: "joie",
            eveline_fun: "J’aime manger 😋",
            eveline_des: "J’ai appris à utiliser DaVinci Resolve 20",
            eveline_quo:"LE ONE PIECE EST RÉEL 🗣️🗣️🔥🔥",

            //6
            jijia_subteam: "robot, code du robot, jeu vidéo pour le kiosque",
            jijia_emotion: "colère 😡",
            jijia_fun: "Je suis vraiment bon·ne en soudure",
            jijia_des: "J’ai appris que les mécanismes différentiels sont vraiment cool. J’ai sacrifié ma santé mentale à coder le robot et le jeu.",
            jijia_quo:"mesure deux fois, coupe cinq fois",

            //7
            zhuoyao_subteam: "Vidéo et tutoriel",
            zhuoyao_emotion: "Joie",
            zhuoyao_fun: "J’ai un os de plus dans mon corps.",
            zhuoyao_des: "J’ai appris à utiliser DaVinci Resolve 20 ! Je n’ai malheureusement pas participé à beaucoup de clubs afin de mieux me concentrer sur la robotique.",
            zhuoyao_quo:"« Si tu changes la façon dont tu regardes les choses, les choses que tu regardes changent. » — Wayne Dyer",

            //8
            carla_subteam: "Kiosque !",
            carla_emotion: "Colère",
            carla_fun: "J’aime dessiner et jouer à Hollow Knight",
            carla_des: "J’ai appris à travailler avec Procreate ainsi que comment l’art est transposé dans les jeux vidéo, comme les tilemaps et la disposition des séquences d’animation. J’ai dû sacrifier ma santé mentale pour dessiner plus de frames d’animation pour Jijia.",
            carla_quo:"Ça a l'air bon",

            //9
            tony_subteam: "Site web, programmation et vidéo",
            tony_emotion: "Peur (je la joue)",
            tony_fun: "J’adore les jeux vidéo",
            tony_des: "Installer des fonds verts",
            tony_quo:"Dans la vie, il y a des obstacles",

            //10
            rowan_subteam: "Kiosque et tutoriel",
            rowan_emotion: "Joie",
            rowan_fun: "J’aime le camping, la randonnée et être dans le bois.",
            rowan_des: "J’ai appris à construire et sculpter de la mousse, à communiquer efficacement en équipe et à mettre le feu à un ordinateur (avec supervision). Le temps a été mon plus grand sacrifice cette année, puisque je coordonnais avec le service d’incendie pour filmer notre tutoriel légalement et en toute sécurité, ce qui impliquait souvent des appels la fin de semaine et entre les cours.",
            rowan_quo:"Woohoo, on l’a enfin brûlé ! Ça a juste pris huit allumettes, un briquet et un chalumeau au propylène ! - Rowan",

            //11
            julia_subteam:"Kiosque, Vidéo/Tutoriel",
            julia_emotion: "dégoût",
            julia_fun:"je suis une grande fan de collectionner des roches et des bâtons",
            julia_des:"J’ai appris à utiliser des outils électriques (ce qui est vraiment cool) et toutes les petites particularités du travail du bois. J’ai aussi appris que je suis incapable de couper droit avec une scie sauteuse. J’ai sacrifié 1 paire de jeans, 1 paire de shorts et 2 t-shirts à la peinture mauve et à la poussière de bois.",
            julia_quo:"T’es du vrai art - Julia 2026",

            //12
            david_subteam: "Site web, programmation",
            david_emotion: "Peur",
            david_fun: "J’aime jouer au hockey",
            david_des: "J’ai appris que TypeScript rend les gros projets beaucoup plus organisés pour une équipe de développeurs web. Même si le temps passé en réunions en valait la peine, j’ai dû manquer quelques événements intéressants.",
            david_quo:"Il y a toujours de la lumière au bout du tunnel",

            //13
            daisy_subteam:"Changeuse de job professionnelle (3 sessions d’expérience)",
            daisy_emotion:"Joie :)",
            daisy_fun:"Mon record personnel de tranches de pain empilées sur le visage d’un bébé est de 32",
            daisy_des:"J’ai appris à intégrer Onshape à mon workflow Blender (j’ai été onshape-washée par le capitaine précédent). J’ai aussi appris que le cappuccino de Starbucks me constipe (merci Julia). Je n’ai sacrifié ni mon sommeil ni ma santé mentale, car je n’ai ni l’un ni l’autre.",
            daisy_quo:"(devant le zoo fermé) Damn, j’imagine que je ne verrai pas ma sœur aujourd’hui",

            //14
            sam_subteam:"Élévateur du robot",
            sam_emotion:"Anxiété 🥲",
            sam_fun:"Je peux faire une imitation étrangement réaliste d’une vache.",
            sam_des:"Comment mettre du WD-40 et du frein-filet sur absolument tout :)",
            sam_quo:"Les mots, c’est juste de l’air compliqué 🍃😶‍🌫️",

            //15
            elliot_subteam:"certifié chariot élévateur (CAD du grappin)",
            elliot_emotion:"envie",
            elliot_fun:"Fan #1 d’Ivar Aasen",
            elliot_des:"Cette année, j’ai appris qu’il faut vraiment contraindre ses esquisses. J’ai aussi sacrifié solidement mon horaire de sommeil pour ça.",
            elliot_quo:"Déplace ton gambling, j’ai besoin d’expliquer le binaire !",

            //16
            eva_subteam:"Robot, abuseuse de rondelles",
            eva_emotion:"Joie",
            eva_fun:"Faire de la pâtisserie pour que les gens m’aiment.",
            eva_des:"J’ai appris plein de compétences très utiles dans la cage, comme souder, utiliser un Dremel (c’est horrible, je déteste ça, c’est épeurant), couper des profilés et les joies du frein-filet. J’ai sacrifié mes chances de ne pas avoir le cancer du poumon (je respire juste du WD-40, des vapeurs de soudure et de l’acier toute la journée).",
            eva_quo:"J’ai faim",

            //17
            jeremy_subteam:"Robot",
            jeremy_emotion:"Peur",
            jeremy_fun:"Je collectionne des modèles réduits de bateaux même si je déteste l’océan.",
            jeremy_des:"J’ai appris à scier droit et vite avec une scie à métaux et j’ai sacrifié mon dos à travailler debout.",
            jeremy_quo:"C’est maintenant ou jamais !",

            //18
            ines_subteam:"grappin du robot",
            ines_emotion:"joie",
            ines_fun:"Je suis certifiée en plongée sous-marine",
            ines_des:"J’ai appris à concevoir et construire différentes parties d’un robot, et j’ai aussi appris le nom de pièces dont je ne connaissais même pas l’existence. J’ai dû sacrifier mes cours AP, ils vont me manquer.",
            ines_quo:"c’est ce que c’est",

            //19
            wendi_subteam:"en lutte avec l’écran vert",
            wendi_emotion:"peur",
            wendi_fun:"ma découverte bubble tea de l’année est le thé au lait au jasmin",
            wendi_des:"j’ai appris à ajouter une aura autour des émotions + j’ai sacrifié mon voyage à Hawaï pour la robotique 😛",
            wendi_quo:"t’es du vrai robotics",

            //20
            ariana_subteam:"Robot : conception et fabrication du grappin",
            ariana_emotion:"Déterminée (joie… j’imagine)",
            ariana_fun:"Je peux faire 8 tractions",
            ariana_des:"Je me suis davantage impliquée dans la conception du robot. J’ai dû me lever plus tôt le matin pour aller en robotique. J’ai aussi passé une partie de Noël à travailler sur la conception du grappin.",
            ariana_quo:"Ça semble toujours impossible jusqu’à ce que ce soit fait",

            //21
            ismael_subteam:"site web",
            ismael_emotion:"joie",
            ismael_fun:"J’aime enseigner la robotique.",
            ismael_des:"Cette année, j’ai appris à déplacer et manipuler des balles numériquement. J’ai dû sacrifier ma santé mentale pour cette équipe.",
            ismael_quo:"Si t’es pas dernier, t’es premier !",

            //22
            jonathan_subteam:"Site web, programmation",
            jonathan_emotion:"joie",
            jonathan_fun:"J’ai déjà été top 90 au Canada dans un jeu appelé Stumble Guys.",
            jonathan_des:"Cette année, j’ai appris à diviser les tâches entre les gens et à approfondir ma compréhension de TypeScript, React et Node. J’ai dû sacrifier beaucoup de mon temps libre pour la robotique.",
            jonathan_quo:"Ne bois pas ton eau, arrose ta boisson.",

            //23
            jiacheng_subteam:"robot",
            jiacheng_emotion:"joie",
            jiacheng_fun:"J’adore lire Brandon Sanderson.",
            jiacheng_des:"J’ai appris les différences entre les nombreux systèmes d’entraînement utilisés pour les robots et les méthodes pour les construire. J’ai aussi appris les protocoles de communication en champ proche et comment les lire avec un ordinateur ou un Arduino. J’ai sacrifié mon temps libre pour la robotique.",
            jiacheng_quo:"Où sont les clés Allen",

            //24
            sophie_subteam: "Site web",
            sophie_emotion: "envie",
            sophie_fun: "Les araignées envies sont cool",
            sophie_des: "J'ai appris à utiliser Typescript et à travailler sur un projet de groupe sur GitHub. Mon plus grand sacrifice a été le temps que j'ai passé à essayer d'installer npm sur mon ordinateur portable.",
            sophie_quo:"Parce que chanter a tué ma grand-mère - le film Les Trolls",

            //Archives

            //Moduel

            //credits
          },
        },
      },
});