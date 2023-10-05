/*-------------------------------------
   Fichier: connexion.ts
   auteur: Alain
   Date: 2023-08-31 
---------------------------------------*/

import { Component, Output, EventEmitter } from '@angular/core';
import { Developpeur } from './../modele/developpeur';
import { tabDev, tabTac } from './../donneesBidon';
import { tr } from './../util';
import { JvService } from '../jv.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
   devCandidat= new Developpeur();
   devConnecte = new Developpeur();
   visible=true;

   @Output() connexionReussie = new EventEmitter<Developpeur>();

   //----------------------------------------
   //
   //----------------------------------------
   constructor(private jvSrv:JvService )
   {

   }

   //----------------------------------------
   //
   //----------------------------------------
   validerConnexion()
   {
     let i;
     
    this.triche();
    this.jvSrv.connexion(this.devCandidat.Matricule, this.devCandidat.MotDePasse).subscribe(
      unDev =>
      {
         if (unDev.Nom == undefined)
           tr("Échec de connexion...", true);
         else
         {
           tr("Connexion de " + unDev.Nom, true);
           this.devConnecte = unDev;
           this.visible = false;
           this.connexionReussie.emit(this.devConnecte);
         }
      }
    );
    



/*    for(i=0; i<tabDev.length; i++)
     {
        //tr("undev : " + tabDev[i].Nom) ;
        if (tabDev[i].Matricule == this.devCandidat.Matricule)
        {
          if (tabDev[i].MotDePasse == this.devCandidat.MotDePasse)
          {
             //tr("Connexion réussie", true);
             this.visible=false;
             // Faudrait envoyer un msg à ListeTache pour qu'elle s'affiche
             this.connexionReussie.emit(tabDev[i]);
             break;
          }
        }
     }
     if (i == tabDev.length)
     {
        tr("Erreur de connexion", true);
     }

     */
   }

   //----------------------------------------
   //
   //----------------------------------------
   triche()
   {
       if (this.devCandidat.Matricule.length == 0) 
       {
          this.devCandidat.Matricule = '1111111';
          this.devCandidat.MotDePasse = '11';
       }
   }


   //----------------------------------------
   //
   //----------------------------------------
   onQuitterLstTac(dev:Developpeur)
   {
      this.visible=true;
      this.devConnecte = new Developpeur();
      this.devCandidat = new Developpeur();
     
   }

}
