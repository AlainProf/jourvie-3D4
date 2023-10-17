import { Injectable } from '@angular/core';
import { tr, urlServeur } from './util';
import { HttpClient } from '@angular/common/http';
import { Developpeur } from './modele/developpeur';
import { Tache } from './modele/tache';
import { SessionTravail } from './modele/sessionTravail';

@Injectable({
  providedIn: 'root'
})
export class JvService {

   //--------------------------------------
  //
  //--------------------------------------
  constructor(private http:HttpClient) { 

  }


   //--------------------------------------
  //
  //--------------------------------------
  connexion(mat:string, mdp:string)
  {
    // Appel au serveur
    const url = urlServeur + "connexion.php" + "?mat=" + mat + "&mdp=" + mdp;
    tr(url);

    return this.http.get<Developpeur>(url);
  }

   //--------------------------------------
  //
  //--------------------------------------
  recupTaches(idProj:number)
  {
    const url = urlServeur + "recupTaches.php?idProj=" + idProj;
    tr(url);

    return this.http.get<Tache[]>(url);
 }

   //--------------------------------------
  //
  //--------------------------------------
  postSessionTravail(sessTrav:SessionTravail)
  {
    const url = urlServeur + "postSessionTravail.php?idTache=" + sessTrav.IdTache + "&idDev=" + sessTrav.IdDev;
    tr(url);

    return this.http.get<SessionTravail>(url);

  }

}
