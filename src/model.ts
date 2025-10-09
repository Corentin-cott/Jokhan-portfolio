// Définitions de models
export interface Film {
    id: number;
    titre: string;
    description: string;
    videoUrl: string;
    afficheUrl: string;
    dateDeSortie: Date;
}

// Mock temporaire de films
// TODO : Remplacer par une bdd
export const displayedFilms: Film[] = [
    {
        id: 1,
        titre: "DRACULA - SORTIE LE 30 OCTOBRE 2025",
        description: "Ce fan film met en scène Van Helsing, chasseur de monstres, qui raconte l’histoire de son ami parti à la recherche de son frère jumeau maudit… Dracula. Survivront-ils aux crocs acérés du vampire ? Entièrement tourné en noir et blanc, le film intègre également des scènes en caméra infrarouge, renforçant l’immersion dans une atmosphère gothique.\n\nLes thèmes centraux explorés sont l’amitié, les liens fraternels et la mutation du corps.",
        afficheUrl: "https://drive.google.com/file/d/1KLPL2LVQPB6kmo2vdrn9OfA764kqtpNL/view?usp=sharing",
        videoUrl: "https://drive.google.com/file/d/180qpbv_1YzHYZERscoakgUDTc77UVfVj/view?usp=sharing",
        dateDeSortie: new Date("2025-10-31"),
    },
    {
        id: 2,
        titre: "SUPERBOY et KRYPTO",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1VtlSsidkqM0eYbzhIStSAGE1rXkmYC2I/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 3,
        titre: "JURRASSIC BAD CUITE",
        description: "Ce film raconte l’histoire de deux amis travaillant au parc de Jurassic World. Un soir, après une semaine de travail, ils décident de faire une fête beaucoup trop alcoolisée et se réveillent dans l’enclos du T-Rex et des raptors. Encore ivres et loin d’être très futés, réussiront-ils à survivre aux griffes des dinosaures ?\n\nInspiré de la trilogie Very Bad Trip, mais transposé dans l’univers de Jurassic Park, ce film offre un résultat uniquement délirant.",
        afficheUrl: "https://drive.google.com/file/d/1z4Hm7Aa0I-dgtuMrmwkZhxo-YsU-YLX4/view?usp=sharing",
        videoUrl: "https://drive.google.com/file/d/1vn6HcSV36VrUOm9tfauI047PBZb3WKMQ/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 4,
        titre: "JOKER FOLIE À DEUX",
        description: "Ce film est une reprise du film \"JOKER FOLIE À DEUX\", mon plus grand projet et mon meilleur travail d’acteur. Grâce à l’accord du maire, j’ai pu projeter le film au cinéma de Saint-Genis-de-Saintonge, le 17 mai à 10h. J’ai ainsi réalisé le rêve de ma vie.\n\nSCÉNARIO : Deux ans après le premier volet, Arthur Fleck est interné à Arkham. Déchiré entre ses deux personnalités, il rencontre Harley, une fan obsédée. Leur amour les entraîne dans une folie partagée, faite de crimes et de musique. Que vous ayez aimé ou non le film original, vous découvrirez une nouvelle vision.",
        afficheUrl: "https://drive.google.com/file/d/1U2_-ZYT8zCcIhzu3E9MGRcd2dyQXwZaU/view?usp=sharing",
        videoUrl: "https://drive.google.com/file/d/1upnx9Q5-BIJw7gpAVuh0NTrP_GutJCef/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 5,
        titre: "Dragon ball Z : Le pouvoir maudit",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1FGiiWx7pDoGsQ2WvQGwsuQfqUL4qIeBQ/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 6,
        titre: "MAD MAX : Les origines de l'apocalypse",
        description: "Ce film explore l’origine de l’univers de Mad Max, et plus particulièrement celle du grand méchant de la saga, Immortan Joe. On suit le personnage encore jeune, marqué par une perte de mémoire, qui tente de trouver des réponses à ses questions tout en retrouvant ses amis. Dans un monde où règne le chaos, leur amitié pourra-t-elle survivre ?\n\nCe film apocalyptique aborde l’évolution de l’amitié dans un contexte extrême.",
        afficheUrl: "https://drive.google.com/file/d/12LP_U3Py501O6Wd6iZ2fUEd8XM0Vsk-l/view?usp=sharing",
        videoUrl: "https://drive.google.com/file/d/1kY2UkHVUMzFL_fzvXEDUF7DDx_WKPxYd/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 7,
        titre: "DEADPOOL & WOLVERINE : Balade dans le multivers PARTIE 2",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1BObIUADrcpjiJfymw9yTgnt1dmeM7lPm/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 8,
        titre: "DEADPOOL & WOLVERINE : Balade dans le multivers",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1WuV2hyPY38y8SwrgifyVTOwFOBxWIPUz/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 9,
        titre: "HUNT : La forêt maudite",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/19ZtmQmIQrA92SrVhCihjXw6TsKUQq50d/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 10,
        titre: "CRIMINAL SANITY 3 : THE KILLER",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1hiSQeja1z9f0ujlOng3BTP4P5niQEm0E/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 11,
        titre: "CRIMINAL SANITY 2 : JOKER vs BATMAN",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1FIcHfQpyOc4BTfDceR26_B3PvKT4tbBN/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 12,
        titre: "CRIMINAL SANITY : JOKER vs HARLEY",
        description: "",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1hLe3WfmFBNP2ZSEsW3MRDRgsL4IxUW5e/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
];

// Pour les avis
export const displayedReviewVideo: Film[] = [
    {
        id: 1,
        titre: "DISCOUR DE PRESENTATION JOKER FOLIE A DEUX",
        description: "Petit discours que j’ai prononcé avant la diffusion de mon fan film JOKER FOLIE À DEUX au cinéma de Saint-Genis-de-Saintonge, le 17 mai.\n\nCe discours ne porte pas uniquement sur le film, mai partage également mes valeurs et les messages que je souhaite transmettre à travers mes films.",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/13gEYvIjMLuZAvR8KQhTokIKGo30BRZjz/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 3,
        titre: "CEREMONIE REMISE DE PRIX JOKER FOLIE A DEUX",
        description: "Vidéo de la remise des prix surprise qui a eu lieu juste après la diffusion du film. Lors de cette cérémonie, moi et mes proches ayant participé au court-métrage avons reçu un mini César, symbole très important pour moi.",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/1kGIHgKAM_aoJRaSCiZaQr3Ipx2eky7Q_/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        id: 2,
        titre: "AVIS DU PUBLIQUE JOKER FOLIE A DEUX",
        description: "Compilation des avis reçus suite à la diffusion de mon film au cinéma. Ces avis ont été recueillis de manière solitaire dans une salle vide. Ils reflètent mes compétences en tant qu’acteur, mais aussi des retours sur ma manière de réaliser mes films et de guider les personnes qui m’ont aidé dans leur création.",
        afficheUrl: "",
        videoUrl: "https://drive.google.com/file/d/14dAMJ6W6Wj7WRW7mZN9OFv5gYM_klxvU/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    }
]
