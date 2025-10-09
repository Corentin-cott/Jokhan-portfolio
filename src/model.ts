// Définitions de models
export interface Film {
    titre: string;
    videoUrl: string;
    thumbnailUrl: string;
    dateDeSortie: Date;
}

// Mock temporaire de films
// TODO : Remplacer par une bdd
export const displayedFilms: Film[] = [
    {
        titre: "DRACULA",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/180qpbv_1YzHYZERscoakgUDTc77UVfVj/view?usp=sharing",
        dateDeSortie: new Date("2025-10-31"),
    },
    {
        titre: "SUPERBOY et KRYPTO",
        thumbnailUrl: "https://citygem.app/wp-content/uploads/2024/08/placeholder-1-1.png",
        videoUrl: "https://drive.google.com/file/d/1VtlSsidkqM0eYbzhIStSAGE1rXkmYC2I/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "JURRASSIC BAD CUITE",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1vn6HcSV36VrUOm9tfauI047PBZb3WKMQ/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "JOKER FOLIE À DEUX",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1upnx9Q5-BIJw7gpAVuh0NTrP_GutJCef/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "Dragon ball Z : Le pouvoir maudit",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1FGiiWx7pDoGsQ2WvQGwsuQfqUL4qIeBQ/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "MAD MAX : Les origines de l'apocalypse",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1kY2UkHVUMzFL_fzvXEDUF7DDx_WKPxYd/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "DEADPOOL & WOLVERINE : Balade dans le multivers PARTIE 2",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1BObIUADrcpjiJfymw9yTgnt1dmeM7lPm/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "DEADPOOL & WOLVERINE : Balade dans le multivers",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1WuV2hyPY38y8SwrgifyVTOwFOBxWIPUz/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "HUNT : La forêt maudite",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/19ZtmQmIQrA92SrVhCihjXw6TsKUQq50d/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "CRIMINAL SANITY 3 : THE KILLER",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1hiSQeja1z9f0ujlOng3BTP4P5niQEm0E/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "CRIMINAL SANITY 2 : JOKER vs BATMAN",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1FIcHfQpyOc4BTfDceR26_B3PvKT4tbBN/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
    {
        titre: "CRIMINAL SANITY : JOKER vs HARLEY",
        thumbnailUrl: "",
        videoUrl: "https://drive.google.com/file/d/1hLe3WfmFBNP2ZSEsW3MRDRgsL4IxUW5e/view?usp=sharing",
        dateDeSortie: new Date("2025-01-01"),
    },
];
