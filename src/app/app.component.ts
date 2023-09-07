/*-------------------------------------
   Fichier: app.ts
   auteur: Alain
   Date: 2023-08-31 
---------------------------------------*/
import { Component } from '@angular/core';
import { Developpeur } from './modele/developpeur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jourvie-ng';
  titre = 'Jourvie-3D4';


  onConnexionReussie(dev:Developpeur)
  {
    this.titre = "Jourvie-3D4 " + dev.Nom  + ", projet: " + dev.NomProjet;

  }

  onQuitterLstTac(dev:Developpeur)
  {
    this.titre = "Jourvie-3D4";
  }
}
