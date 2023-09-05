import { Component } from '@angular/core';
import { tabTac } from './../donneesBidon';
import { Developpeur } from './../modele/developpeur';
import { tr } from './../util';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {
  visible=false;

  tabTaches=tabTac;

  onConnexionReussie(dev:Developpeur )
  {
    tr("Connexion réussie")
    this.visible = true;
  }


}
