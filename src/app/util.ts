/*-------------------------------------
   Fichier: util.ts
   auteur: Alain
   Date: 2023-08-31 
---------------------------------------*/

export const urlServeur="http://localhost/3d4/jourvie3d4-svr/";


export function tr(msg:string, ale=false, conso=true)
{
    if (ale)
      alert(msg);

    if (conso)  
      console.log(msg) 
}

   
//--------------------------------------
//
//--------------------------------------
export function formatDate(d:Date)
{
   let an = d.getFullYear();
   let mois = d.getMonth()+1;

   let moisStr='';
   if (mois < 10)
     moisStr = '0' + mois;
    else
     moisStr = '' + mois;

   let jour = d.getDate();   
   let jourStr='';
   if (jour < 10)
     jourStr = '0' + jour;
   else
          jourStr = '' + jour;

  let heure = d.getHours();   
  let heureStr='';
  if ( heure< 10)
  heureStr = '0' + heure;
  else
  heureStr = '' + heure;

  let minute  = d.getMinutes();   
  let minuteStr='';
  if ( minute< 10)
  minuteStr = '0' + minute;
  else
  minuteStr = '' + minute;

  let sec = d.getSeconds();   
  let secStr='';
  if ( sec< 10)
  secStr = '0' + sec;
  else
  secStr = '' + sec;
      
  return '' + an + "-" + moisStr + "-" + jourStr + " " + heureStr + ":"  + minuteStr + ":" + secStr;
          


}
