import { Developpeur } from './modele/developpeur';
import { Tache } from './modele/tache';

export const tabDev:Developpeur[] = [
    {
        Id : 1,
        Nom : "Agathe",
        Matricule:'1111111',
        MotDePasse: "11",
        IdProjet:1,
        NomProjet:'UltraSecret'
    },

    {
        Id : 2,
        Nom : "Benoit",
        Matricule:'2222222',
        MotDePasse: "11",
        IdProjet:1,
        NomProjet:'UltraSecret'
    },
    {
        Id : 3,
        Nom : "Carole",
        Matricule:'3333333',
        MotDePasse: "11",
        IdProjet:3,
        NomProjet:'Sphinx-ter'
    }

]

export const tabTac:Tache[] = [
    {
        Id : 1,
        Numero : "T1",
        Titre:'Préparer BD',
        Description: "Les douze tables nécessaires doivent être déployées",
        IdProjet:1,
        NomProjet:'UltraSecret'
    },
    {
        Id : 2,
        Numero : "T1.1",
        Titre:'Classes métier',
        Description: "Définir les 23 classes métiers de l'app",
        IdProjet:1,
        NomProjet:'UltraSecret'
    },
    {
        Id : 3,
        Numero : "T2",
        Titre:'Module connexion',
        Description: "Dévelpper et tester le module de connexion",
        IdProjet:1,
        NomProjet:'UltraSecret'
    },
    {
        Id : 4,
        Numero : "RU1",
        Titre:'Esthétique',
        Description: "Rendre l'app vraiment belle et retroaction cohérente",
        IdProjet:2,
        NomProjet:'Sphinx'
    }
]
