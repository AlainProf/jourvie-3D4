/*-------------------------------------
   Fichier: journal.ts
   auteur: Alain
   Date: 2023-09-12 
---------------------------------------*/
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() developpeurConnecte=new Developpeur();
  @Output() ouvrirTache = new EventEmitter<Developpeur>();
  statutJournal="";
  tacheCourante=new Tache();
  sessionTravailCourante=new SessionTravail();
  depuis='';
  tabSessionsTravail:SessionTravail[] = new Array();

  @Output() ouvrirTacheLecture=new EventEmitter<Developpeur>();

  //--------------------------------------
  //
  //--------------------------------------
  onDemarrerSessionTravail(tac:Tache)
  {
    this.visible=true;
    this.developpeurConnecte.Etat = 'actif';
    this.depuis = formatDepuis(this.sessionTravailCourante.Debut)
    
    this.sessionTravailCourante.IdTache = tac.Id;
    this.sessionTravailCourante.TacheNumero = tac.Numero;
    this.statutJournal="Journal";

    this.tabSessionsTravail.push(this.sessionTravailCourante);
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
    this.sessionTravailCourante.Fin = new Date();
    this.depuis = formatDepuis(this.sessionTravailCourante.Fin);
    this.developpeurConnecte.Etat = 'inactif';
  }

  //--------------------------------------
  //
  //--------------------------------------
  lectureTaches()
  {
    this.visible=false;
    this.ouvrirTacheLecture.emit(this.developpeurConnecte);
  }

  //--------------------------------------
  //
  //--------------------------------------
  changerTache()
  {
    this.visible=false;
    this.developpeurConnecte.Etat='inactif';
    this.ouvrirTache.emit(this.developpeurConnecte);


  }


  //--------------------------------------
  //
  //--------------------------------------
  ouvrirStatistiques()
  {
    tr("ouv sta", true);
  }

  //--------------------------------------
  //
  //--------------------------------------
  onQuitterLstTac(dev:Developpeur)
  {
     this.visible = true;
     this.developpeurConnecte = dev;

  }

}
