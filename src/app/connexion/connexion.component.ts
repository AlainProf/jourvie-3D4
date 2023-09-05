import { Component, Output, EventEmitter } from '@angular/core';
import { Developpeur } from './../modele/developpeur';
import { tabDev, tabTac } from './../donneesBidon';
import { tr } from './../util';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
   devCandidat= new Developpeur();
   visible=true;

   @Output() connexionReussie = new EventEmitter<Developpeur>();

   constructor()
   {

   }

   validerConnexion()
   {
     let i;
     
    this.triche();

     for(i=0; i<tabDev.length; i++)
     {
        //tr("undev : " + tabDev[i].Nom) ;
        if (tabDev[i].Matricule == this.devCandidat.Matricule)
        {
          if (tabDev[i].MotDePasse == this.devCandidat.MotDePasse)
          {
             tr("Connexion réussie", true);
             this.visible=false;
             // Faudrait envoyer un msg à ListeTache pour qu'elle s'affiche
             this.connexionReussie.emit(this.devCandidat);
             break;
          }
        }
     }
     if (i == tabDev.length)
     {
        tr("Erreur de connexion", true);
     }
   }

   triche()
   {
       if (this.devCandidat.Matricule.length == 0) 
       {
          this.devCandidat.Matricule = '1111111';
          this.devCandidat.MotDePasse = '11';
       }
   }

}
