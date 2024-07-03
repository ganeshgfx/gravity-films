import {
     AnimationTwoTone,
     AutoFixHighTwoTone,
     CampaignTwoTone,
     ContentCutTwoTone,
     DrawTwoTone,
     LanguageTwoTone,
     LocalSeeTwoTone,
     MovieFilterTwoTone,
     MusicNoteTwoTone,
     StayCurrentPortraitTwoTone,
     StickyNote2TwoTone,
     SupportAgentTwoTone,
     TheaterComedyTwoTone,
     TipsAndUpdatesTwoTone,
     VideocamTwoTone,
     ViewInArTwoTone,
} from "@mui/icons-material";
import React from "react";
const FILM_MAKING = "film_making";
const CINEMATOGRAPHY = "cinematography";
const DIRECTING = "directing";
const EDITING = "editing";
const VFX_CGI = "vfx_cgi";
const ANIMATIONS = "animations";
const PHOTOGRAPHY = "photography";
const GRAPHICS_DESIGN = "graphics_design";
const MUSIC_SOUNDS = "music_sounds";
const DIGITAL_MARKETING = "digital_marketing";
const WEBSITE_DEVELOPMENT = "website_development";
const APP_DEVELOPMENT = "app_development";
const CONTENT_WRITING = "content_writing";
const TECH_SUPPORT = "tech_support";
const BRAND_BUILDING = "brand_building";
const VISUAL_ART = "visual_art";
export const SERVICES_IDS = {
     film_making: FILM_MAKING,
     cinematography: CINEMATOGRAPHY,
     directing: DIRECTING,
     editing: EDITING,
     vfx_cgi: VFX_CGI,
     animations: ANIMATIONS,
     photography: PHOTOGRAPHY,
     graphics_design: GRAPHICS_DESIGN,
     music_sounds: MUSIC_SOUNDS,
     digital_marketing: DIGITAL_MARKETING,
     website_development: WEBSITE_DEVELOPMENT,
     app_development: APP_DEVELOPMENT,
     content_writing: CONTENT_WRITING,
     tech_support: TECH_SUPPORT,
     brand_building: BRAND_BUILDING,
     visual_art: VISUAL_ART,
};
export const servicesDatas = [
     {
          id: FILM_MAKING,
          title: "Film Making",
          icon: <MovieFilterTwoTone />,
          color: "#f44336",
          text: "Providing comprehensive film production services, from conceptualization to final cut.",
     },
     {
          id: CINEMATOGRAPHY,
          title: "Cinematography",
          icon: <VideocamTwoTone />,
          color: "#ff9800",
          text: "Offering expert cinematography services to capture stunning visuals for your project.",
     },
     {
          id: DIRECTING,
          title: "Directing",
          icon: <TheaterComedyTwoTone />,
          color: "#4caf50",
          text: "Professional directing services to bring your creative vision to life.",
     },
     {
          id: EDITING,
          title: "Editing",
          icon: <ContentCutTwoTone />,
          color: "#2196f3",
          text: "Providing top-notch editing services to create a seamless and engaging narrative.",
     },
     {
          id: VFX_CGI,
          title: "VFX / CGI",
          icon: <ViewInArTwoTone />,
          color: "#9c27b0",
          text: "Enhancing your film with high-quality visual effects and computer-generated imagery.",
     },
     {
          id: ANIMATIONS,
          title: "Animations",
          icon: <AnimationTwoTone />,
          color: "#e91e63",
          text: "Creating captivating animations, from 2D cartoons to 3D models.",
     },
     {
          id: PHOTOGRAPHY,
          title: "Photography",
          icon: <LocalSeeTwoTone />,
          color: "#ff5722",
          text: "Offering professional photography services to capture perfect moments.",
     },
     {
          id: GRAPHICS_DESIGN,
          title: "Graphics Design",
          icon: <DrawTwoTone />,
          color: "#607d8b",
          text: "Providing creative graphic design services for print and digital media.",
     },
     {
          id: MUSIC_SOUNDS,
          title: "Music / Sounds",
          icon: <MusicNoteTwoTone />,
          color: "#795548",
          text: "Composing, producing, and editing music and sound effects tailored to your needs.",
     },
     {
          id: DIGITAL_MARKETING,
          title: "Digital Marketing",
          icon: <CampaignTwoTone />,
          color: "#3f51b5",
          text: "Developing and executing effective digital marketing strategies to boost your brand.",
     },
     {
          id: WEBSITE_DEVELOPMENT,
          title: "Website Development",
          icon: <LanguageTwoTone />,
          color: "#009688",
          text: "Building and maintaining engaging and functional websites for your business.",
     },
     {
          id: APP_DEVELOPMENT,
          title: "App Development",
          icon: <StayCurrentPortraitTwoTone />,
          color: "#8bc34a",
          text: "Designing and developing mobile applications tailored to your needs.",
     },
     {
          id: CONTENT_WRITING,
          title: "Content Writing",
          icon: <StickyNote2TwoTone />,
          color: "#ffeb3b",
          text: "Crafting compelling and informative content for various platforms.",
     },
     {
          id: TECH_SUPPORT,
          title: "Tech Support",
          icon: <SupportAgentTwoTone />,
          color: "#ff9800",
          text: "Providing reliable technical assistance and support for your software and hardware.",
     },
     {
          id: BRAND_BUILDING,
          title: "Brand Building",
          icon: <TipsAndUpdatesTwoTone />,
          color: "#ff5722",
          text: "Helping you develop and enhance your brand's identity and presence.",
     },
     {
          id: VISUAL_ART,
          title: "Visual Art",
          icon: <AutoFixHighTwoTone />,
          color: "#607d8b",
          text: "Creating and appreciating various forms of visual art, from paintings to digital illustrations.",
     },
];
export const LOGOS_IDS = {
     HERMOD: "hermod",
     NUTS_N_JARS: "nuts_n_jars",
     HINDUSTAN_UNILEVER: "hindustan_unilever",
     NIFT: "nift",
     SCREATION_FILMS: "screation_films",
     INDIEGROW_FUSION: "indiegrow_fusion",
     COFFEE_CUP_INDIA: "coffee_cup_india",
     TRI_DRASHYA: "tri_drashya",
     HAZELCOP: "hazelcop",
     MYFITNESS: "myfitness",
     ARV_REALTY: "arv_realty",
     FOREIGN_ROUTES: "foreign_routes",
     DR_INTERNATIONALS: "dr_internationals",
};
export const logos = [
     {
          id: LOGOS_IDS.HERMOD,
          name: "HERMOD",
          logo: "HRMD.png",
          info: "Gravity Films is proud to have collaborated with the esteemed Hermod Clothing brand, showcasing our expertise in fashion photography, clothing brand shoot modeling, and apparel photography. Our official and exclusive shoot exemplified our commitment to teamwork and dedication, resulting in stunning visuals that captured the essence of Hermod Clothing's unique style Jump with disco demands ",
          works: [
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: EDITING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.NUTS_N_JARS,
          title: "Nuts n Jars",
          description:
               "Gravity Films is delighted to have Collaborated with Nuts and Jar, a renowned peanut butter brand, to create captivating product videography and photography. Our collaboration resulted in visually compelling content that showcased the quality and appeal of Nuts and Jar's products, highlighting our expertise in delivering impactful visual storytelling.",
          image: "nnj.png",
          works: [
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: FILM_MAKING,
                    data: "",
               },
               {
                    type: EDITING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.HINDUSTAN_UNILEVER,
          title: "Hindustan Unilever",
          description:
               "Gravity Films had the privilege to collaborate with Hindustan Unilever, where we meticulously crafted a 3D layout video coupled with professional drone shoots and comprehensive site research and development. Our team's dedication to detail and expertise in visual storytelling resulted in a compelling video presentation that encapsulated Hindustan Unilever's vision and project requirements",
          image: "",
          works: [
               {
                    type: VFX_CGI,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: FILM_MAKING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.NIFT,
          title: "NIFT : National Institute of Fashion Technology",
          description:
               "At Gravity Films, we had the privilege to collaborate with the prestigious National Institute of Fashion Technology (NIFT), where our expertise shone in editing documentary films and informative reels within the education sector. Our team's proficiency in visual storytelling and post-production techniques resulted in compelling and impactful content that showcased NIFT's excellence and educational initiatives.",
          image: "nnj.png",
          works: [
               {
                    type: FILM_MAKING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.SCREATION_FILMS,
          title: "SCreation Films",
          description:
               "S creation films proudly collaborated with Gravity films in capturing memorable moments at weddings and events. Our partnership in wedding cinematography and event coverage showcased our commitment to delivering exceptional storytelling and high-quality videography services. Together, we created timeless videos that beautifully documented the joyous occasions of our clients' special days.",
          image: "scf.png",
          works: [
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: FILM_MAKING,
                    data: "",
               },
               {
                    type: EDITING,
                    data: "",
               },
               {
                    type: DIRECTING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.INDIEGROW_FUSION,
          title: "Indiegrow Fusion",
          description:
               "At Gravity Films, we collaborated with Indie Grow Fusion to elevate their online presence through website development, app development, graphic design, 3D modeling animation, and software development. Our partnership aimed at providing safety and security in the realm of online presentations, showcasing our expertise in digital solutions and innovative technologies. Together, we created impactful digital experiences that ensured a seamless and secure online environment for our clients and their audiences.",
          image: "ig.png",
          works: [
               {
                    type: WEBSITE_DEVELOPMENT,
                    data: "",
               },
               {
                    type: APP_DEVELOPMENT,
                    data: "",
               },
               {
                    type: GRAPHICS_DESIGN,
                    data: "",
               },
               {
                    type: ANIMATIONS,
                    data: "",
               },
               {
                    type: TECH_SUPPORT,
                    data: "",
               },
               {
                    type: BRAND_BUILDING,
                    data: "",
               },
               {
                    type: VFX_CGI,
                    data: "",
               },
               {
                    type: DIGITAL_MARKETING,
                    data: "",
               },
               {
                    type: CONTENT_WRITING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.COFFEE_CUP_INDIA,
          title: "Coffee Cup India =",
          description:
               "At Gravity Films, we collaborated with Coffee Cup India to produce captivating video ad shoots that brought their brand to life. Our partnership focused on showcasing the uniqueness and quality of Coffee Cup India's products through visually compelling storytelling. Together, we crafted engaging video narratives. ",
          image: "cci.png",
          works: [
               {
                    type: FILM_MAKING,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: EDITING,
                    data: "",
               },
               {
                    type: DIRECTING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.TRI_DRASHYA,
          title: "Tri Drashya ",
          description:
               "At Gravity Films, we have had the privilege of collaborating with Tri Drashya, a renowned magazine and news agency, in content creation. Our expertise includes producing informative video animations, graphic design, video shoots, and recordings that align with Tri Drashya's vision. Through our partnership, we have crafted engaging and impactful visual content that enhances their storytelling and strengthens their online presence, ensuring that their audience stays informed and engaged.",
          image: "3d.png",
          works: [
               {
                    type: ANIMATIONS,
                    data: "",
               },
               {
                    type: GRAPHICS_DESIGN,
                    data: "",
               },
               {
                    type: FILM_MAKING,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: EDITING,
                    data: "",
               },
               {
                    type: DIRECTING,
                    data: "",
               },
               {
                    type: CONTENT_WRITING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.HAZELCOP,
          title: "Hazelcop",
          description:
               "At Gravity Films, we are excited to be part of the launch journey of Hazelcop, a female clothing brand set to make waves worldwide. Our collaboration with Hazelcop includes e-commerce photography, apparel shoots, and clothing catalogue shoots. Through our expertise in visual storytelling and creative direction, we are committed to helping Hazelcop showcase their unique style and brand identity to a global audience. Stay tuned for the captivating visuals we're creating together.",
          image: "hzc.png",
          works: [],
     },
     {
          title: "Myfitness",
          description:
               "At Gravity Films, we had the pleasure of working with 'My Fitness Peanut Butter,' a dynamic brand focused on health and nutrition. Our collaboration involved providing professional photography and videography services to showcase the brand's products in the best light. Through our creative approach and attention to detail.",
          image: "mf.png",
          works: [],
     },
     {
          id: LOGOS_IDS.ARV_REALTY,
          title: "Arv Realty ",
          description:
               "At Gravity Films, we had the pleasure of working with Arv Realty, a dynamic real estate company focused on providing exceptional property solutions. Our collaboration involved providing professional photography and videography services to showcase the company's properties in the best light. Through our creative approach and attention to detail, we delivered a comprehensive real estate commercial video project, including stunning aerial shots, to highlight the unique features and prime locations of Arv Realty's listings.",
          image: "arv.png",
          works: [
               {
                    type: PHOTOGRAPHY,
                    data: "",
               },
               {
                    type: CINEMATOGRAPHY,
                    data: "",
               },
               {
                    type: FILM_MAKING,
                    data: "",
               },
               {
                    type: EDITING,
                    data: "",
               },
               {
                    type: DIRECTING,
                    data: "",
               },
               {
                    type: GRAPHICS_DESIGN,
                    data: "",
               },
               {
                    type: MUSIC_SOUNDS,
                    data: "",
               },
               {
                    type: BRAND_BUILDING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.FOREIGN_ROUTES,
          title: "Foreign Routes",
          description:
               "At Gravity Films, we had the pleasure of working with Foreign Routes Immigration, a dynamic agency specializing in international visa services. Our collaboration involved providing professional brand-building services to enhance their global presence. Through our creative approach and attention to detail, we delivered a comprehensive suite of photography and videography services to effectively showcase the expertise and reliability of Foreign Routes Immigration, ensuring their brand stands out in the competitive visa services industry.",
          image: "fr.png",
          works: [
               {
                    type: GRAPHICS_DESIGN,
                    data: "",
               },

               {
                    type: BRAND_BUILDING,
                    data: "",
               },
               {
                    type: CONTENT_WRITING,
                    data: "",
               },
          ],
     },
     {
          id: LOGOS_IDS.DR_INTERNATIONALS,
          title: "DR Internationals",
          description:
               "At Gravity Films, we collaborated with Dr. International, a leading global food trader. We provided brand-building services, delivering graphics and animation reels to highlight their expertise and reliability, ensuring their brand stands out in the competitive food trading industry.",
          image: "dri.png",
          works: [
               {
                    type: GRAPHICS_DESIGN,
                    data: "",
               },
               {
                    type: BRAND_BUILDING,
                    data: "",
               },
          ],
     },
];

export const servicesToBrands = new Map();

servicesToBrands.set(FILM_MAKING, [
     LOGOS_IDS.NUTS_N_JARS,
     LOGOS_IDS.HINDUSTAN_UNILEVER,
     LOGOS_IDS.NIFT,
     LOGOS_IDS.SCREATION_FILMS,
     LOGOS_IDS.COFFEE_CUP_INDIA,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.TRI_DRASHYA,
]);

servicesToBrands.set(CINEMATOGRAPHY, [
     LOGOS_IDS.HERMOD,
     LOGOS_IDS.NIFT,
     LOGOS_IDS.SCREATION_FILMS,
     LOGOS_IDS.COFFEE_CUP_INDIA,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.TRI_DRASHYA,
     LOGOS_IDS.HINDUSTAN_UNILEVER,
]);

servicesToBrands.set(PHOTOGRAPHY, [
     LOGOS_IDS.HERMOD,
     LOGOS_IDS.NUTS_N_JARS,
     LOGOS_IDS.HINDUSTAN_UNILEVER,
     LOGOS_IDS.SCREATION_FILMS,
     LOGOS_IDS.COFFEE_CUP_INDIA,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.TRI_DRASHYA,
]);

servicesToBrands.set(EDITING, [
     LOGOS_IDS.HERMOD,
     LOGOS_IDS.NUTS_N_JARS,
     LOGOS_IDS.SCREATION_FILMS,
     LOGOS_IDS.COFFEE_CUP_INDIA,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.TRI_DRASHYA,
     LOGOS_IDS.NIFT,
]);

servicesToBrands.set(VFX_CGI, [
     LOGOS_IDS.HINDUSTAN_UNILEVER,
     LOGOS_IDS.INDIEGROW_FUSION,
]);

servicesToBrands.set(DIRECTING, [
     LOGOS_IDS.SCREATION_FILMS,
     LOGOS_IDS.COFFEE_CUP_INDIA,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.TRI_DRASHYA,
]);

servicesToBrands.set(WEBSITE_DEVELOPMENT, [LOGOS_IDS.INDIEGROW_FUSION]);

servicesToBrands.set(APP_DEVELOPMENT, [LOGOS_IDS.INDIEGROW_FUSION]);

servicesToBrands.set(GRAPHICS_DESIGN, [
     LOGOS_IDS.INDIEGROW_FUSION,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.TRI_DRASHYA,
     LOGOS_IDS.FOREIGN_ROUTES,
     LOGOS_IDS.DR_INTERNATIONALS,
]);

servicesToBrands.set(ANIMATIONS, [
     LOGOS_IDS.INDIEGROW_FUSION,
     LOGOS_IDS.TRI_DRASHYA,
]);

servicesToBrands.set(TECH_SUPPORT, [LOGOS_IDS.INDIEGROW_FUSION]);

servicesToBrands.set(BRAND_BUILDING, [
     LOGOS_IDS.INDIEGROW_FUSION,
     LOGOS_IDS.ARV_REALTY,
     LOGOS_IDS.FOREIGN_ROUTES,
     LOGOS_IDS.DR_INTERNATIONALS,
]);

servicesToBrands.set(DIGITAL_MARKETING, [LOGOS_IDS.INDIEGROW_FUSION]);

servicesToBrands.set(CONTENT_WRITING, [
     LOGOS_IDS.INDIEGROW_FUSION,
     LOGOS_IDS.TRI_DRASHYA,
     LOGOS_IDS.FOREIGN_ROUTES,
]);

servicesToBrands.set(MUSIC_SOUNDS, [LOGOS_IDS.ARV_REALTY]);

export const portfolioData = new Map();
portfolioData.set(LOGOS_IDS.HERMOD, [
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/a1.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/a2.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/a3.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/a4.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/a5.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b1.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b2.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b3.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b4.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b5.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b6.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b7.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b8.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b9.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b10.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b11.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b12.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/b13.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c1.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c1.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c2.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c2.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c3.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c3.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c4.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c4.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c5.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c5.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c6.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c7.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c7.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c8.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c8.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c9.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c9.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c10.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c10.png",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c11.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c12.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c13.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c14.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c15.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c16.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c17.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c18.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c19.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c20.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hermod/c21.jpg",
     },
     {
          type: [CINEMATOGRAPHY, EDITING],
          data: "/brands/hermod/d1.mp4",
     },
]);
portfolioData.set(LOGOS_IDS.NUTS_N_JARS, [
     {
          type: [CINEMATOGRAPHY, EDITING, VISUAL_ART],
          data: "/brands/nuts-n-jar/a1.mp4",
     },
     {
          type: [CINEMATOGRAPHY, EDITING],
          data: "/brands/nuts-n-jar/a2.mp4",
     },
]);
portfolioData.set(LOGOS_IDS.HINDUSTAN_UNILEVER, [
     {
          type: [EDITING, VFX_CGI],
          data: "/brands/hul/a1.mp4",
     },
     {
          type: [CINEMATOGRAPHY],
          data: "/brands/hul/b1.mp4",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hul/c0.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hul/c1.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hul/c2.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hul/c3.jpg",
     },
     {
          type: [PHOTOGRAPHY],
          data: "/brands/hul/c4.jpg",
     },
]);
portfolioData.set(LOGOS_IDS.NIFT, [
     {
          type: [EDITING],
          data: "/brands/nift/a1.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a2.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a3.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a4.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a5.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a6.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a7.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a8.mp4",
     },
     {
          type: [EDITING],
          data: "/brands/nift/a9.mp4",
     },
]);
portfolioData.set(LOGOS_IDS.SCREATION_FILMS, [
     {
          type: [CINEMATOGRAPHY, EDITING],
          data: "/brands/screation_films/b1.mp4",
     },
]);
portfolioData.set(LOGOS_IDS.INDIEGROW_FUSION, []);
portfolioData.set(LOGOS_IDS.COFFEE_CUP_INDIA, []);
portfolioData.set(LOGOS_IDS.TRI_DRASHYA, []);
portfolioData.set(LOGOS_IDS.HAZELCOP, []);
portfolioData.set(LOGOS_IDS.MYFITNESS, []);
portfolioData.set(LOGOS_IDS.ARV_REALTY, [
     {
          type: [CINEMATOGRAPHY],
          data: "/brands/arv/b1.mp4",
     },
]);
portfolioData.set(LOGOS_IDS.FOREIGN_ROUTES, []);
portfolioData.set(LOGOS_IDS.DR_INTERNATIONALS, []);
