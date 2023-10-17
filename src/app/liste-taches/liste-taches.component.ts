/*-------------------------------------
   Fichier: connexion.ts
   auteur: Alain
   Date: 2023-08-31 
---------------------------------------*/
import { Component, EventEmitter, Output } from '@angular/core';
import { Developpeur } from './../modele/developpeur';
import { tr } from './../util';
import { Tache } from '../modele/tache';
import { JvService } from '../jv.service';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {
  visible=false;
  titre="Choisissez votre prochaine tâche";
  couleurEtat='inactif';
  dev = new Developpeur();
  lectureSeule=false;

  @Output() quitterLstTac = new EventEmitter<Developpeur>();
  @Output() demarrerSession = new EventEmitter<Tache>();

  tabTaches=new Array();



  //---------------------------------------
  //
  //---------------------------------------
  constructor(private jvSrv:JvService)
  {

  }

  //---------------------------------------
  //
  //---------------------------------------
  onConnexionReussie(dev:Developpeur )
  {
    tr("Connexion réussie")
    this.visible = true;
    this.dev = dev;
    this.couleurEtat = this.dev.Etat;
    this.chargementDeLaListeDesTaches();
  }
  //---------------------------------------
  //
  //---------------------------------------
  ouvrirEnLecture(dev:Developpeur)
  {
    this.visible = true;
    this.dev = dev;
    this.lectureSeule=true;
    this.titre="Tâches du projet:"
    this.couleurEtat = this.dev.Etat;
    this.chargementDeLaListeDesTaches();
  }

  //---------------------------------------
  //
  //---------------------------------------
  onOuvrir(dev:Developpeur)
  {
    this.visible = true;
    this.dev = dev;
    this.lectureSeule=false;
    this.titre="Choisissez votre prochaine tâche"
    this.couleurEtat = this.dev.Etat;
    this.chargementDeLaListeDesTaches();
  }


  //---------------------------------------
  //
  //---------------------------------------
  chargementDeLaListeDesTaches()
  {    
    this.jvSrv.recupTaches(this.dev.IdProjet).subscribe(
      tabTac =>{
        tr("on a recuperé " + tabTac.length + " tâches");
        this.tabTaches = tabTac;
        if (this.tabTaches.length == 0)
        {
          this.titre="aucune tâche n'est définie pour ce projet";
        }
      }
    );
  }
  //---------------------------------------
  //
  //---------------------------------------
  demarrerSessionTravail(tache:Tache)
  {
    //tr("Session de travail sur la tâche " + tache.Numero, true);
    this.visible = false;
    this.demarrerSession.emit(tache);
  }

  //---------------------------------------
  //
  //---------------------------------------
  gestionTaches()
  {
    tr("crud tac", true);
  }

  //---------------------------------------
  //
  //---------------------------------------
  ouvrirStats()
  {
    tr("stats", true);
  }

  //---------------------------------------
  //
  //---------------------------------------
  retournerAuJournal()
  {
    //tr("quitter", true);
    this.visible = false;
    this.quitterLstTac.emit(this.dev);
  }



}


