/*-------------------------------------
   Fichier: fait.ts
   auteur: Alain
   Date: 2023-08-31 
---------------------------------------*/
import { tr } from "../util";
import { Commentaire } from "./commentaire";
import { SessionTravail } from "./sessionTravail";

export class Fait{
    IdTache=0;
    TacheNumero='';
    Date="";
    Heure="";
    Type="";
    Contenu="";

    constructor(st:SessionTravail, traiteDebut=true, comm:Commentaire= new Commentaire())
    {
       this.IdTache= st.IdTache;
       this.TacheNumero = st.TacheNumero;
       
       let dateSplit;
       let dateHoro;

       tr("Début =" + st.Debut, true);

       // Traitement des Faits de session
       if (comm.Horodateur === undefined)
       {
         if (traiteDebut)
         {
           this.Type = "debut";
           dateHoro = st.Debut;
           
         }
       
         else 
         {
           this.Type = "fin";
           dateHoro = st.Fin;
         }
       }
       else
       {
           // Traitement des Faits commentaires
           this.Contenu = comm.Contenu;
           dateHoro = comm.Horodateur;
           this.IdTache = st.IdTache;
           this.Type = "commentaire";
       }
       

       dateSplit  = dateHoro.split(' ');
       this.Date = dateSplit[0];
       this.Heure = dateSplit[1];
  }



}