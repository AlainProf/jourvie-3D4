<?php
include('./classes/BDService.php');

header('Content-type:application/json');
header('Access-Control-Allow-Origin: *');


// Fichier responsable de la connexion avec le client Jourvie

$idProj= $_GET['idProj'];

// Accès à l'API de MySQL
$maBd = new BDService();

$sql = "select * from taches where IdProjet=$idProj";

// Sélectionne le développeur qui tente d se connecter
$tabTaches = $maBd->selection($sql);

if (isset($tabTaches[0]))
{	
   echo json_encode($tabTaches);
}
else
   echo json_encode("Erreur 25 de récupération des tâches");






