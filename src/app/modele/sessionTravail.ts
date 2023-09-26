/*-------------------------------------
   Fichier: sessionTravail.ts
   auteur: Alain
   Date: 2023-08-31 
---------------------------------------*/

export class SessionTravail{
    Id=0;
    IdTache=0;
    TacheNumero='';
    IdDev=0;
    Debut="";
    Fin="";
    Duree=0;
    NbComments=0;

    constructor(idTac=0, numTac='', idDev=0)
    {
       this.IdTache= idTac;
       this.IdDev = idDev;
       this.TacheNumero = numTac;
    }



}