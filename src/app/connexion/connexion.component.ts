import { Component } from '@angular/core';
import { Developpeur } from './../modele/developpeur';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
   devCandidat= new Developpeur();

   constructor()
   {

   }

   validerConnexion()
   {
     alert("Allo " + this.devCandidat.Matricule + " avec le m de p:" + this.devCandidat.MotDePasse);
   }
}
