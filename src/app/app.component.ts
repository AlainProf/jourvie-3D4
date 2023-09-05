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
    this.titre += dev.Nom  + " projet: " + dev.NomProjet;

  }
}
