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
            title: "Emotionopolis",
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
            archives: {
              sections: {
                robot: "Robot",
                programming: "Programming",
                website: "Website",
                kiosk: "Kiosk",
                video: "Video",
              },
            
              robot: {
                1: { title: "Robot Brainstorming", text: "The robot team is brainstorming ideas for three different sections of the robot: the base/drive mechanism, the lift and the claw.", date: "Oct. 30 2025" },
                2: { title: "Mix and Match!", text: "The robot team finally decides which design they will implement for each section.", date: "Nov. 6 2025" },
                3: { title: "Let's get to Work!", text: "After splitting the team up in three, each subteam begins working on their assigned part of the robot.", date: "Nov. 11 2025" },
                4: { title: "Virtual Robot", text: "Team members have begun cadding the robot. The website team is thankful because we would like to use it in our website.", date: "Nov. 25 2025" },
                5: { title: "Shopping Spree! And printed parts", text: "Wow, so many pieces bought for the robot! Oh, some of it was 3d printed by our lovely robot team members, how kind!", date: "Dec. 3 2025" },
                6: { title: "How big is this thing?", text: "The base subteam is measuring the base of the robot and deciding what pieces to get next.", date: "Jan. 5 2026" },
                7: { title: "The fact that this code does not work is blasphemy!", text: "The person responsible for coding the robot has begun. He doesn't seem very excited, I hope he figures it out.", date: "Jan. 7 2026" },
                8: { title: "Incredible progress!", text: "The base and the lift seem ready for testing, they are currently being put together.", date: "Jan. 9 2026" },
                9: { title: "Will the Claw Work?", text: "Probably? I'm not sure... Oh never mind, I was told it worked as expected just now! Hooray!", date: "Jan. 12 2026" },
                10:{ title: "Taking the robot for a test drive", text: "It doesn't look too bad! They wanted to improve the lift a little and fix some of the coding for the driving", date: "Jan. 16 2026" },
                11:{ title: "Season almost ended!?", text: "That would have been a tragedy, thankfully everyone put their hands out in a valiant attempt to catch a robot that almost fell off the table.", date: "Jan. 21 2026" },
              },
            
              programming: {
                1: { title: "Warming Up", text: "Before the first prelims came out, we practiced a little with Leetcode, questions from previous CRC competitions and other external sources.", date: "Oct. 30 2025" },
                2: { title: "Wow, we actually submitted something early!", text: "This is a new era where we don't submit our solutions last minute. Each question was answered by different team members working seamlessly.", date: "Nov. 14 2025" },
                3: { title: "I take that back", text: "Forget what I said before, we read and completed all the problems on the submission day for prelim two. This is no longer a new era, we are still submitting solutions last minute.", date: "Dec. 5 2025" },
                4: { title: "We are so back", text: "Once again, all questions were finished in advance, with multiple days before submission. I won't jinx our team anymore.", date: "Jan. 22 2026" },
                5: { title: "This is very long", text: "We have started thinking about how to tackle the long coding problem with sliding penguins. We are thinking of using bfs, as it is a 16x16 grid, it is not too big and it can run pretty quickly too if we structure the bfs correctly.", date: "Jan. 26 2026" },
              },
            
              website: {
                1: { title: "Website Design", text: "We started brainstorming how we should structure the website. We ended up choosing a 3d approach this year because it looks cool and gives us plenty of options for design choices.", date: "Oct. 30 2026" },
                2: { title: "Dividing tasks", text: "We found each part of the website we need to incorporate this year and divided it among the website members.", date: "Nov. 6 2025" },
                3: { title: "Humble beginnings", text: "We began with the navigation bar and the routing to the different pages. Many team members were still getting familiar with typescript and github.", date: "Nov. 13 2025" },
                4: { title: "Where's the rest of the website?", text: "During the break, although some sections began seeing progress such as the game description and the team roster, it was mostly empty and that's when we realized we need to actually work on the website.", date: "Jan. 5 2026" },
                5: { title: "How hard can it be?", text: "As we progressed, we started to get comfortable with typescript and decided to try some harder design ideas for the website. These ideas were very hard to implement and we couldn't keep up with the pace.", date: "Jan. 7 2026" },
                6: { title: "Our brains are growing", text: "With enough practice, time and caffeine, we gradually started to pick up the pace again. The team roster page and description pages were practically finished. Translation was also finished.", date: "Jan. 12 2026" },
                7: { title: "We need to do something to show how thankful I am to the 3d modelers", text: "The beautiful 3d model was sent in and we immediately began slaving away to finish the home page, where the model would be.", date: "Jan. 15 2026" },
                8: { title: "Remember those inaccurate quizzes on BuzzFeed...", text: "To appeal to our memories, we decided to make a quiz that determines what emotion you synergize with, using buzzfeed formatted questions.", date: "Jan. 18 2026" },
                9: { title: "This is bad", text: "A deadline has been set for the other team members to try and break the website, and it is no where near complete. We have never focused so hard on a task before.", date: "Jan. 21 2026" },
                10:{ title: "Hard work pays off!", text: "After everyone tried breaking the website, the results were better than we expected. All that's left are some final adjustments and fixing bugs!", date: "Jan. 30 2026" },
              },
            
              kiosk: {
                1: { title: "Birth of the Kiosk", text: "The kiosk subteam starts by painting the windows, which will give the kiosk a beautiful view into our team’s personality islands.", date: "Nov. 11 2025" },
                2: { title: "Kiosk Planning", text: "The subteam finalizes the official kiosk plans for Mø-Duel 2026!", date: "Nov. 14 2025" },
                3: { title: "Where will we Stash our Memories?", text: "The subteam begins constructing the shelves for the memory balls. A depth effect is created with a covered top section. To make the wall more visually interesting, the bottom half of it will be a ramp that holds even more memories!", date: "Jan. 18 2025" },
                4: { title: "Memory Container: Complete!", text: "The shelves are done, and the team finishes constructing the ramp.", date: "Jan. 5 2026" },
                5: { title: "Console Building and the First Memory Orbs", text: "While some subteam members paint the first memory balls, others work on building the console.", date: "Jan. 7 2026" },
                6: { title: "Flowers are Pretty!", text: "The first flower decorations are painted.", date: "Jan. 8 2026" },
                7: { title: "It's all Fun and Games", text: "The team starts accumulating many memories! Some team members are working on an interactive game that can be played using the console.", date: "Jan. 12 2026" },
                8: { title: "Does this mean Bing Bong's Returning...", text: "Bing Bong’s iconic cart is built. Made from material entirely reused from our TakTik 2025 arcade, it will serve as our robot table for this competition.", date: "Jan. 13 2026" },
                9: { title: "Why is the Console so Bland?", text: "The team installs buttons and decorations on the console.", date: "Jan. 15 2026" },
                10:{ title: "Look How Far We've Come!", text: "The kiosk is almost complete! Team members make some flowers motorized to spin, while others work on painting details and finalizing the console.", date: "Jan. 16 2026" },
                11:{ title: "Look Outside", text: "The team is almost done with the window frames. The windows now show the team’s three personality islands: teamwork, robotics and creativity!", date: "Jan. 19 2026" },
              },
            
              video: {
                1: { title: "What should the video be about?", text: "We first thought about what themes we can pull out of the premise of Inside Out and how we can connect it to CRC robotics.", date: "Oct. 30 2025" },
                2: { title: "Film expansion", text: "After deciding the moral of the video, we developed our story around that, which is similar to the second movie in a sense.", date: "Nov. 6 2025" },
                3: { title: "A Masterpiece in development", text: "We brainstormed the main scenes like the setting, inciting incident, rising action, climax, falling action and resolution, then began writing the script!", date: "Nov. 18 2025" },
                4: { title: "Victims...I mean the cast", text: "When we finished writing the script, we thought of different shots we would take for each scene, determined (or coerced) team members to fill in all the roles, bought costumes and found places to film.", date: "Jan. 6 2026" },
                5: { title: "Movie stars with the best filmmakers", text: "We filmed all the scenes. Some took very long to film and we had to do many retakes, but we were satisfied with all the scenes we got.", date: "Jan. 12 2026" },
                6: { title: "Putting the pieces together", text: "After filming the main scenes, we thought of what we needed for smooth transition shots between each scene and then we started editing. The first version was extremely laggy and choppy.", date: "Jan. 14 2026" },
                7: { title: "Movie stars turned voice actors?", text: "We added some voice recordings over the video to enhance the quality of the dialogue and storytelling. We had to adjust the microphone a couple of times before we got the quality we wanted and recorded everything we needed.", date: "Jan. 16 2026" },
                8: { title: "100% rotten tomatoes", text: "We got feedback from team members, friends and family. There are some final editing changes we decided to make before we submit the final product.", date: "Jan. 31 2026" },
              },
            
              memories: {
                1: { title: "Memory 1", date: "Jan. 9 2026", text: "A sneak peek into our robot's guts..." },
                2: { title: "Memory 2", date: "Jan. 6 2026", text: "Behind the scenes of the beautiful music production for our video" },
                3: { title: "Memory 3", date: "Jan. 16 2026", text: "Some of the first footage of our wonderful robot driving around!" },
                4: { title: "Memory 4", date: "Jan. 6 2026", text: "BingBong spreading happiness to the students of Marianopolis" },
                5: { title: "Memory 5", date: "Jan. 6 2026", text: "BingBong being an absolute diva as usual" },
              }
            },
            
            //Moduel
            cap1:"In the Module games of 2026, Two robots from two teams fight over 4 engines.",
            cap2:"Each engine requires 3 different components: the fan, the core and the turbine.",
            cap3:"Robots work together to replace components in the engines with those of their team’s color.",
            cap4:"Red components are broken and belong to neither team.",
            cap5:"Robots may bring red components to one of three repair stations of their color to exchange them for the equivalent component.",
            cap6:"Extra working components may be stored in the team’s spare parts zone for extra points.",
            cap7:"At the end of the five minute game, the score is tallied. Teams earn increasing points for each component of their color in each engine.",
            cap8:"Teams also earn 30 points per broken component repaired, and 40 points per component in their spare parts zone.",
            cap9:"Finally, the team with the most components in their spare parts zone get a 40% bonus to their score, the team with the tallest stack of parts in their repair zone gets 60%, stacking up to 100%.",
            cap10:"Come watch the epic CRC robot showdown February 18-21!",
            excited:"We're very excited to see that you're interested in Moduel! The CRC robotics competition is an event organized each year by the CRC to test the student's knowledge and skills in kiosk building, programming, website development, and of course - robotics! This year, Riley is taking part in the Moduel competition and the emotions are ready to give it their all!",
            non_profit:"CRC is a non-profit organization that began in 2001 as a way to bring students together through their love for robotics! This year, Riley is designing a robot that can work with and displace engine components. The emotions are ready to work hard so that Riley can focus on designing the robot.",
            february:"This year, from February 18th 2026, to February 21st 2026, the CRC Moduel competition will take place at Saint Pius X Career Center at 9955 Av. Papineau, Montreal.",
            every:"In every CRC robotics competition, the central focus of the competition is the robot showdown! Here are the rules to CRC's Moduel 2026 robot game:",
            now:"Now that you know how the robot game works, are you ready to take on the challenge? We’ve prepared a",
            sim:"3D simulation",
            help:"to help you train for the competition.",
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
            archives: {
              sections: {
                robot: "Robot",
                programming: "Programmation",
                website: "Site web",
                kiosk: "Kiosque",
                video: "Vidéo",
              },
            
              robot: {
                1: { title: "Remue-méninges du robot", text: "L’équipe robot fait un remue-méninges pour trois sections du robot : la base/le mécanisme de déplacement, l’élévateur et le grappin.", date: "30 oct. 2025" },
                2: { title: "Mix and match !", text: "L’équipe robot décide enfin quel design elle va utiliser pour chaque section.", date: "6 nov. 2025" },
                3: { title: "Au travail !", text: "Après avoir divisé l’équipe en trois, chaque sous-équipe commence à travailler sur la partie du robot qui lui a été assignée.", date: "11 nov. 2025" },
                4: { title: "Robot virtuel", text: "Des membres ont commencé à modéliser le robot en CAO. L’équipe site web est très contente, parce qu’on aimerait l’utiliser sur notre site.", date: "25 nov. 2025" },
                5: { title: "Virée magasinage ! Et des pièces imprimées", text: "Wow, tellement de pièces achetées pour le robot ! Oh, et certaines ont été imprimées en 3D par nos merveilleux membres de l’équipe robot — trop gentils !", date: "3 déc. 2025" },
                6: { title: "C’est gros comment, ce truc-là ?", text: "La sous-équipe de la base mesure la base du robot et décide quelles pièces acheter ensuite.", date: "5 janv. 2026" },
                7: { title: "Le fait que ce code ne marche pas, c’est du blasphème !", text: "La personne responsable du code du robot a commencé. Il n’a pas l’air très enthousiaste… espérons qu’il finisse par trouver la solution.", date: "7 janv. 2026" },
                8: { title: "Des progrès incroyables !", text: "La base et l’élévateur semblent prêts pour des tests : on est en train de les assembler.", date: "9 janv. 2026" },
                9: { title: "Le grappin va-tu marcher ?", text: "Probablement ? Je ne suis pas certain… Oh, finalement on vient de me dire que ça marche comme prévu ! Hourra !", date: "12 janv. 2026" },
                10:{ title: "Essai routier du robot", text: "Ça ne paraît pas si mal ! Ils voulaient améliorer un peu l’élévateur et corriger une partie du code de conduite.", date: "16 janv. 2026" },
                11:{ title: "La saison est presque finie !?", text: "Ç’aurait été une tragédie… heureusement, tout le monde a tendu les mains dans une vaillante tentative d’attraper un robot qui a failli tomber de la table.", date: "21 janv. 2026" },
              },
            
              programming: {
                1: { title: "Échauffement", text: "Avant la sortie du premier préliminaire, on s’est pratiqués un peu avec LeetCode, des questions d’anciennes compétitions CRC et d’autres sources externes.", date: "30 oct. 2025" },
                2: { title: "Wow, on a vraiment remis quelque chose d’avance !", text: "Une nouvelle ère : on ne remet plus nos solutions à la dernière minute. Chaque question a été faite par différents membres, en équipe, sans accroc.", date: "14 nov. 2025" },
                3: { title: "Je retire ce que j’ai dit", text: "Oubliez ce que j’ai dit : on a lu et complété tous les problèmes le jour même de la remise du préliminaire 2. Ce n’est pas une nouvelle ère — on remet encore à la dernière minute.", date: "5 déc. 2025" },
                4: { title: "On est tellement de retour", text: "Encore une fois, tout était terminé d’avance, plusieurs jours avant la remise. Je ne porterai plus malheur à l’équipe.", date: "22 janv. 2026" },
                5: { title: "C’est très long", text: "On a commencé à réfléchir à la façon d’aborder le long problème de programmation avec des pingouins qui glissent. On pense utiliser BFS : c’est une grille de 16×16, pas trop grosse, et ça peut rouler assez vite si on structure bien le BFS.", date: "26 janv. 2026" },
              },
            
              website: {
                1: { title: "Design du site web", text: "On a commencé à réfléchir à la structure du site. On a choisi une approche 3D cette année parce que ça a l’air vraiment cool et ça nous donne plein d’options de design.", date: "30 oct. 2026" },
                2: { title: "Répartition des tâches", text: "On a repéré chaque section à intégrer cette année et on les a réparties entre les membres de l’équipe site web.", date: "6 nov. 2025" },
                3: { title: "Débuts modestes", text: "On a commencé avec la barre de navigation et le routage vers les différentes pages. Plusieurs membres se familiarisaient encore avec TypeScript et GitHub.", date: "13 nov. 2025" },
                4: { title: "Où est le reste du site ?", text: "Pendant la pause, quelques sections avançaient (comme la description du jeu et la page de l’équipe), mais c’était surtout vide… et c’est là qu’on a réalisé qu’il fallait vraiment travailler sur le site.", date: "5 janv. 2026" },
                5: { title: "À quel point ça peut être compliqué ?", text: "En avançant, on s’est mis à être plus à l’aise avec TypeScript et on a essayé des idées de design plus difficiles. Elles étaient vraiment dures à implémenter, et on n’arrivait plus à suivre le rythme.", date: "7 janv. 2026" },
                6: { title: "Nos cerveaux grandissent", text: "Avec assez de pratique, de temps et de caféine, on a progressivement repris le rythme. La page de l’équipe et les pages de description étaient pratiquement finies. La traduction aussi.", date: "12 janv. 2026" },
                7: { title: "Il faut que je montre à quel point je suis reconnaissant envers les modeleurs 3D", text: "Le magnifique modèle 3D est arrivé, et on s’est immédiatement mis à travailler sans relâche pour finir la page d’accueil, là où le modèle allait se trouver.", date: "15 janv. 2026" },
                8: { title: "Vous vous souvenez des quiz BuzzFeed pas fiables…", text: "Pour jouer sur la nostalgie, on a décidé de faire un quiz qui détermine avec quelle émotion vous êtes en synergie, avec des questions au format BuzzFeed.", date: "18 janv. 2026" },
                9: { title: "C’est mauvais", text: "Une date limite a été fixée pour que les autres membres tentent de « casser » le site, et il est loin d’être terminé. On n’a jamais été aussi concentrés sur une tâche.", date: "21 janv. 2026" },
                10:{ title: "Le travail acharné paie !", text: "Après que tout le monde ait tenté de « casser » le site, les résultats étaient meilleurs que prévu. Il ne reste que quelques ajustements finaux et des bogues à corriger !", date: "30 janv. 2026" },
              },
            
              kiosk: {
                1: { title: "Naissance du kiosque", text: "La sous-équipe kiosque commence par peindre les fenêtres, ce qui donnera une superbe vue sur les îles de personnalité de notre équipe.", date: "11 nov. 2025" },
                2: { title: "Planification du kiosque", text: "La sous-équipe finalise les plans officiels du kiosque pour Mø-Duel 2026 !", date: "14 nov. 2025" },
                3: { title: "Où va-t-on ranger nos souvenirs ?", text: "La sous-équipe commence la construction des étagères pour les boules de mémoire. Un effet de profondeur est créé avec une section supérieure couverte. Pour rendre le mur plus intéressant visuellement, la moitié inférieure sera une rampe qui contiendra encore plus de souvenirs !", date: "18 janv. 2025" },
                4: { title: "Conteneur de souvenirs : terminé !", text: "Les étagères sont finies, et l’équipe termine la construction de la rampe.", date: "5 janv. 2026" },
                5: { title: "Construction de la console et premières boules de mémoire", text: "Pendant que certains membres peignent les premières boules de mémoire, d’autres construisent la console.", date: "7 janv. 2026" },
                6: { title: "Les fleurs, c’est joli !", text: "Les premières décorations de fleurs sont peintes.", date: "8 janv. 2026" },
                7: { title: "C’est le fun et des jeux", text: "L’équipe accumule plein de souvenirs ! Certains membres travaillent sur un jeu interactif qui peut être joué à l’aide de la console.", date: "12 janv. 2026" },
                8: { title: "Est-ce que ça veut dire que Bing Bong revient…", text: "Le célèbre chariot de Bing Bong est construit. Fabriqué entièrement à partir de matériel réutilisé de notre arcade TakTik 2025, il servira de table pour notre robot pendant cette compétition.", date: "13 janv. 2026" },
                9: { title: "Pourquoi la console est si plate ?", text: "L’équipe installe des boutons et des décorations sur la console.", date: "15 janv. 2026" },
                10:{ title: "Regardez jusqu’où on est rendus !", text: "Le kiosque est presque terminé ! Certains membres motorisent des fleurs pour qu’elles tournent, pendant que d’autres peignent des détails et finalisent la console.", date: "16 janv. 2026" },
                11:{ title: "Regardez dehors", text: "L’équipe est presque prête avec les cadres de fenêtres. Les fenêtres montrent maintenant les trois îles de personnalité de l’équipe : le travail d’équipe, la robotique et la créativité !", date: "19 janv. 2026" },
              },
            
              video: {
                1: { title: "De quoi devrait parler la vidéo ?", text: "On a d’abord réfléchi aux thèmes qu’on pouvait tirer de la prémisse de Sens dessus dessous et à comment les relier à la robotique CRC.", date: "30 oct. 2025" },
                2: { title: "Développement de l’histoire", text: "Après avoir choisi la morale de la vidéo, on a développé notre histoire autour de ça, ce qui ressemble un peu au deuxième film.", date: "6 nov. 2025" },
                3: { title: "Un chef-d’œuvre en développement", text: "On a brainstormé les scènes principales — le décor, l’élément déclencheur, la montée de l’action, le climax, la retombée et la résolution — puis on a commencé à écrire le script !", date: "18 nov. 2025" },
                4: { title: "Des victimes… euh, la distribution", text: "Quand on a fini le script, on a pensé aux plans à filmer pour chaque scène, assigné (ou « convaincu ») des membres pour remplir les rôles, acheté des costumes et trouvé des endroits où filmer.", date: "6 janv. 2026" },
                5: { title: "Des vedettes avec les meilleurs cinéastes", text: "On a filmé toutes les scènes. Certaines ont pris très longtemps et on a dû refaire plusieurs prises, mais on était contents du résultat.", date: "12 janv. 2026" },
                6: { title: "Assembler le tout", text: "Après avoir filmé les scènes principales, on a réfléchi à ce qu’il nous manquait pour des transitions fluides entre les scènes, puis on a commencé le montage. La première version était extrêmement lente et saccadée.", date: "14 janv. 2026" },
                7: { title: "Des vedettes devenues acteurs de voix ?", text: "On a ajouté des enregistrements de voix par-dessus la vidéo pour améliorer la qualité des dialogues et de la narration. On a dû ajuster le micro quelques fois avant d’obtenir la qualité voulue et d’enregistrer tout ce qu’il fallait.", date: "16 janv. 2026" },
                8: { title: "100 % Rotten Tomatoes", text: "On a reçu des commentaires de membres de l’équipe, d’amis et de la famille. Il reste quelques changements de montage à faire avant de soumettre le produit final.", date: "31 janv. 2026" },
              },
            
              memories: {
                1: { title: "Souvenir 1", date: "9 janv. 2026", text: "Un petit aperçu de l’intérieur de notre robot…" },
                2: { title: "Souvenir 2", date: "6 janv. 2026", text: "Les coulisses de la superbe production musicale pour notre vidéo" },
                3: { title: "Souvenir 3", date: "16 janv. 2026", text: "Parmi les premières images de notre merveilleux robot en action !" },
                4: { title: "Souvenir 4", date: "6 janv. 2026", text: "Bing Bong qui répand du bonheur aux élèves de Marianopolis" },
                5: { title: "Souvenir 5", date: "6 janv. 2026", text: "Bing Bong, une diva absolue comme d’habitude" },
              }
            },
            
            
            //Moduel
            cap1:"Lors des jeux MoDuel 2026, deux robots de deux équipes s’affrontent pour le contrôle de quatre moteurs.",
            cap2: "Chaque moteur nécessite trois composants différents : le ventilateur, le noyau et la turbine.",
            cap3: "Les robots travaillent ensemble pour remplacer les composants des moteurs par ceux de la couleur de leur équipe.",
            cap4: "Les composants rouges sont brisés et n’appartiennent à aucune équipe.",
            cap5: "Les robots peuvent apporter les composants rouges à l’une des trois stations de réparation de la couleur de leur équipe afin de les échanger contre le composant équivalent.",
            cap6: "Les composants fonctionnels supplémentaires peuvent être entreposés dans la zone de pièces de rechange de l’équipe afin d’obtenir des points supplémentaires.",
            cap7: "À la fin de la partie de cinq minutes, le pointage est calculé. Les équipes obtiennent un nombre croissant de points pour chaque composant de leur couleur présent dans chaque moteur.",
            cap8: "Les équipes obtiennent également 30 points pour chaque composant brisé réparé et 40 points pour chaque composant placé dans leur zone de pièces de rechange.",
            cap9: "Enfin, l’équipe ayant le plus de composants dans sa zone de pièces de rechange reçoit un bonus de 40 % sur son pointage, tandis que l’équipe ayant la pile de pièces la plus haute dans sa zone de réparation reçoit un bonus de 60 %, pour un maximum combiné de 100 %.",
            cap10: "Venez assister à l’affrontement épique des robots de la CRC du 18 au 21 février !",
            excited:"Nous sommes ravis de voir que vous vous intéressez au MoDuel ! La compétition de robotique de la CRC est un événement organisé chaque année afin de mettre à l’épreuve les connaissances et les compétences des élèves en construction de kiosques, en programmation, en développement web et, bien sûr, en robotique. Cette année, Riley participe à la compétition MoDuel, et les émotions sont prêtes à donner le meilleur d’elles-mêmes !",
            non_profit:"La CRC est un organisme à but non lucratif fondé en 2001 dans le but de rassembler des élèves autour de leur passion pour la robotique. Cette année, Riley conçoit un robot capable de manipuler et de déplacer des composants de moteurs. Les émotions sont prêtes à travailler fort afin de permettre à Riley de se concentrer sur la conception du robot.",
            february:"Cette année, la compétition MoDuel de la CRC aura lieu du 18 au 21 février 2026 au Centre de carrière Saint-Pius-X, situé au 9955, avenue Papineau, à Montréal.",
            every:"Dans chaque compétition de robotique de la CRC, l’élément central est l’affrontement entre les robots. Voici les règles du jeu de robots du MoDuel 2026 de la CRC :",
            now:"Nous avons préparé une",
            sim:"simulation 3D",
            help:" pour vous entraîner en vue de la compétition.",
            //credits
          },
        },
      },
});