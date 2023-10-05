import { Injectable } from '@angular/core';
import { tr, urlServeur } from './util';
import { HttpClient } from '@angular/common/http';
import { Developpeur } from './modele/developpeur';
import { Tache } from './modele/tache';

@Injectable({
  providedIn: 'root'
})
export class JvService {

  constructor(private http:HttpClient) { 

  }


  connexion(mat:string, mdp:string)
  {
    // Appel au serveur
    const url = urlServeur + "connexion.php" + "?mat=" + mat + "&mdp=" + mdp;
    tr(url);

    return this.http.get<Developpeur>(url);
  }

  recupTaches(idProj:number)
  {
    const url = urlServeur + "recupTaches.php?ipProj=" + idProj;
    tr(url);

    return this.http.get<Tache[]>(url);



  }
}
