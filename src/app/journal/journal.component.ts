/*-------------------------------------
   Fichier: journal.ts
   auteur: Alain
   Date: 2023-09-12 
---------------------------------------*/
import { Component } from '@angular/core';
import { Tache } from '../modele/tache';
import { tr,formatDepuis } from '../util';
import { Developpeur } from '../modele/developpeur';
import { SessionTravail } from '../modele/sessionTravail';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  visible=false;
  developpeur=new Developpeur();
  statutJournal="";
  tacheCourante=new Tache();
  sessionTravailCourante=new SessionTravail();
  depuis='';

  //--------------------------------------
  //
  //--------------------------------------
  onDemarrerSessionTravail(tac:Tache)
  {
    this.visible=true;
    this.developpeur.Etat = 'actif';
    this.depuis = formatDepuis(this.sessionTravailCourante.Debut)
    
    this.sessionTravailCourante.IdTache = tac.Id;
    this.sessionTravailCourante.TacheNumero = tac.Numero;
    this.statutJournal="Journal" ;
  }

  //--------------------------------------
  //
  //--------------------------------------
  saisirCommentaire()
  {
    tr("sai com", true);
  }
  
  //--------------------------------------
  //
  //--------------------------------------
  arreterSessionTravail()
  {
    tr("arr sess trav", true);

    this.sessionTravailCourante.Fin = new Date();
    this.depuis = formatDepuis(this.sessionTravailCourante.Fin);

    this.developpeur.Etat = 'inactif';
  }

  //--------------------------------------
  //
  //--------------------------------------
  lectureTaches()
  {
    tr("lec tac", true);
  }

  //--------------------------------------
  //
  //--------------------------------------
  changerTache()
  {
    tr("chn tac", true);
  }


  //--------------------------------------
  //
  //--------------------------------------
  ouvrirStatistiques()
  {
    tr("ouv sta", true);
  }

}
