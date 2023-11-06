<?php
include('./classes/BDService.php');

header('Content-type:application/json');
header('Access-Control-Allow-Origin: *');


// Fichier responsable de la connexion avec le client Jourvie

$mat= $_GET['mat'];
$mdp = $_GET['mdp'];


// Accès à l'API de MySQL
$maBd = new BDService();

$sql = "select * from developpeurs where matricule='$mat' and motDePasse='$mdp'";

// Sélectionne le développeur qui tente d se connecter
$tabDevs = $maBd->selection($sql);

if (isset($tabDevs[0]))
{	
   $sql = "select nom from projets where Id = " . $tabDevs[0]['IdProjet'];
   //sélectionne le nom du projet associé au développeur connecté
   $tabNoms = $maBd->selection($sql);

   //fusion du nom du porjet ds les infos retournées au client    
   $tabDevs[0]['NomProjet'] = $tabNoms[0]['nom'];
   
   $sql = "select * from sessionstravail where idDev = " . $tabDevs[0]['Id'] . " and Fin is null order by Id desc";
   $tabSessTrav = $maBd->selection($sql);
   
   if (isset($tabSessTrav[0]))
   {
	   $tabDevs[0]['Etat'] = 'actif';
   }
   else
   {
	   $tabDevs[0]['Etat'] = 'inactif';
   }
   
   echo json_encode($tabDevs[0]);
}
else
   echo json_encode("Erreur 22 de connexion");






