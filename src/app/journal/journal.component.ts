/*-------------------------------------
   Fichier: journal.ts
   auteur: Alain
   Date: 2023-09-12 
---------------------------------------*/
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Tache } from '../modele/tache';
import { tr,formatDate } from '../util';
import { Developpeur } from '../modele/developpeur';
import { SessionTravail } from '../modele/sessionTravail';
import { Fait } from '../modele/fait';
import { Commentaire } from '../modele/commentaire';
import { JvService } from '../jv.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit{

  @Input() developpeurConnecte=new Developpeur();
  @Output() ouvrirTache = new EventEmitter<Developpeur>();
  @Output() ouvrirTacheLecture=new EventEmitter<Developpeur>();

  visible=false;
  formCommentaireVisible=false;
  btnCommentaireVisible=false;
  btnLectureTacheVisible=false;
  btnArreterVisible=false;
  btnChangerTache=false;

  statutJournal="";
  tacheCourante=new Tache();
  sessionTravailCourante=new SessionTravail();
  tabSessionsTravail:SessionTravail[] = new Array();
  commentaire=new Commentaire();
  tabCommentaires:Commentaire[] = new Array();
  depuis='';
  
  tabFaits:Fait[] = new Array();

  constructor(public jvSrv:JvService)
  {

  }

  ngOnInit(){
  }

  //--------------------------------------
  //
  //--------------------------------------
  onDemarrerSessionTravail(tac:Tache)
  {
    this.visible=true;
    this.btnCommentaireVisible=true;
    this.btnLectureTacheVisible=true;
    this.btnArreterVisible=true;
    this.btnChangerTache=true;
  

    this.developpeurConnecte.Etat = 'actif';
    this.statutJournal="Journal";
    
    this.sessionTravailCourante = new SessionTravail();
    this.sessionTravailCourante.IdTache = tac.Id;
    this.sessionTravailCourante.IdDev = this.developpeurConnecte.Id;

    this.jvSrv.postSessionTravail(this.sessionTravailCourante).subscribe(
      sessTrav => {
        //tr("trace 1 néo sess trav" + sessTrav.Debut);
        this.sessionTravailCourante = sessTrav;
        this.tabSessionsTravail.push(this.sessionTravailCourante);
        this.depuis = this.sessionTravailCourante.Debut;
        //tr("depuis" + this.depuis, true);
        this.sessionTravailCourante.TacheNumero = tac.Numero;
        //tr("trace 2");
        this.rafraichirJournal();
      }
    );

  }

  //--------------------------------------
  //
  //--------------------------------------
  saisirCommentaire()
  {
    
    this.formCommentaireVisible = true;

    this.btnCommentaireVisible=false;
    this.btnLectureTacheVisible=true;
    this.btnArreterVisible=false;
    this.btnChangerTache=false;

  

  }

  //--------------------------------------
  //
  //--------------------------------------
  annulerCommentaire()
  {
    this.formCommentaireVisible = false;

    this.btnCommentaireVisible=true;
    this.btnLectureTacheVisible=true;
    this.btnArreterVisible=true;
    this.btnChangerTache=true;
    
  }
  
  //--------------------------------------
  //
  //--------------------------------------
  arreterSessionTravail()
  {
    if (this.developpeurConnecte.Etat == 'actif')
    {     
       this.jvSrv.putSessionTravail(this.sessionTravailCourante.Id).subscribe(
         dateFin => 
         {
            if (dateFin.length == 19)
            {
               this.depuis = dateFin;
               this.rafraichirJournal();
            }
            else
              tr("Erreur 130 ", true)
         }
       )
    }
    
    this.developpeurConnecte.Etat = 'inactif';

    this.btnCommentaireVisible=false;
    this.btnLectureTacheVisible=false;
    this.btnArreterVisible=false;
    this.btnChangerTache=true;
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

    if (this.sessionTravailCourante.Fin == null)
    {
       this.arreterSessionTravail();
    }

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

     if (this.developpeurConnecte.Etat == "inactif")
     {
      this.btnCommentaireVisible=false;
      this.btnLectureTacheVisible=false;
      this.btnArreterVisible=false;
      }
     else
     {
      this.btnCommentaireVisible=true;
      this.btnLectureTacheVisible=true;
      this.btnArreterVisible=true;
     }
     this.btnChangerTache=true;
     this.rafraichirJournal();
  }

  //--------------------------------------
  //
  //--------------------------------------
  formatDate(d:Date)
  {
    return formatDate(d);
  }

  //--------------------------------------
  //
  //--------------------------------------
  rafraichirJournal()
  {
     this.jvSrv.getSessionsTravail(this.developpeurConnecte.Id).subscribe(
       tabSessTrav => {
         if (tabSessTrav.length != 9)
         {
            if (this.developpeurConnecte.Etat == 'actif')    
            {
               this.sessionTravailCourante = tabSessTrav[0];
               this.depuis = this.sessionTravailCourante.Debut;
            }
            else
            {
              this.depuis = tabSessTrav[0].Fin;
            }
          
          
             //tr("tab des sess trav est défini:" + tabSessTrav.length + " sess");
             this.tabSessionsTravail = tabSessTrav;
             this.tabFaits = new Array();
             for(let i=0; i < this.tabSessionsTravail.length; i++)
             {
                 
                 this.tabFaits.push(new Fait(this.tabSessionsTravail[i]));
                 if (this.tabSessionsTravail[i].Fin != undefined)
                    this.tabFaits.push(new Fait(this.tabSessionsTravail[i], false) );
             }

             for(let i=0; i < this.tabCommentaires.length; i++)
             {
                // tr("Ajout d'un fait comm", true);
                 this.tabFaits.push(new Fait(this.sessionTravailCourante, false, this.tabCommentaires[i]));
             }
             this.tabFaits.sort(this.comparaisonDate);
             this.enleverDateRedondantes();
         }
         else
         {
          //tr("tab des sess trav est UNDEF");

         }
       }
     )
  }

  //--------------------------------------
  //
  //--------------------------------------
  comparaisonDate(f1:Fait, f2:Fait) 
  {
     if (f1.Date  > f2.Date)
        return -1;
     if (f1.Date< f2.Date)  
        return 1;

     if (f1.Heure > f2.Heure)   
        return -1;
     if (f1.Heure < f2.Heure) 
        return 1;

     return 0;   
  }

  //--------------------------------------
  //
  //--------------------------------------
  enregistrerCommentaire()
  {
    this.commentaire.IdDev = this.developpeurConnecte.Id;
    this.commentaire.IdSession = this.sessionTravailCourante.Id;
    
     this.jvSrv.postCommentaire(this.commentaire).subscribe(
        idNeoComm =>
        {
          tr("Insertion du comm " + idNeoComm);
        }
     );
     


    //tr("Enreg comm", true);
    this.formCommentaireVisible = false;
    this.commentaire.Horodateur = formatDate(new Date());
    this.commentaire.IdDev = this.developpeurConnecte.Id;
    this.commentaire.IdSession = this.sessionTravailCourante.Id;

    //tr("comm:" + this.commentaire.Contenu, true);

    this.tabCommentaires.push(this.commentaire);
    this.commentaire = new Commentaire();
    this.rafraichirJournal();

    this.formCommentaireVisible = false;

    this.btnCommentaireVisible=true;
    this.btnLectureTacheVisible=true;
    this.btnArreterVisible=true;
    this.btnChangerTache=true;
    
  }

  //--------------------------------------
  //
  //--------------------------------------
  enleverDateRedondantes()
  {
     let dateUnique = "9999-12-31";
     if (this.tabFaits[0] !== undefined)
        dateUnique = this.tabFaits[0].Date;
     
     for(let i=1; i<this.tabFaits.length; i++)   
     {
        if(this.tabFaits[i].Date === dateUnique )
          this.tabFaits[i].Date = "";
        else
          dateUnique = this.tabFaits[i].Date;
     }
  }

}
