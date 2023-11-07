//------------------------------------
// Créateur Alaibn Martel
// Date : 2023-10-24
// jv.service.ts
//------------------------------------

import { Injectable } from '@angular/core';
import { tr, urlServeur } from './util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Developpeur } from './modele/developpeur';
import { Tache } from './modele/tache';
import { SessionTravail } from './modele/sessionTravail';
import { Commentaire } from './modele/commentaire';

@Injectable({
  providedIn: 'root'
})
export class JvService {

  //--------------------------------------
  //
  //--------------------------------------
  constructor(private http: HttpClient) {

  }


  //--------------------------------------
  //
  //--------------------------------------
  connexion(mat: string, mdp: string) {
    // Appel au serveur
    const url = urlServeur + "connexion.php";
    tr(url);

    const params = new HttpParams
    (
      {
        fromObject:
        {
          mat: mat,
          mdp: mdp,
        }
      });


    return this.http.post<Developpeur>(url, params);
  }

  //--------------------------------------
  //
  //--------------------------------------
  getSessionsTravail(idDev: number) {
    const url = urlServeur + "getSessionsTravail.php" + "?idDev=" + idDev;
    tr(url);

    return this.http.get<SessionTravail[]>(url);
  }

  
  //--------------------------------------
  //
  //--------------------------------------
  postCommentaire(comm: Commentaire) {
    const url = urlServeur + "postCommentaire.php";
    tr(url);

    const params = new HttpParams
      (
        {
          fromObject:
          {
            idSession: comm.IdSession,
            idDev: comm.IdDev,
            contenu: comm.Contenu
          }
        });

    return this.http.post<number>(url, params);

  }

  //--------------------------------------
  //
  //--------------------------------------
  postSessionTravail(sessTrav: SessionTravail) {
    const url = urlServeur + "postSessionTravail.php";
    tr(url);

    const params = new HttpParams
      (
        {
          fromObject:
          {
            idTache: sessTrav.IdTache,
            idDev: sessTrav.IdDev
          }
        });

    return this.http.post<SessionTravail>(url, params);

  }

  //--------------------------------------
  //
  //--------------------------------------
  putSessionTravail(idSessTrav: number) {
    const url = urlServeur + "putSessionTravail.php";
    tr(url);

    const params = new HttpParams({fromObject:
    {
      idSessTrav: idSessTrav
    }})

    return this.http.post<string>(url, params);
  }

  //--------------------------------------
  //
  //--------------------------------------
  recupTaches(idProj: number) {
    const url = urlServeur + "recupTaches.php?idProj=" + idProj;
    tr(url);

    return this.http.get<Tache[]>(url);
  }


}
