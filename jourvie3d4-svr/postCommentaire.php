<?php
include('./classes/BDService.php');

//header('Content-type:application/json');
header('Access-Control-Allow-Origin: *');
ini_set('date.timezone', 'america/new_york');


// Fichier responsable dinsérer un commentaire 

// Accès à l'API de MySQL
$maBd = new BDService();

$idSession = $_POST['idSession'];
$idDev = $_POST['idDev'];
$contenu = $maBd->neutralise($_POST['contenu']);


$d = date('Y-m-d H:i:s');

$sql = "insert into commentaires value(null, $idSession, $idDev, '$contenu', '$d')";

// Sélectionne le développeur qui tente d se connecter
$idNeoComm = $maBd->insertion($sql);

if ($idNeoComm > 0)
{	
   echo json_encode($idNeoComm);
}
else
   echo json_encode("Erreur 31");






