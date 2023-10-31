<?php
include('./classes/BDService.php');

//header('Content-type:application/json');
header('Access-Control-Allow-Origin: *');
ini_set('date.timezone', 'america/new_york');


// Fichier responsable dinsérer une nouvelle session de travail

$idTache = $_POST['idTache'];
$idDev = $_POST['idDev'];

// Accès à l'API de MySQL
$maBd = new BDService();

$d = date('Y-m-d H:i:s');

$sql = "insert into sessionstravail value(null, $idTache, $idDev, '$d', null)";

// Sélectionne le développeur qui tente d se connecter
$idNeoSessTrav = $maBd->insertion($sql);

if ($idNeoSessTrav > 0)
{	
   $sql = "select * from sessionstravail where id=$idNeoSessTrav";
   $tabSessTrav = $maBd->selection($sql);
   echo json_encode($tabSessTrav[0]);
}
else
   echo json_encode("Erreur 30 d'insertion de session de travail");






